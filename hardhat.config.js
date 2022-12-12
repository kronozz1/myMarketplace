require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Z-AMTijoCJgDbgbnTz3NWPhr3CYmEJ2u",
      accounts:[`0x${process.env.Key}`],
    },
  },
};

