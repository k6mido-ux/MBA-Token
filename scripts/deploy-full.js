const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("\n========================================");
  console.log("🚀 MBA TOKEN DEPLOYMENT STARTED");
  console.log("========================================\n");

  const [deployer] = await hre.ethers.getSigners();
  console.log(`📍 Deploying from: ${deployer.address}`);

  // Get network info
  const network = await hre.ethers.provider.getNetwork();
  console.log(`🌐 Network: ${network.name} (Chain ID: ${network.chainId})`);

  // Get balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log(`💰 Account Balance: ${hre.ethers.formatEther(balance)} ETH\n`);

  // Deploy contract
  const MBAToken = await hre.ethers.getContractFactory("MBAToken");
  const initialSupply = 1000000; // 1 million tokens

  console.log(`📝 Deploying MBA Token with initial supply: ${initialSupply}...\n`);
  const mbaToken = await MBAToken.deploy(initialSupply);
  await mbaToken.waitForDeployment();

  const contractAddress = await mbaToken.getAddress();
  console.log("\n✅ MBA Token deployed successfully!");
  console.log(`📄 Contract Address: ${contractAddress}`);

  // Get contract details
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

  // Save deployment info to file
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
    transactionHash: mbaToken.deploymentTransaction()?.hash || "N/A"
  };

  const deploymentDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(deploymentDir)) {
    fs.mkdirSync(deploymentDir);
  }

  const filename = path.join(deploymentDir, `${network.name}-deployment.json`);
  fs.writeFileSync(filename, JSON.stringify(deploymentInfo, null, 2));
  console.log(`💾 Deployment info saved to: ${filename}\n`);

  // Get contract ABI and save it
  const artifactsPath = path.join(__dirname, "../artifacts/contracts/MBA.sol/MBAToken.json");
  if (fs.existsSync(artifactsPath)) {
    const artifact = JSON.parse(fs.readFileSync(artifactsPath, "utf8"));
    const abiPath = path.join(deploymentDir, "MBAToken-ABI.json");
    fs.writeFileSync(abiPath, JSON.stringify(artifact.abi, null, 2));
    console.log(`📦 ABI saved to: ${abiPath}\n`);
  }

  console.log("========================================");
  console.log("🔗 NEXT STEPS");
  console.log("========================================");
  console.log("\n1. Verify the contract on Etherscan:");
  console.log(`   https://${network.name !== 'hardhat' ? network.name + '.' : ''}etherscan.io/address/${contractAddress}\n`);
  console.log("2. Use the ABI from deployments/MBAToken-ABI.json\n");
  console.log("3. Interact with the contract using the deployment address\n");
  console.log("========================================\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
