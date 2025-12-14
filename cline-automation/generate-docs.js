#!/usr/bin/env node

import OpenAI from 'openai';
import { Octokit } from '@octokit/rest';
import simpleGit from 'simple-git';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import chalk from 'chalk';
import ora from 'ora';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ClineDocGenerator {
  constructor(repoPath, outputPath) {
    this.repoPath = repoPath;
    this.outputPath = outputPath || path.join(repoPath, 'generated-docs');
    this.git = simpleGit(repoPath);

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });
  }

  async scanRepository() {
    const spinner = ora('Scanning repository...').start();
    
    try {
      // Get all relevant files
      const files = await glob('**/*.{js,ts,jsx,tsx,py,java,go,rs}', {
        cwd: this.repoPath,
        ignore: ['node_modules/**', 'dist/**', 'build/**', '.git/**']
      });

      spinner.succeed(`Found ${files.length} files to analyze`);
      
      return files;
    } catch (error) {
      spinner.fail('Failed to scan repository');
      throw error;
    }
  }

  async analyzeCodeStructure(files) {
    const spinner = ora('Analyzing code structure...').start();
    
    const structure = {
      files: [],
      imports: new Map(),
      exports: new Map(),
      functions: [],
      classes: []
    };

    for (const file of files) {
      const filePath = path.join(this.repoPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      
      structure.files.push({
        path: file,
        size: content.length,
        lines: content.split('\n').length
      });

      // Extract imports (simple regex - can be enhanced)
      const importMatches = content.matchAll(/import .* from ['"](.+)['"]/g);
      for (const match of importMatches) {
        if (!structure.imports.has(file)) {
          structure.imports.set(file, []);
        }
        structure.imports.get(file).push(match[1]);
      }
    }

    spinner.succeed('Code structure analyzed');
    return structure;
  }

  async generateAPIDocumentation(files) {
    const spinner = ora('Generating API documentation...').start();
    
    let apiDocs = '# API Reference\n\n';
    apiDocs += 'This documentation is automatically generated from code analysis.\n\n';

    // Sample files to analyze (limit for demo)
    const sampleFiles = files.slice(0, 5);

    for (const file of sampleFiles) {
      const filePath = path.join(this.repoPath, file);
      const content = await fs.readFile(filePath, 'utf-8');

      // Use OpenAI to analyze and document
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Analyze this code file and generate API documentation in Markdown format. Include:
- File purpose
- Key functions/classes
- Parameters and return types
- Usage examples if clear from context

Code file (${file}):
\`\`\`
${content.slice(0, 3000)}
\`\`\`

Return only the Markdown documentation, no preamble.`
        }]
      });

      const docText = response.choices[0].message.content;
      apiDocs += `\n## ${file}\n\n${docText}\n\n---\n\n`;
    }

    spinner.succeed('API documentation generated');
    return apiDocs;
  }

  async generateChangelog() {
    const spinner = ora('Generating changelog...').start();
    
    try {
      const log = await this.git.log({ maxCount: 50 });
      
      let changelog = '# Changelog\n\n';
      changelog += 'Auto-generated from commit history.\n\n';

      const groupedCommits = {
        features: [],
        fixes: [],
        other: []
      };

      for (const commit of log.all) {
        const message = commit.message.toLowerCase();
        
        if (message.includes('feat') || message.includes('add')) {
          groupedCommits.features.push(commit);
        } else if (message.includes('fix') || message.includes('bug')) {
          groupedCommits.fixes.push(commit);
        } else {
          groupedCommits.other.push(commit);
        }
      }

      if (groupedCommits.features.length > 0) {
        changelog += '## Features\n\n';
        for (const commit of groupedCommits.features) {
          changelog += `- ${commit.message} (${commit.hash.substring(0, 7)})\n`;
        }
        changelog += '\n';
      }

      if (groupedCommits.fixes.length > 0) {
        changelog += '## Bug Fixes\n\n';
        for (const commit of groupedCommits.fixes) {
          changelog += `- ${commit.message} (${commit.hash.substring(0, 7)})\n`;
        }
        changelog += '\n';
      }

      if (groupedCommits.other.length > 0) {
        changelog += '## Other Changes\n\n';
        for (const commit of groupedCommits.other.slice(0, 10)) {
          changelog += `- ${commit.message} (${commit.hash.substring(0, 7)})\n`;
        }
      }

      spinner.succeed('Changelog generated');
      return changelog;
    } catch (error) {
      spinner.fail('Failed to generate changelog');
      throw error;
    }
  }

  async generateArchitectureDiagram(structure) {
    const spinner = ora('Generating architecture diagram...').start();
    
    let diagram = '# Architecture\n\n';
    diagram += '```mermaid\n';
    diagram += 'graph TD\n';

    // Create nodes for main files
    const mainFiles = structure.files.slice(0, 10);
    mainFiles.forEach((file, index) => {
      const nodeName = file.path.replace(/[\/\.]/g, '_');
      diagram += `  ${nodeName}[${file.path}]\n`;
    });

    // Add some sample connections based on imports
    let connectionCount = 0;
    for (const [file, imports] of structure.imports.entries()) {
      if (connectionCount >= 15) break;
      
      const sourceNode = file.replace(/[\/\.]/g, '_');
      imports.slice(0, 3).forEach(imp => {
        const targetNode = imp.replace(/[\/\.]/g, '_');
        diagram += `  ${sourceNode} --> ${targetNode}\n`;
        connectionCount++;
      });
    }

    diagram += '```\n\n';
    diagram += '## Project Statistics\n\n';
    diagram += `- Total Files: ${structure.files.length}\n`;
    diagram += `- Total Lines: ${structure.files.reduce((sum, f) => sum + f.lines, 0)}\n`;
    diagram += `- Average File Size: ${Math.round(structure.files.reduce((sum, f) => sum + f.size, 0) / structure.files.length)} bytes\n`;

    spinner.succeed('Architecture diagram generated');
    return diagram;
  }

  async generateAllDocs() {
    console.log(chalk.blue.bold('\n🚀 Cline Documentation Generator\n'));
    
    try {
      // Ensure output directory exists
      await fs.mkdir(this.outputPath, { recursive: true });

      // Scan repository
      const files = await this.scanRepository();
      
      // Analyze structure
      const structure = await this.analyzeCodeStructure(files);

      // Generate different doc types
      const [apiDocs, changelog, architecture] = await Promise.all([
        this.generateAPIDocumentation(files),
        this.generateChangelog(),
        this.generateArchitectureDiagram(structure)
      ]);

      // Write documentation files
      const writeSpinner = ora('Writing documentation files...').start();
      
      await Promise.all([
        fs.writeFile(path.join(this.outputPath, 'api.md'), apiDocs),
        fs.writeFile(path.join(this.outputPath, 'changelog.md'), changelog),
        fs.writeFile(path.join(this.outputPath, 'architecture.md'), architecture)
      ]);

      writeSpinner.succeed('Documentation files written');

      console.log(chalk.green.bold('\n✅ Documentation generation complete!\n'));
      console.log(chalk.gray(`Output directory: ${this.outputPath}\n`));

      return {
        apiDocs,
        changelog,
        architecture,
        outputPath: this.outputPath
      };
    } catch (error) {
      console.error(chalk.red('\n❌ Error generating documentation:'), error.message);
      throw error;
    }
  }
}

// CLI usage
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const repoPath = process.argv[2] || process.cwd();
  const outputPath = process.argv[3];

  const generator = new ClineDocGenerator(repoPath, outputPath);
  generator.generateAllDocs().catch(console.error);
}

export default ClineDocGenerator;
