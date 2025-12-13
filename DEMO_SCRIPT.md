# 🎬 2-Minute Demo Script

## Recording Setup
- **Tool:** Loom or OBS Studio
- **Resolution:** 1920x1080
- **Audio:** Clear microphone
- **Duration:** Exactly 2 minutes (120 seconds)

## Screen Setup Before Recording
Open these tabs/windows in order:
1. Live documentation site (Vercel deployment)
2. VS Code with project open
3. Terminal ready for Cline demo
4. Kestra UI (localhost:8080) - if running
5. GitHub PR with CodeRabbit review

---

## Script Timeline

### 🎬 INTRO (0:00 - 0:15) - 15 seconds

**[Show deployed documentation site]**

> "Hi! I'm Sasi, and this is the Continuous Documentation Generator - an automated system that keeps your docs always up-to-date using AI."

**[Quick scroll through the docs site]**

> "Built with Cline CLI, Kestra, CodeRabbit, and deployed on Vercel. Let me show you how it works."

---

### 🤖 CLINE CLI DEMO (0:15 - 0:45) - 30 seconds

**[Switch to terminal]**

> "First, Cline CLI automatically analyzes your codebase..."

**[Type and run]:**
```bash
cd cline-automation
node generate-docs.js ../sample-project
```

**[Show output scrolling - don't wait for completion]**

> "It scans all files, extracts API documentation from code comments, generates changelogs from git history, and creates architecture diagrams."

**[Quick show generated files]:**
```bash
ls generated-docs/
cat generated-docs/api.md | head -20
```

> "All automatically generated with AI - no manual work needed."

---

### 🔄 KESTRA WORKFLOW (0:45 - 1:15) - 30 seconds

**[Switch to Kestra UI]**

> "Kestra orchestrates weekly automation. Its AI Agent summarizes code changes..."

**[Show weekly-summary workflow]**

> "Every Monday, it fetches git diffs, uses OpenAI to summarize what changed, and here's the key part..."

**[Point to decision-making task]**

> "The AI Agent doesn't just summarize - it analyzes the changes and decides: Do we need to update API docs? Should we rebuild architecture diagrams? Is this urgent?"

**[Show example output/logs]**

> "Based on these decisions, it automatically triggers documentation updates and creates pull requests."

---

### ✅ CODERABBIT REVIEW (1:15 - 1:35) - 20 seconds

**[Switch to GitHub PR tab]**

> "Every documentation update gets reviewed by CodeRabbit for quality."

**[Scroll through PR showing CodeRabbit comments]**

> "It checks for completeness, suggests improvements, validates links, and ensures best practices. No outdated or low-quality docs slip through."

**[Show approval/merge]**

---

### 🚀 VERCEL DEPLOYMENT (1:35 - 1:50) - 15 seconds

**[Switch back to live site]**

> "And when the PR merges, Vercel automatically deploys the updated docs."

**[Show recent deployment in Vercel dashboard or just the live site]**

> "The entire cycle - from code change to live documentation - happens automatically. No manual intervention needed."

---

### 🎯 CONCLUSION (1:50 - 2:00) - 10 seconds

**[Show project overview - maybe GitHub repo]**

> "Complete documentation automation: Cline generates, Kestra orchestrates, CodeRabbit reviews, Vercel deploys. Built for the WeMakeDevs hackathon."

**[Show GitHub repo URL on screen]**

> "Check out the repo at github.com/YOUR_USERNAME/continuous-docs-generator. Thanks!"

**[End]**

---

## Key Points to Emphasize

1. **Automation:** Everything happens automatically
2. **AI-Powered:** Uses AI for intelligent analysis and decisions
3. **Quality:** CodeRabbit ensures high standards
4. **Complete Cycle:** From code to deployed docs
5. **All Sponsors:** Uses Cline, Kestra, CodeRabbit, Vercel

## Recording Tips

### Before Recording
- [ ] Close unnecessary tabs
- [ ] Clear terminal history
- [ ] Have example output ready
- [ ] Test all commands work
- [ ] Clear notifications
- [ ] Full screen mode

### During Recording
- Speak clearly and at moderate pace
- Don't rush technical terms
- Show, don't just tell
- Keep cursor movements smooth
- Smile (even if not on camera, it affects voice)

### Commands to Prepare

**Terminal 1 (Cline Demo):**
```bash
cd cline-automation
node generate-docs.js ../sample-project
ls generated-docs/
cat generated-docs/api.md | head -20
```

**Browser Tabs Order:**
1. Deployed docs site
2. Kestra UI with workflow
3. GitHub PR with CodeRabbit
4. GitHub repo (for ending)

### Backup Plan

If something fails during recording:
- Have pre-recorded terminal output as backup
- Have screenshots of Kestra workflow results
- Have PR screenshots saved

## Alternative 90-Second Version

If you want to save time for Q&A:

- **0:00-0:10:** Quick intro + show site
- **0:10-0:30:** Cline demo (20s)
- **0:30-0:50:** Kestra AI Agent (20s)
- **0:50-1:05:** CodeRabbit review (15s)
- **1:05-1:20:** Vercel deployment (15s)
- **1:20-1:30:** Conclusion (10s)

## Post-Recording

1. **Review:** Watch once to check quality
2. **Edit:** Trim start/end if needed
3. **Upload:** YouTube (unlisted) or Loom
4. **Add to README:** Update link
5. **Test Link:** Verify it's accessible

## Demo Enhancement Ideas

If time allows, add:
- Quick code walkthrough
- Show before/after documentation
- Display metrics (files processed, time saved)
- Show mobile view of docs site

---

**Practice this 3-4 times before final recording!**

**Actual recording time needed:** 10-15 minutes (including retakes)
