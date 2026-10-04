const { getDeploymentInfo, getBalance, transfer, mint, burn, getTotalSupply, getContractInstance } = require("./interactions");

async function main() {
  console.log("\n🎯 MBA Token Interaction Script\n");

  try {
    const deployment = getDeploymentInfo();
    console.log("📋 Deployment Info:");
    console.log(`   Address: ${deployment.contractAddress}`);
    console.log(`   Network: ${deployment.network}`);
    console.log(`   Owner: ${deployment.owner}\n`);

    const totalSupply = await getTotalSupply();
    console.log(`📊 Total Supply: ${totalSupply} MBA\n`);

    const ownerBalance = await getBalance(deployment.owner);
    console.log(`💰 Owner Balance: ${ownerBalance} MBA\n`);

    const contract = await getContractInstance();
    console.log("✅ Contract instance loaded successfully!");
    console.log("\n📚 Available functions:");
    console.log("   - transfer(to, amount)");
    console.log("   - mint(to, amount)");
    console.log("   - burn(from, amount)");
    console.log("   - getBalance(address)");
    console.log("   - getTotalSupply()\n");
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.log("\n📍 Make sure to deploy the contract first!");
  }
}

main().catch(console.error);
