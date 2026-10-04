# 📚 Complete Setup & Deployment Guide - MBA Token

## ⚡ Super Quick Start (Choose One Path)

### Path A: Complete Beginner (30 minutes)
Follow the beginner guide below step by step.

### Path B: Experienced Developer (5 minutes)
Jump to "Quick Commands" section.

---

## 🔧 Part 1: Create Infura RPC URL (5 minutes)

### Step 1: Create Infura Account
1. Go to https://infura.io/
2. Click "Sign Up"
3. Enter email and password
4. Verify your email
5. Log in

### Step 2: Create New Project
1. Click "Create New Project"
2. Name it: "MBA Token"
3. Select "Ethereum"
4. Click "Create"

### Step 3: Get Sepolia RPC URL
1. On the dashboard, find your project
2. Click on it
3. Select "Sepolia" from network dropdown
4. Copy the HTTPS URL
5. It looks like: `https://sepolia.infura.io/v3/YOUR_KEY_HERE`

**Save this for .env file**

---

## 🔐 Part 2: Get Your Private Key (3 minutes)

### Step 1: Open MetaMask
1. Click MetaMask icon in browser
2. Click the three horizontal lines (menu)

### Step 2: Go to Settings
1. Click "Settings"
2. Click "Security & Privacy"
3. Scroll to "Show Private Key"
4. Click "Reveal Private Key"
5. Enter your MetaMask password
6. Copy the private key (starts with 0x...)

**IMPORTANT:**
- ⚠️ NEVER share this key
- ⚠️ NEVER upload to GitHub
- ⚠️ NEVER paste on public sites
- Keep it SAFE in your .env file only

---

## 🔑 Part 3: Get Etherscan API Key (2 minutes)

### Step 1: Create Etherscan Account
1. Go to https://etherscan.io/
2. Click "Sign Up"
3. Fill in details
4. Verify email

### Step 2: Get API Key
1. Log in to Etherscan
2. Go to https://etherscan.io/apis
3. In "API Keys" section, click "Add"
4. Name it: "MBA Token"
5. Copy the API Key

**Save this for .env file**

---

## 💧 Part 4: Get Sepolia ETH (5 minutes)

You need test ETH to pay for deployment gas.

### Get from Faucet:
1. Go to https://sepoliafaucet.com/
2. Enter your MetaMask address (0x...)
3. Complete the verification
4. Click "Send Me ETH"
5. Wait 1-2 minutes for confirmation
6. Check MetaMask - you should see 0.5 Sepolia ETH

---

## 📝 Part 5: Create .env File (2 minutes)

### Step 1: Navigate to Project
```bash
cd MBA-Token
```

### Step 2: Copy Example
```bash
cp .env.example .env
```

### Step 3: Edit .env File
```bash
# Using nano (easy)
nano .env

# Or using your text editor, open file: MBA-Token/.env
```

### Step 4: Paste Your Values
Replace these lines with YOUR actual values:

```env
# 1. Get from Infura (from Part 1, Step 3)
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY_HERE

# 2. Use same for now
MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY_HERE

# 3. These stay the same
POLYGON_RPC_URL=https://polygon-rpc.com
BSC_RPC_URL=https://bsc-dataseed.binance.org/

# 4. Get from MetaMask (from Part 2, Step 2)
PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE

# 5. Get from Etherscan (from Part 3, Step 2)
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_KEY_HERE
```

**Example (DO NOT USE - this is fake):**
```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/abc123def456ghi789jkl000mnopqrst
MAINNET_RPC_URL=https://mainnet.infura.io/v3/abc123def456ghi789jkl000mnopqrst
POLYGON_RPC_URL=https://polygon-rpc.com
BSC_RPC_URL=https://bsc-dataseed.binance.org/

PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
ETHERSCAN_API_KEY=ABC123DEF456GHI789JKL000MNOPQRSTU
```

### Step 5: Save File
```bash
# If using nano, press:
# Ctrl + O (to write)
# Enter (to confirm)
# Ctrl + X (to exit)
```

---

## ⚙️ Part 6: Install & Setup (3 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

This downloads all required packages. Wait for it to complete.

### Step 2: Compile Smart Contract
```bash
npm run compile
```

Expected output:
```
Compiled 1 Solidity file successfully
```

### Step 3: Run Tests
```bash
npm test
```

Expected output:
```
✓ All tests passed
```

---

## 🚀 Part 7: Deploy to Sepolia (3 minutes)

### Step 1: Deploy
```bash
npm run deploy:testnet
```

You'll see output like:
```
========================================
🚀 MBA TOKEN DEPLOYMENT STARTED
========================================

📍 Deploying from: 0x1234567890abcdef...
🌐 Network: sepolia (Chain ID: 11155111)
💰 Account Balance: 0.5 ETH

📝 Deploying MBA Token with initial supply: 1000000...

✅ MBA Token deployed successfully!
📄 Contract Address: 0xabcdef1234567890abcdef1234567890abcdef12

========================================
📋 TOKEN DETAILS
========================================
   Name: MBA Token
   Symbol: MBA
   Decimals: 18
   Total Supply: 1000000.0 MBA
   Owner: 0x1234567890abcdef...
========================================
```

