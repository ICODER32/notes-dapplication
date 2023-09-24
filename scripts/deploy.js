const { ethers } = require("hardhat");
async function main() {
  const [owner] = await ethers.getSigners();
  const Notes = await ethers.getContractFactory("Notes");
  const notes = await Notes.deploy();
  await notes.deployed();
  console.log("Notes deployed to:", notes.address);
}

main();
