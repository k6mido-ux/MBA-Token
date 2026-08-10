# 🌐 NBA Token Web Dashboard

Interactive web interface for interacting with the MBA Token smart contract.

## Features

✅ **Real-time Balance Display**
✅ **Send Tokens**
✅ **Connect MetaMask**
✅ **View Network Status**
✅ **Responsive Design**

## Setup

1. **Update Contract Details**
   - Open `dashboard.html`
   - Replace `CONTRACT_ADDRESS` with your deployed contract address
   - Replace `CONTRACT_ABI` with the actual ABI from `deployments/MBAToken-ABI.json`

2. **Open in Browser**
   - Simply open `dashboard.html` in your web browser
   - Install MetaMask if not already installed
   - Connect your wallet

## ABI Configuration

You need to add the contract ABI to the JavaScript section:

```javascript
const CONTRACT_ABI = [
  // Paste your ABI here from deployments/MBAToken-ABI.json
];
```

## Networks Supported

- Sepolia Testnet
- Ethereum Mainnet
- Polygon Mainnet

## Usage

1. Click "Connect Wallet" if not already connected
2. Switch to the correct network in MetaMask
3. Enter recipient address and amount
4. Click "Transfer"
5. Approve the transaction in MetaMask
6. Wait for confirmation

## Security Notes

- ⚠️ Never share your private keys
- Always verify contract addresses
- Start with small test amounts
- Use testnet for testing
