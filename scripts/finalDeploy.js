const hre = require("hardhat");

async function main() {
  const giveThought = await hre.ethers.getContractFactory("giveThought");
  const contract = await giveThought.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});