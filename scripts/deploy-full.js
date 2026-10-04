const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("\n========================================");
  console.log("🚀 MBA TOKEN DEPLOYMENT STARTED");
  console.log("========================================\n");

  try {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`📍 Deploying from: ${deployer.address}`);

    const network = await hre.ethers.provider.getNetwork();
    console.log(`🌐 Network: ${network.name} (Chain ID: ${network.chainId})`);

    const balance = await hre.ethers.provider.getBalance(deployer.address);
    console.log(`💰 Account Balance: ${hre.ethers.formatEther(balance)} ETH\n`);

    if (parseFloat(hre.ethers.formatEther(balance)) < 0.01) {
      console.log("⚠️  WARNING: Low balance! You may not have enough to deploy.");
    }

    const MBAToken = await hre.ethers.getContractFactory("MBAToken");
    const initialSupply = 1000000; // 1 million tokens

    console.log(`📝 Deploying MBA Token with initial supply: ${initialSupply}...\n`);
    const mbaToken = await MBAToken.deploy(initialSupply);
    const deploymentTx = await mbaToken.deploymentTransaction();
    
    console.log(`⏳ Deployment transaction: ${deploymentTx.hash}`);
    console.log("⏳ Waiting for confirmation...\n");
    
    await mbaToken.waitForDeployment();

    const contractAddress = await mbaToken.getAddress();
    console.log("\n✅ MBA Token deployed successfully!");
    console.log(`📄 Contract Address: ${contractAddress}`);

    const totalSupply = await mbaToken.totalSupply();
    const owner = await mbaToken.owner();
    const name = await mbaToken.name();
    const symbol = await mbaToken.symbol();
    const decimals = await mbaToken.decimals();

    console.log("\n========================================");
    console.log("📋 TOKEN DETAILS");
    console.log("========================================");
    console.log(`   Name: ${name}`);
    console.log(`   Symbol: ${symbol}`);
    console.log(`   Decimals: ${decimals}`);
    console.log(`   Total Supply: ${hre.ethers.formatEther(totalSupply)} MBA`);
    console.log(`   Owner: ${owner}`);
    console.log("========================================\n");

    // Save deployment info
    const deploymentInfo = {
      network: network.name,
      chainId: network.chainId,
      contractAddress: contractAddress,
      deployer: deployer.address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      totalSupply: hre.ethers.formatEther(totalSupply),
      owner: owner,
      deploymentDate: new Date().toISOString(),
      transactionHash: deploymentTx.hash
    };

    const deploymentDir = path.join(__dirname, "../deployments");
    if (!fs.existsSync(deploymentDir)) {
      fs.mkdirSync(deploymentDir, { recursive: true });
    }

    const filename = path.join(deploymentDir, `${network.name}-deployment-${Date.now()}.json`);
    fs.writeFileSync(filename, JSON.stringify(deploymentInfo, null, 2));
    console.log(`💾 Deployment info saved to: ${filename}\n`);

    // Save ABI
    try {
      const artifactsDir = path.join(__dirname, "../artifacts");
      let artifactsPath = path.join(artifactsDir, "contracts/MBA.sol/MBAToken.json");
      
      if (!fs.existsSync(artifactsPath)) {
        artifactsPath = path.join(artifactsDir, "MBA.sol/MBAToken.json");
      }
      
      if (fs.existsSync(artifactsPath)) {
        const artifact = JSON.parse(fs.readFileSync(artifactsPath, "utf8"));
        const abiPath = path.join(deploymentDir, "MBAToken-ABI.json");
        fs.writeFileSync(abiPath, JSON.stringify(artifact.abi, null, 2));
        console.log(`📦 ABI saved to: ${abiPath}\n`);
      } else {
        console.log("⚠️  ABI file not found. Run 'hardhat compile' first.\n");
      }
    } catch (err) {
      console.log("⚠️  Could not save ABI:", err.message, "\n");
    }

    console.log("========================================");
    console.log("🔗 NEXT STEPS");
    console.log("========================================\n");
    console.log("1. Verify the contract on Etherscan:");
    const etherscanUrl = network.name === 'hardhat' 
      ? 'http://localhost:8545'
      : `https://${network.name !== 'mainnet' ? network.name + '.' : ''}etherscan.io/address/${contractAddress}`;
    console.log(`   ${etherscanUrl}\n`);
    console.log("2. To verify on Etherscan, run:");
    console.log(`   npx hardhat verify --network ${network.name} ${contractAddress} 1000000\n`);
    console.log("3. Update the dashboard with:");
    console.log(`   CONTRACT_ADDRESS = '${contractAddress}'\n`);
    console.log("4. Use the ABI from: deployments/MBAToken-ABI.json\n");
    console.log("========================================\n");

  } catch (error) {
    console.error("\n❌ Deployment failed:", error.message);
    console.error(error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
