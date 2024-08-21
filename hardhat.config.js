require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["b2a6090f2f8a7ea8f8bf07558424ca5265009d8eb733e6d0b007d056a06c499d"], //Your private key starting with "0x"
    },
  },
};