**IMPORTANT: SAVE THE CONTRACT ADDRESS**
```
0xabcdef1234567890abcdef1234567890abcdef12
```

You'll need this for the dashboard and everywhere!

---

## ✅ Part 8: Verify on Etherscan (2 minutes)

This makes your contract code visible to everyone on Etherscan.

### Step 1: Verify Contract
```bash
# Replace 0xabcdef... with YOUR contract address
npx hardhat verify --network sepolia 0xabcdef1234567890abcdef1234567890abcdef12 1000000
```

### Step 2: Success Message
You'll see:
```
✓ Contract verified successfully on etherscan
```

### Step 3: View on Etherscan
Go to:
```
https://sepolia.etherscan.io/address/0xabcdef1234567890abcdef1234567890abcdef12
```

---

## 📊 Part 9: Update Dashboard (5 minutes)

### Step 1: Get ABI
The ABI file is at:
```
deployments/MBAToken-ABI.json
```

Open it and copy ALL the contents (it's a JSON array).

### Step 2: Edit Dashboard
Open file:
```
web/dashboard.html
```

Find this section (around line 285):
```javascript
const CONTRACT_ADDRESS = "0x...";
const CONTRACT_ABI = [];
```

Replace with:
```javascript
const CONTRACT_ADDRESS = "0xabcdef1234567890abcdef1234567890abcdef12";
const CONTRACT_ABI = [
  // Paste the entire contents of MBAToken-ABI.json here
  // It should look like: [ { "inputs": ..., "name": "transfer", ... }, ... ]
];
```

### Step 3: Save Dashboard File
Save the file.

---

## 🌐 Part 10: Test Dashboard Locally (2 minutes)

### Step 1: Start Local Server
```bash
cd web
python3 -m http.server 8000
```

Or if Python not available:
```bash
npx http-server
```

### Step 2: Open in Browser
Go to:
```
http://localhost:8000/dashboard.html
```

### Step 3: Connect MetaMask
1. Make sure MetaMask is set to **Sepolia**
2. Click "Connect Wallet" on the dashboard
3. You should see your address and balance

### Step 4: Test Transfer
1. Enter recipient address (another wallet)
2. Enter amount (e.g., 100)
3. Click "Transfer"
4. Approve in MetaMask
5. Wait for confirmation

**Success!** 🎉

---

## 📋 Quick Commands (Copy & Paste)

```bash
# Setup
cd MBA-Token
cp .env.example .env
# Edit .env with your keys
npm install

# Compile
npm run compile

# Test
npm test

# Deploy to Sepolia
npm run deploy:testnet

# Verify on Etherscan
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS 1000000

# Interact with contract
npm run interact

# Clean artifacts
npm run clean
```

---

## 🚨 Troubleshooting

### \"Cannot find module 'hardhat'\"
```bash
npm install
```

### \"Invalid private key\"
- Check .env file
- Make sure private key is from MetaMask
- Should start with 0x
- No spaces before/after

### \"Insufficient funds for gas\"
- Get more Sepolia ETH from faucet
- https://sepoliafaucet.com/

### \"Network error\"
- Check SEPOLIA_RPC_URL in .env
- Verify Infura API key
- Check internet connection

### Dashboard shows \"Contract not loaded\"
- Make sure CONTRACT_ADDRESS is correct
- Make sure CONTRACT_ABI is properly pasted
- Check network is Sepolia
- Check MetaMask is connected

### Transaction failed
- Check balance
- Check recipient address is valid (starts with 0x)
- Check amount is correct
- Try smaller amount first

---

## 🎯 What You Have Now

✅ Smart contract deployed on Sepolia
✅ Contract verified on Etherscan
✅ Web dashboard to transfer tokens
✅ All functions tested and working
✅ 1,000,000 MBA tokens created
✅ Full ownership control

---

## 🔗 Useful Links

- Your Contract: https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS
- MetaMask: https://metamask.io/
- Sepolia Faucet: https://sepoliafaucet.com/
- Infura: https://infura.io/
- Etherscan: https://etherscan.io/
- Solidity Docs: https://docs.soliditylang.org/
- OpenZeppelin: https://docs.openzeppelin.com/

---

## 📞 Support

Having issues? Check:
1. Make sure .env values are correct
2. Make sure MetaMask is on Sepolia
3. Make sure you have Sepolia ETH
4. Read error messages carefully
5. Check Etherscan for transaction details

---

**Made with ❤️ by k6mido-ux**

For issues: https://github.com/k6mido-ux/MBA-Token/issues

