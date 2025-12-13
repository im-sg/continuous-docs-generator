# ⚡ Quick Start Guide - Get Running in 15 Minutes

Time-sensitive guide for hackathon participants with limited time.

## Prerequisites Check (2 minutes)

Run these commands to verify you have everything:

```bash
node --version  # Need 18+
npm --version
git --version
```

If missing any, install from:
- Node.js: https://nodejs.org/
- Git: https://git-scm.com/

## Fast Track Setup (5 minutes)

### 1. Clone and Install (2 minutes)

```bash
git clone https://github.com/YOUR_USERNAME/continuous-docs-generator.git
cd continuous-docs-generator
chmod +x setup.sh
```

### 2. Get API Keys (3 minutes)

You need at minimum:
- **OpenAI API Key**: https://platform.openai.com/api-keys (Required)
- **GitHub Token**: https://github.com/settings/tokens (Required for PRs)

Optional but recommended:
- **Anthropic API Key**: https://console.anthropic.com/

### 3. Run Setup Script

```bash
./setup.sh
```

Enter your API keys when prompted.

## Test It Works (3 minutes)

### Test 1: Documentation Site

```bash
cd docs-site
npm run dev
```

Visit http://localhost:3000 - you should see the documentation site! ✅

### Test 2: Generate Docs

Open a new terminal:

```bash
cd cline-automation
node generate-docs.js ../sample-project
```

Check `generated-docs/` folder - you should see:
- `api.md`
- `changelog.md`
- `architecture.md`

✅ If you see these files, Cline is working!

## Deploy to Vercel (5 minutes)

### Option A: Vercel CLI (Faster)

```bash
npm install -g vercel
cd docs-site
vercel
```

Follow prompts, select defaults. You'll get a live URL! 🎉

### Option B: Vercel Dashboard

1. Visit https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Set root directory to `docs-site`
6. Deploy!

## Create Your First PR (Optional - 5 minutes)

### 1. Make a Change

```bash
cd docs-site/pages
echo "# Test Page\n\nThis is a test." > test.md
git add .
git commit -m "Add test page"
git push origin main
```

### 2. Enable CodeRabbit

1. Visit https://coderabbit.ai
2. Sign in with GitHub
3. Enable for your repository

### 3. Create a PR

```bash
git checkout -b add-test-page
git push origin add-test-page
```

Go to GitHub and create a PR. CodeRabbit should automatically review it! ✅

## Kestra Setup (Optional - If You Have Docker)

```bash
cd kestra-workflows

# Create .env file
cat > .env << EOF
OPENAI_API_KEY=your_key_here
GITHUB_TOKEN=your_token_here
EOF

# Start Kestra
docker-compose up -d

# Check it's running
curl http://localhost:8080/api/v1/flows
```

Visit http://localhost:8080 to see Kestra UI.

## What You Have Now

✅ Documentation site running locally
✅ Cline CLI generating docs
✅ Site deployed on Vercel (if you deployed)
✅ CodeRabbit ready to review PRs
✅ Kestra workflow (if using Docker)

## Record Your Demo (30 minutes)

Follow the **DEMO_SCRIPT.md** for the 2-minute video.

Quick checklist:
1. Show live Vercel deployment
2. Run Cline doc generation
3. Show Kestra workflow (if set up)
4. Show a PR with CodeRabbit review
5. Explain the automation flow

## Troubleshooting

### Port 3000 in use?
```bash
PORT=3001 npm run dev
```

### Cline not generating docs?
- Check your API key in `.env`
- Make sure it's OpenAI or Anthropic key
- Run with `DEBUG=* node generate-docs.js` for logs

### Vercel deploy fails?
- Make sure you're in `docs-site` directory
- Check `next.config.js` exists
- Try `npm run build` locally first

### CodeRabbit not responding?
- Make sure repository is public
- Check CodeRabbit is enabled for your repo
- Try mentioning `@coderabbitai review` in PR

## Minimal Working Demo

If super short on time, you can demo with just:

1. **Docs Site** (localhost is fine)
2. **Cline Generation** (show terminal output)
3. **Show the code** (explain what it does)

This still qualifies for prizes! Just make sure:
- Code is in GitHub
- README explains everything
- Demo video shows it working

## Prize Requirements Quick Check

| Prize | Requirement | Status |
|-------|-------------|---------|
| Infinity Build ($5K) | Use Cline CLI | ✅ `generate-docs.js` |
| Wakanda Data ($4K) | Kestra AI Agent | ✅ `weekly-summary.yml` |
| Stormbreaker ($2K) | Deploy on Vercel | ⏳ Deploy now! |
| Captain Code ($1K) | CodeRabbit PRs | ⏳ Create PR! |

## Next Steps

1. **If everything works:** Record demo, submit!
2. **If issues:** Check HACKATHON_CHECKLIST.md
3. **Need help:** Check troubleshooting or ask in Discord

## Time Allocation Suggestion

- Setup: 15 minutes
- Testing: 10 minutes
- Deploy: 5 minutes
- Demo prep: 15 minutes
- Recording: 30 minutes
- Submission: 10 minutes

**Total: ~85 minutes** to complete submission

Good luck! 🚀
