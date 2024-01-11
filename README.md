# Dappazon

Dappazon is a decentralized application (DApp) that simulates an online marketplace on the Ethereum blockchain. Users can list items for sale and purchase them using Ether.

## Sequence Diagram Explanation

The sequence diagram illustrates the flow of interactions between the ShopOwner, Buyer, and the Dappazon contract within the Dappazon DApp. Here's a brief overview:

![Diagram](https://planttext.com/api/plantuml/png/bLDDQyCm3BtdL-YOGTeV4DWewow3GW_RROoYscvYMil1LbQoNp_P_M8iPUHWBEJtfFSiUn4P0_VkKA1Y7-2jzTtwI2OKdUIjiXqImmjs7NvxEeEU-q40HN45m-pfYgb1UOeS-WGj7nB5VY6RMv5B03EXNMlKu7EfHt2ncKT3MdfeyvT-h-t1HYutLbUm8NH6DYMyneT1GkkmoIaVMRQ0RAcH8B9N-oaYNzauKC48M0EIBAqbOWzMJk9Tdd6MOPKbNjITf9mLZ3hD5_tRvROVaib_9MTg3SlMg3tO7HZoVTE2uLOg9jr9BbY2t7-KkmuoWd6lFXt5KLOsAd5v6sDrmYzzJ_nnItzMMSGykPaowAFbLWSyJdfSxm4fxgJK5Wz8ocGN-Q6Fjbw8GlaLFm00)

1. The ShopOwner deploys the Dappazon contract.
2. The ShopOwner lists an item for sale on the Dappazon contract, specifying details such as the item ID, name, category, image, cost, rating, and stock.
3. The Buyer purchases an item by calling the `buy` function with the item ID. The contract checks if the buyer has enough Ether and if the item is in stock. If the checks pass, an order is created and added to the orders mapping.
4. The ShopOwner can withdraw the contract balance by calling the `withdraw` function.

To view the sequence diagram, please refer to the following embedded image:

Please note that the actual sequence diagram image file should be generated from the provided PlantUML code and placed at the specified path for the iframe to work correctly.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start frontend
`$ npm run start`

### 7. Check orders
To check the orders made by a buyer, run the `getOrders.js` script:
`$ npx hardhat run ./scripts/getOrders.js --network localhost`

