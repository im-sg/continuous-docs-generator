# Project Structure

```
continuous-docs-generator/
├── README.md                          # Main project documentation
├── QUICK_START.md                     # Fast setup guide (15 min)
├── HACKATHON_CHECKLIST.md             # Submission checklist
├── DEMO_SCRIPT.md                     # 2-minute demo guide
├── setup.sh                           # Automated setup script
├── .gitignore                         # Git ignore rules
├── .coderabbit.yaml                   # CodeRabbit configuration
├── vercel.json                        # Vercel deployment config
│
├── docs-site/                         # Next.js Documentation Site
│   ├── package.json                   # Dependencies
│   ├── next.config.js                 # Next.js config with Nextra
│   ├── theme.config.jsx               # Nextra theme configuration
│   └── pages/                         # Documentation pages
│       ├── index.mdx                  # Home page
│       ├── getting-started.mdx        # Setup guide
│       └── generated/                 # Auto-generated docs go here
│
├── cline-automation/                  # Cline CLI Automation
│   ├── package.json                   # Dependencies
│   ├── generate-docs.js               # Main doc generation script
│   ├── .env.example                   # Environment template
│   └── generated-docs/                # Output directory (gitignored)
│
├── kestra-workflows/                  # Kestra Orchestration
│   ├── docker-compose.yml             # Kestra setup
│   ├── weekly-summary.yml             # AI Agent workflow
│   └── .env.example                   # Environment template
│
├── .github/                           # GitHub Configuration
│   └── workflows/
│       └── auto-docs.yml              # Auto-PR creation workflow
│
└── sample-project/                    # Demo Project
    ├── calculator.js                  # Sample code with JSDoc
    └── userService.js                 # More sample code

```

## File Descriptions

### Root Files

- **README.md**: Comprehensive project documentation with setup instructions, architecture, and features
- **QUICK_START.md**: Time-efficient setup guide for hackathon (15 minutes)
- **HACKATHON_CHECKLIST.md**: Prize requirements and submission checklist
- **DEMO_SCRIPT.md**: Step-by-step 2-minute demo recording guide
- **setup.sh**: Automated setup script for quick installation
- **.gitignore**: Git ignore patterns for node_modules, .env, etc.
- **.coderabbit.yaml**: CodeRabbit review configuration
- **vercel.json**: Vercel deployment configuration

### Documentation Site (docs-site/)

Next.js site with Nextra theme for beautiful documentation:

- **package.json**: Next.js, React, Nextra dependencies
- **next.config.js**: Configures Nextra integration
- **theme.config.jsx**: Customizes documentation theme
- **pages/index.mdx**: Landing page with project overview
- **pages/getting-started.mdx**: Detailed setup instructions
- **pages/generated/**: Auto-generated docs from Cline

### Cline Automation (cline-automation/)

AI-powered documentation generation:

- **generate-docs.js**: Main script that:
  - Scans repository files
  - Analyzes code structure
  - Generates API docs from code comments
  - Creates changelogs from git history
  - Builds architecture diagrams
  - Uses Claude AI for intelligent analysis

- **package.json**: Dependencies (Anthropic SDK, Octokit, etc.)

### Kestra Workflows (kestra-workflows/)

Workflow orchestration with AI agent:

- **weekly-summary.yml**: Kestra workflow that:
  - Fetches git diffs weekly
  - Uses OpenAI to summarize changes
  - Makes decisions about doc updates
  - Creates automated PRs
  - Triggers Vercel rebuilds

- **docker-compose.yml**: Sets up Kestra + PostgreSQL

### GitHub Actions (.github/workflows/)

- **auto-docs.yml**: Workflow that:
  - Runs on schedule (weekly) or push
  - Generates docs using Cline
  - Creates pull request
  - Requests CodeRabbit review
  - Manages automation

### Sample Project (sample-project/)

Demonstration code for doc generation:

- **calculator.js**: Math functions with JSDoc comments
- **userService.js**: User CRUD operations with JSDoc

## Technology Stack

### Frontend
- **Next.js 14**: React framework
- **Nextra**: Documentation theme
- **Tailwind CSS**: Styling (implicit in Nextra)

### Backend/Automation
- **Cline CLI**: AI-powered code analysis
- **Kestra**: Workflow orchestration
- **Node.js**: Runtime environment

### AI & APIs
- **Claude (Anthropic)**: Code analysis and doc generation
- **OpenAI GPT-4**: Kestra AI Agent summaries
- **GitHub API**: PR creation and management

### DevOps
- **Vercel**: Deployment and hosting
- **Docker**: Kestra containerization
- **GitHub Actions**: CI/CD automation
- **CodeRabbit**: AI code review

## Data Flow

```
1. Code Change
   ↓
2. Cline CLI analyzes code
   ↓
3. Generates markdown docs
   ↓
4. GitHub Actions creates PR
   ↓
5. CodeRabbit reviews PR
   ↓
6. Kestra AI Agent analyzes changes
   ↓
7. Decides if rebuild needed
   ↓
8. Merge PR
   ↓
9. Vercel auto-deploys
   ↓
10. Live documentation updated
```

## Environment Variables Needed

### docs-site/.env.local
```
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
GITHUB_TOKEN=ghp_xxxxx
```

### cline-automation/.env
```
ANTHROPIC_API_KEY=sk-ant-xxxxx
OPENAI_API_KEY=sk-xxxxx
GITHUB_TOKEN=ghp_xxxxx
```

### kestra-workflows/.env
```
OPENAI_API_KEY=sk-xxxxx
GITHUB_TOKEN=ghp_xxxxx
VERCEL_TOKEN=xxxxx
```

## Dependencies Count

- **docs-site**: 6 packages (Next.js, React, Nextra)
- **cline-automation**: 9 packages (AI SDKs, Git tools, CLI helpers)
- **Total node_modules size**: ~200MB

## Generated Files (Not in Repo)

These are created during runtime:

- `cline-automation/generated-docs/` - Generated documentation
- `docs-site/.next/` - Next.js build output
- `docs-site/out/` - Static export (if used)
- `kestra-workflows/data/` - Kestra data directory

## Size Estimates

- **Source code**: ~50KB
- **Documentation**: ~30KB
- **Configuration**: ~10KB
- **With dependencies**: ~200MB
- **After build**: ~50MB

## Key Features by File

| File | Feature | Prize Category |
|------|---------|----------------|
| `generate-docs.js` | Cline automation | Infinity Build ($5K) |
| `weekly-summary.yml` | Kestra AI Agent | Wakanda Data ($4K) |
| `vercel.json` | Deployment | Stormbreaker ($2K) |
| `.coderabbit.yaml` | Code review | Captain Code ($1K) |
| `auto-docs.yml` | CI/CD workflow | All categories |

## Quick Navigation

- Need to set up? → **QUICK_START.md**
- Ready to demo? → **DEMO_SCRIPT.md**
- Submitting? → **HACKATHON_CHECKLIST.md**
- Understanding code? → **README.md**
- Configuring? → Respective `.env.example` files
