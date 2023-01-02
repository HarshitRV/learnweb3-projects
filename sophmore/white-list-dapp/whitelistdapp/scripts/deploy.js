const { ethers } = require("hardhat");

const main = async () => {
	const whitelistContract = await ethers.getContractFactory("Whitelist");

	// deploying and setting max whitelist address.
	const deployedWhitelistContract = await whitelistContract.deploy(10);

	// wait for it to be deployed.
	await deployedWhitelistContract.deployed();

	// log deployed white list contract.
	console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
};

main()
	.then(() => {
		process.exit(0);
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});