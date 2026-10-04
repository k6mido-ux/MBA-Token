const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

// Helper function to read deployment info
function getDeploymentInfo() {
  const deploymentDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(deploymentDir)) {
    throw new Error("Deployments directory not found. Please deploy the contract first.");
  }

  const files = fs.readdirSync(deploymentDir)
    .filter(f => f.endsWith("-deployment.json"))
    .sort();
  
  if (files.length === 0) {
    throw new Error("No deployment found. Please deploy the contract first.");
  }
  
  const latestFile = files[files.length - 1];
  const deploymentPath = path.join(deploymentDir, latestFile);
  return JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
}

// Helper function to get contract instance
async function getContractInstance() {
  const deployment = getDeploymentInfo();
  const contractAddress = deployment.contractAddress;
  
  const abiPath = path.join(__dirname, "../deployments/MBAToken-ABI.json");
  if (!fs.existsSync(abiPath)) {
    throw new Error("ABI not found. Please deploy the contract with deploy-full.js first.");
  }
  
  const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));
  const [signer] = await hre.ethers.getSigners();
  return new hre.ethers.Contract(contractAddress, abi, signer);
}

// Get balance
async function getBalance(address) {
  const contract = await getContractInstance();
  const balance = await contract.balanceOf(address);
  return hre.ethers.formatEther(balance);
}

// Transfer tokens
async function transfer(to, amount) {
  const contract = await getContractInstance();
  const tx = await contract.transfer(to, hre.ethers.parseEther(amount.toString()));
  console.log(`✅ Transfer of ${amount} MBA to ${to}`);
  console.log(`📝 Transaction hash: ${tx.hash}`);
  await tx.wait();
  console.log(`✔️ Transaction confirmed!`);
}

// Mint tokens
async function mint(to, amount) {
  const contract = await getContractInstance();
  const tx = await contract.mint(to, hre.ethers.parseEther(amount.toString()));
  console.log(`✅ Minted ${amount} MBA to ${to}`);
  console.log(`📝 Transaction hash: ${tx.hash}`);
  await tx.wait();
  console.log(`✔️ Transaction confirmed!`);
}

// Burn tokens
async function burn(from, amount) {
  const contract = await getContractInstance();
  const tx = await contract.burn(from, hre.ethers.parseEther(amount.toString()));
  console.log(`✅ Burned ${amount} MBA from ${from}`);
  console.log(`📝 Transaction hash: ${tx.hash}`);
  await tx.wait();
  console.log(`✔️ Transaction confirmed!`);
}

// Get total supply
async function getTotalSupply() {
  const contract = await getContractInstance();
  const supply = await contract.totalSupply();
  return hre.ethers.formatEther(supply);
}

module.exports = {
  getDeploymentInfo,
  getContractInstance,
  getBalance,
  transfer,
  mint,
  burn,
  getTotalSupply
};
