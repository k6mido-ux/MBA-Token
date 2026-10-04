#!/bin/bash

# 🚀 MBA Token - Complete Deployment Script
# This script automates the entire deployment process

set -e

echo ""
echo "========================================"
echo "🚀 MBA TOKEN AUTOMATED DEPLOYMENT"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ .env file not found!${NC}"
    echo "Please copy .env.example to .env and fill in your values:"
    echo "   cp .env.example .env"
    exit 1
fi

echo -e "${GREEN}✅ .env file found${NC}"
echo ""

# Step 1: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 2: Compile contract
echo -e "${YELLOW}🔨 Compiling contract...${NC}"
npm run compile
echo -e "${GREEN}✅ Contract compiled${NC}"
echo ""

# Step 3: Run tests
echo -e "${YELLOW}🧪 Running tests...${NC}"
npm test
echo -e "${GREEN}✅ All tests passed${NC}"
echo ""

# Step 4: Deploy
echo -e "${YELLOW}🚀 Deploying to Sepolia...${NC}"
npm run deploy:testnet
echo -e "${GREEN}✅ Deployment successful${NC}"
echo ""

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ DEPLOYMENT COMPLETE!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Copy your contract address from above"
echo "2. Run verification: npx hardhat verify --network sepolia 0x... 1000000"
echo "3. Update web/dashboard.html with CONTRACT_ADDRESS and CONTRACT_ABI"
echo "4. Test the dashboard"
echo ""
