require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/*const dotenv=require("dotenv");
dotenv.config();*/

task("accounts","prints the list of accounts",async(taskargs,hre)=>{
  const accounts =await hre.ethers.getSigners();

  for(const acocunt of accounts)
  {
    console.log(account.address);
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:
    {
      url:"https://goerli.infura.io/v3/c44ea13f341d48219a4856f35c2f0621",
      accounts: [`e7a77b3f2a687fd4fc0cf4883e9dbbfa27f9c14907650aa409088987e8f04c66`]
    },
  },
  etherscan:
  {
    apiKey:process.env.REACT_APP_ETHERSCAN_KEY
  }
};
