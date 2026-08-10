# MBA Token Contract Addresses

## Deployment Status

### Sepolia Testnet (Chain ID: 11155111)
- **Status**: Ready for deployment
- **Contract Address**: Pending
- **Deployer**: Your address
- **Explorer**: https://sepolia.etherscan.io

### Ethereum Mainnet (Chain ID: 1)
- **Status**: Pending
- **Contract Address**: Pending
- **Deployer**: Your address
- **Explorer**: https://etherscan.io

### Polygon Mainnet (Chain ID: 137)
- **Status**: Pending
- **Contract Address**: Pending
- **Deployer**: Your address
- **Explorer**: https://polygonscan.com

## Usage Instructions

After deployment, you can interact with the contract using:

1. **Etherscan**: Paste the contract address into the explorer
2. **Web3.js/Ethers.js**: Use the ABI from `deployments/MBAToken-ABI.json`
3. **Custom Scripts**: Use the interaction scripts in `scripts/`

## Verification

To verify the contract on Etherscan after deployment:

```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> 1000000
```

Replace `<CONTRACT_ADDRESS>` with your deployed contract address.
