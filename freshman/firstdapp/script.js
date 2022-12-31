"use strict";
console.log("script loaded...");

// Detect if MetaMask is installed
if (typeof window.ethereum !== "undefined") {
	console.log("MetaMask is installed!");
} else {
	console.log("MetaMask is not installed!");
}

// Connect to MetaMask
const provider = new ethers.providers.Web3Provider(
	web3.currentProvider,
	"goerli"
);

// Button elements
const getMoodBtn = document.getElementById("getMood");
const setMoodBtn = document.getElementById("setMood");

// Input elements
const moodInput = document.getElementById("mood");

// Output elements
const currentMood = document.getElementById("currentMood");

// Contract address and ABI
const MoodContractAddress = "0xfe3CF6C3d907e18C99A7a71Cb22e1Aa0F74BDFAC";
const MoodContractABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_mood",
				type: "string",
			},
		],
		name: "setMood",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getMood",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

let MoodContract;
let signer;

/**
 * Request access to the user's wallet and connect
 * the signer to your metamask account (we use [0]
 * as the default), and define the contract object
 * using your contract address, ABI, and signer
 */
provider.send("eth_requestAccounts", []).then(() => {
	provider.listAccounts().then((accounts) => {
		signer = provider.getSigner(accounts[0]);
		MoodContract = new ethers.Contract(
			MoodContractAddress,
			MoodContractABI,
			signer
		);
	});
});

/**
 * asynchronous functions to call your smart contract
 * functions
 */
async function getMood() {
	const getMoodPromise = MoodContract.getMood();
	const Mood = await getMoodPromise;
	currentMood.innerHTML = ` <div id="currentMood" class="alert alert-primary my-1" role="alert">
        ${Mood}
    </div>`;
	console.log(Mood);
}

async function setMood(_mood) {
	const setMoodPromise = MoodContract.setMood(_mood);
	const something = await setMoodPromise;
    console.log(something);
}

getMoodBtn.addEventListener("click", () => {
	getMood();
});

setMoodBtn.addEventListener("click", () => {
	if (moodInput.value.trim() === "") {
		alert("Please enter a mood!");
		return;
	}
	setMood(moodInput.value);
});
