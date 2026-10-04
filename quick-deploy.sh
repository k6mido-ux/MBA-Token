#!/bin/bash
# Quick deployment script for experienced developers

set -e

echo "🚀 MBA Token Quick Deploy"
echo ""

npm install && npm run compile && npm test && npm run deploy:testnet

echo ""
echo "✅ Done! Save your contract address and verify on Etherscan."
