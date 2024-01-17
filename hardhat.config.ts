import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import dotenv from 'dotenv';
dotenv.config();


export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/1RegSfonVLXiWsj6j20_EkKiylU5GEP5`,
    },
    optimismsepolia:{
      url:`https://sepolia.optimism.io`
    },
    vault:{
      url:`https://rpc.vault.tech/`
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      'vault': 'eded7506-000c-48d4-8455-bc575c66ec84',
    },
    customChains: [
      {
        network: 'vault',
        chainId: 79000,
        urls: {
          apiURL: 'https://blockscout.com/eth/mainnet/api/eth-rpc',
          browserURL: 'https://rpc.vault.tech/',
        },
      },
    ]
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
