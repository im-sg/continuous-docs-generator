#!/bin/bash

# Continuous Documentation Generator - Quick Setup Script
# This script sets up the entire project for the hackathon demo

set -e

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║   Continuous Documentation Generator - Setup Script      ║"
echo "║   Automated docs with Cline + Kestra + CodeRabbit       ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"

command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting."; exit 1; }
command -v git >/dev/null 2>&1 || { echo "❌ git is required but not installed. Aborting."; exit 1; }

echo -e "${GREEN}✅ All prerequisites found${NC}\n"

# Get user input for API keys
echo -e "${YELLOW}Please provide your API keys (press Enter to skip):${NC}"
read -p "OpenAI API Key: " OPENAI_KEY
read -p "Anthropic API Key: " ANTHROPIC_KEY
read -p "GitHub Token: " GITHUB_TOKEN

# Setup documentation site
echo -e "\n${BLUE}Setting up documentation site...${NC}"
cd docs-site
npm install
echo -e "${GREEN}✅ Documentation site installed${NC}"

# Create .env.local
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GITHUB_TOKEN=${GITHUB_TOKEN}
EOF

# Setup Cline automation
echo -e "\n${BLUE}Setting up Cline automation...${NC}"
cd ../cline-automation
npm install
echo -e "${GREEN}✅ Cline automation installed${NC}"

# Create .env
cat > .env << EOF
OPENAI_API_KEY=${OPENAI_KEY}
ANTHROPIC_API_KEY=${ANTHROPIC_KEY}
GITHUB_TOKEN=${GITHUB_TOKEN}
EOF

# Initialize git if not already
cd ..
if [ ! -d .git ]; then
    echo -e "\n${BLUE}Initializing Git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit: Continuous Documentation Generator"
    echo -e "${GREEN}✅ Git repository initialized${NC}"
fi

# Create sample documentation
echo -e "\n${BLUE}Generating sample documentation...${NC}"
cd cline-automation
node generate-docs.js .. ../docs-site/pages/generated 2>/dev/null || echo "Note: Full doc generation requires API keys"
cd ..

echo -e "\n${GREEN}✅ Sample documentation created${NC}"

# Setup instructions
echo -e "\n╔═══════════════════════════════════════════════════════════╗"
echo -e "║                  🎉 SETUP COMPLETE! 🎉                    ║"
echo -e "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo "1. Start the documentation site:"
echo -e "   ${BLUE}cd docs-site && npm run dev${NC}"
echo "   Visit: http://localhost:3000"
echo ""
echo "2. Generate documentation for any repo:"
echo -e "   ${BLUE}cd cline-automation${NC}"
echo -e "   ${BLUE}node generate-docs.js /path/to/repo${NC}"
echo ""
echo "3. Deploy to Vercel:"
echo -e "   ${BLUE}npm install -g vercel${NC}"
echo -e "   ${BLUE}cd docs-site && vercel${NC}"
echo ""
echo "4. Setup Kestra (optional):"
echo -e "   ${BLUE}cd kestra-workflows${NC}"
echo -e "   ${BLUE}docker-compose up -d${NC}"
echo "   Visit: http://localhost:8080"
echo ""
echo "5. Enable CodeRabbit:"
echo "   - Visit https://coderabbit.ai"
echo "   - Connect your GitHub repository"
echo "   - Create a PR to test"
echo ""
echo -e "${GREEN}For the hackathon demo:${NC}"
echo "1. Record showing the docs site running"
echo "2. Show Cline generating docs from code"
echo "3. Show Kestra workflow (if configured)"
echo "4. Show a PR with CodeRabbit review"
echo ""
echo -e "${YELLOW}Good luck with your hackathon! 🚀${NC}"
