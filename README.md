# Continuous Documentation Generator

> Automated documentation generation powered by Cline CLI, Kestra, CodeRabbit, and deployed on Vercel

## 🎯 Overview

This project automates the entire documentation lifecycle:
- **Cline CLI** scans repositories and auto-generates documentation (API docs, changelogs, architecture diagrams)
- **Kestra** summarizes code diffs weekly using AI agents
- **CodeRabbit** reviews generated documentation for quality
- **Vercel** hosts the live documentation site

## 🏆 Hackathon Prize Categories

This project qualifies for:
- ✅ **Infinity Build Award** ($5,000) - Cline CLI automation
- ✅ **Wakanda Data Award** ($4,000) - Kestra AI Agent summarization
- ✅ **Stormbreaker Deployment Award** ($2,000) - Vercel deployment
- ✅ **Captain Code Award** ($1,000) - CodeRabbit integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- GitHub account
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/continuous-docs-generator.git
cd continuous-docs-generator

# Install dependencies for documentation site
cd docs-site
npm install

# Install Cline CLI
cd ../cline-automation
npm install

# Set up Kestra (Docker)
cd ../kestra-workflows
docker-compose up -d
```

### Environment Variables

Create `.env` files in respective directories:

**docs-site/.env.local**
```
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
GITHUB_TOKEN=your_github_token
```

**cline-automation/.env**
```
OPENAI_API_KEY=your_openai_key
GITHUB_TOKEN=your_github_token
REPO_PATH=/path/to/your/repo
```

**kestra-workflows/.env**
```
OPENAI_API_KEY=your_openai_key
GITHUB_TOKEN=your_github_token
```

## 📁 Project Structure

```
continuous-docs-generator/
├── docs-site/              # Next.js + Nextra documentation site
│   ├── pages/
│   ├── public/
│   └── theme.config.jsx
├── cline-automation/       # Cline CLI scripts
│   ├── generate-docs.js
│   ├── scan-repo.js
│   └── create-pr.js
├── kestra-workflows/       # Kestra workflow definitions
│   ├── weekly-summary.yml
│   └── docker-compose.yml
└── README.md
```

## 🔧 How It Works

### 1. Cline CLI Automation
Cline scans your repository and generates:
- API documentation from code comments
- Changelog from commit history
- Architecture diagrams from code structure
- Setup guides from configuration files

```bash
cd cline-automation
npm run generate-docs -- --repo=/path/to/repo
```

### 2. Kestra Weekly Summaries
Kestra runs weekly to:
- Fetch git diffs from the past week
- Use AI Agent to summarize changes
- Generate human-readable update reports
- Trigger documentation regeneration

### 3. CodeRabbit Review
Generated documentation is committed via PR:
- CodeRabbit automatically reviews
- Suggests improvements for clarity
- Checks for completeness
- Ensures consistency

### 4. Vercel Deployment
Documentation site automatically deploys:
- Live updates on merge
- Preview deployments for PRs
- Global CDN distribution

## 🎥 Demo Video

[Watch 2-minute demo](https://your-demo-link.com)

## 🛠️ Usage Examples

### Generate Documentation for Any Repo

```bash
# Using Cline CLI
cline generate-docs \
  --repo=https://github.com/username/project \
  --output=./generated-docs \
  --format=markdown

# View generated docs locally
cd docs-site
npm run dev
```

### Trigger Kestra Workflow Manually

```bash
curl -X POST http://localhost:8080/api/v1/executions/trigger \
  -H "Content-Type: application/json" \
  -d '{
    "namespace": "continuous-docs",
    "flowId": "weekly-summary"
  }'
```

## 📊 Features

- ✅ **Automatic API Documentation** - Extracts from JSDoc, TypeScript, Python docstrings
- ✅ **Smart Changelog Generation** - Groups commits by feature/fix/breaking
- ✅ **Architecture Visualization** - Generates Mermaid diagrams from imports
- ✅ **Weekly AI Summaries** - Natural language updates of code changes
- ✅ **PR-Based Review Flow** - All docs reviewed before deployment
- ✅ **Live Documentation Site** - Always up-to-date, searchable docs

## 🧪 Testing

```bash
# Test Cline automation
cd cline-automation
npm test

# Test Kestra workflows locally
cd kestra-workflows
./test-workflow.sh

# Test documentation site
cd docs-site
npm run build
```

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a PR (CodeRabbit will review!)

## 📝 License

MIT License - see LICENSE file for details

## 👥 Team

- **Sasi** - Project Lead & Full Stack Development

## 🙏 Acknowledgments

- Cline CLI for autonomous coding capabilities
- Kestra for workflow orchestration
- CodeRabbit for AI-powered code reviews
- Vercel for seamless deployment

## 📞 Support

For questions or issues, please open a GitHub issue or contact via the hackathon Discord.

---

Built with ❤️ for the WeMakeDevs Hackathon
