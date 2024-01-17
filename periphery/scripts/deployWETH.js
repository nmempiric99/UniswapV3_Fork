const hre = require('hardhat');

async function main() {
    console.log("above------");
    try {
        const WETH = await hre.ethers.getContractFactory("WETH");
        console.log("below------");
        
        const Weth = await WETH.deploy();
        await Weth.deployed(); 
        
        console.log("Factory deployed to:", Weth.address);
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
