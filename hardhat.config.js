require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL = process.env.ALCHEMY_URL;
const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};

// 0x99C9Cd924162fdD5FB1b646d2B09769f52862D9f
