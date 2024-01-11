const hre = require("hardhat");
const config = require('../src/config.json');

async function main() {
    // Set up provider
    const provider = hre.ethers.provider;

    // Load contract ABI
    const DappazonArtifact = require('../artifacts/contracts/Dappazon.sol/Dappazon.json');
    const DappazonAbi = DappazonArtifact.abi;

    // Set up contract instance
    const contractAddress = config['31337'].dappazon.address;
    const contract = new hre.ethers.Contract(contractAddress, DappazonAbi, provider);

    // Get the order count for a specific address
    const buyerAddress = '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc';
    const orderCount = await contract.orderCount(buyerAddress);

    // Fetch and log each order
    for (let i = 1; i <= orderCount; i++) {
        const order = await contract.orders(buyerAddress, i);
        console.log(order);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });