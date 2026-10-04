# 🚀 MBA Token - Complete Deployment Guide

## Prerequisites

Before you start, ensure you have:

1. **Node.js** (v14 or higher)
   ```bash
   node --version
   ```

2. **Ethereum Wallet** with testnet funds
   - MetaMask, Ledger, Trezor, or similar
   - Get testnet ETH from: https://sepoliafaucet.com/

3. **Infura or Alchemy Account** (for RPC endpoint)
   - Sign up: https://infura.io/ or https://www.alchemy.com/
   - Create project to get API key

4. **Etherscan API Key** (for contract verification)
   - Sign up: https://etherscan.io/apis
   - Create API key

## Step 1: Setup Environment Variables

```bash
cd MBA-Token

# Copy the example file
cp .env.example .env
```

## Step 2: Configure .env File

Edit `.env` and add your actual values:

```env
# Get from Infura/Alchemy
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_ACTUAL_KEY
MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_ACTUAL_KEY

# Your wallet private key (NEVER share this!)
# Get from MetaMask: Settings > Security & Privacy > Show Private Key
PRIVATE_KEY=your_actual_private_key_here

# Get from Etherscan API
ETHERSCAN_API_KEY=your_actual_etherscan_key
```

⚠️ **IMPORTANT SECURITY NOTES:**
- NEVER commit `.env` to GitHub
- NEVER share your private key
- The `.env` file is already in `.gitignore`
- Consider using environment variables instead for production

## Step 3: Install Dependencies

```bash
# Install npm packages
npm install
```

## Step 4: Compile Smart Contract

```bash
# Compile the Solidity contract
npm run compile

# Or directly:
hardhat compile
```

Expected output:
```
✨ Compiled 1 Solidity file successfully
```

## Step 5: Run Tests (Optional but Recommended)

```bash
# Run all tests
npm test

# Or with gas report:
npm run gas-report
```

All tests should pass ✅

## Step 6: Deploy to Sepolia Testnet

```bash
# Deploy to Sepolia
npm run deploy:testnet
```

You'll see output like:
```
========================================
🚀 MBA TOKEN DEPLOYMENT STARTED
========================================

📍 Deploying from: 0x...
🌐 Network: sepolia (Chain ID: 11155111)
💰 Account Balance: 0.5 ETH

📝 Deploying MBA Token with initial supply: 1000000...

⏳ Deployment transaction: 0x...
⏳ Waiting for confirmation...

✅ MBA Token deployed successfully!
📄 Contract Address: 0x... <-- SAVE THIS!

========================================
📋 TOKEN DETAILS
========================================
   Name: MBA Token
   Symbol: MBA
   Decimals: 18
   Total Supply: 1000000.0 MBA
   Owner: 0x...
========================================

========================================
🔗 NEXT STEPS
========================================

1. Verify the contract on Etherscan:
   https://sepolia.etherscan.io/address/0x...

2. To verify on Etherscan, run:
   npx hardhat verify --network sepolia 0x... 1000000
...
```

## Step 7: Verify Contract on Etherscan

This makes the contract code visible and trustworthy:

```bash
# Replace 0x... with your actual contract address
npx hardhat verify --network sepolia 0xYourContractAddress 1000000
```

Success output:
```
✅ Contract verified successfully on etherscan
```

## Step 8: Check Your Deployment

1. Visit Etherscan:
   - Go to: https://sepolia.etherscan.io/
   - Search for your contract address
   - You should see:
     - Contract name: MBAToken
     - Token name: MBA Token
     - Symbol: MBA
     - Decimals: 18
     - Total Supply: 1,000,000 MBA

2. Interact with contract:
   - Click "Contract" tab
   - Click "Write Contract"
   - Connect MetaMask
   - Test functions like `transfer`, `mint`, `burn`

## Step 9: Update Dashboard

Edit `web/dashboard.html` and replace:

```javascript
const CONTRACT_ADDRESS = "0xYourContractAddressHere";
```

Also update the ABI:
1. Find the file: `deployments/MBAToken-ABI.json`
2. Copy its contents
3. Paste into `dashboard.html` replacing `const CONTRACT_ABI = [];`

## Step 10: Test the Dashboard

```bash
# Option 1: Using Python (if installed)
python -m http.server 8000

# Option 2: Using Node.js
npx http-server

# Option 3: Just open the file in browser
# Right-click on web/dashboard.html and select "Open with Browser"
```

Then:
1. Go to http://localhost:8000/web/dashboard.html
2. Connect MetaMask to Sepolia
3. Click "Connect Wallet"
4. Try transferring tokens!

## Deployment to Mainnet

⚠️ **MAINNET DEPLOYMENT IS IRREVERSIBLE! Follow these steps carefully:**

### Before Mainnet:
1. ✅ Test thoroughly on Sepolia
2. ✅ Verify contract works as expected
3. ✅ Check all functions (transfer, mint, burn, etc.)
4. ✅ Have sufficient ETH for gas (usually 0.01 - 0.1 ETH)

### Mainnet Deployment:

```bash
# Deploy to Ethereum Mainnet
npm run deploy:mainnet
```

This will deploy to the main network and cost real ETH.

## Deployment to Polygon

```bash
# Deploy to Polygon (much cheaper gas)
npm run deploy:polygon
```

## Troubleshooting

### Error: "Cannot find module 'hardhat'"
```bash
npm install
```

### Error: "Invalid private key"
- Check `.env` file has correct `PRIVATE_KEY`
- Make sure it's without '0x' prefix (if Hardhat requires it)
- Verify it's a valid Ethereum private key

### Error: "Insufficient funds for gas"
- Get more Sepolia ETH from: https://sepoliafaucet.com/
- Wait for confirmation in MetaMask
- Ensure the `.env` has the correct private key for the funded wallet

### Error: "Network error / Cannot connect"
- Check your RPC URL in `.env`
- Verify Infura/Alchemy API key is correct
- Ensure internet connection

### Error: "Contract not found after compilation"
```bash
# Clean and recompile
npm run clean
npm run compile
```

## Useful Commands

```bash
# Compile contract
npm run compile

# Run tests
npm test

# Deploy to testnet
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet

# Interact with deployed contract
npm run interact

# Verify contract
npm run verify

# Clean build artifacts
npm run clean

# Gas usage report
npm run gas-report
```

## Security Checklist

- [ ] Private key is in `.env` (not in code)
- [ ] `.env` is in `.gitignore`
- [ ] Never shared private key
- [ ] Tested thoroughly on testnet
- [ ] Contract verified on Etherscan
- [ ] All function calls tested
- [ ] Used hardware wallet (optional but recommended)
- [ ] Backup of private key in safe place

## Support & Documentation

- Hardhat Docs: https://hardhat.org/
- Etherscan Docs: https://docs.etherscan.io/
- OpenZeppelin: https://docs.openzeppelin.com/
- Solidity: https://docs.soliditylang.org/

---

**Made with ❤️ by k6mido-ux**

For issues, visit: https://github.com/k6mido-ux/MBA-Token/issues
