const hre = require("hardhat");

async function main() {
  console.log("Deploying MBA Token...");

  const MBAToken = await hre.ethers.getContractFactory("MBAToken");
  const initialSupply = 1000000;
  console.log(`Deploying with initial supply: ${initialSupply} MBA tokens`);

  const mbaToken = await MBAToken.deploy(initialSupply);
  await mbaToken.waitForDeployment();

  const tokenAddress = await mbaToken.getAddress();
  console.log("✅ MBA Token deployed successfully!");
  console.log(`📍 Contract Address: ${tokenAddress}`);

  const totalSupply = await mbaToken.totalSupply();
  const owner = await mbaToken.owner();
  const name = await mbaToken.name();
  const symbol = await mbaToken.symbol();
  const decimals = await mbaToken.decimals();

  console.log("\n📋 Token Details:");
  console.log(`   Name: ${name}`);
  console.log(`   Symbol: ${symbol}`);
  console.log(`   Decimals: ${decimals}`);
  console.log(`   Total Supply: ${hre.ethers.formatEther(totalSupply)} MBA`);
  console.log(`   Owner: ${owner}`);

  console.log("\n💡 Next Steps:");
  console.log("   1. Save the contract address above for future interactions");
  console.log("   2. Verify the contract on Etherscan (if deployed on public network)");
  console.log("   3. Share the contract address with users");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
