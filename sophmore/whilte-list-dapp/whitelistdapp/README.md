# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

To run the application make sure you have .env file setup with the following variables:
```shell
QUICKNODE_HTTP_URL= # Quicknode HTTP URL
PRIVATE_KEY= # Private key of the account you want to use to deploy the contract
```
Run the following command to start the application:
```shell
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
```