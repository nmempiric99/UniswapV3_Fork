const hre = require('hardhat');

async function main() {
    console.log("above------");
    // const [owner] = await hre.ethers.getSigners();
    // console.log("owner------", owner.address);
    
    try {
        const UniswapV3Factory = await hre.ethers.getContractFactory("UniswapV3Factory");
        console.log("below------");
        
        const uniswapv3factory = await UniswapV3Factory.deploy();
        // await uniswapv3factory.deployed();
        await uniswapv3factory.deployed(); 
        
        console.log("Factory deployed to:", uniswapv3factory.address);
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
