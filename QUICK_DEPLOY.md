# ⚡ Quick Deployment (5 Minutes)

## For Experienced Developers

### 1. Setup (< 1 minute)
```bash
cd MBA-Token
cp .env.example .env
# Edit .env with your keys
npm install
```

### 2. Compile (< 1 minute)
```bash
npm run compile
```

### 3. Test (< 2 minutes)
```bash
npm test
```

### 4. Deploy (< 1 minute)
```bash
# Testnet
npm run deploy:testnet

# Or Mainnet (real ETH!)
npm run deploy:mainnet
```

### 5. Verify (< 1 minute)
```bash
# Replace 0x... with your contract address
npx hardhat verify --network sepolia 0x... 1000000
```

## Your Contract Address
Copy it from deployment output → Use in dashboard and dApps

## What You Get
- ✅ Deployed ERC20 token
- ✅ Verified source on Etherscan
- ✅ Ready-to-use dashboard
- ✅ All functions tested and working

## Need Help?
See `DEPLOYMENT_SETUP.md` for detailed guide
