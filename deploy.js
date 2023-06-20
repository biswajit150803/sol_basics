// const ethers = require("ethers");
// const fs = require("fs");

// async function main() {
//   //   const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
//   const provider=new ethers.JsonRpcProvider("http://127.0.0.1:7545");
//   const wallet = new ethers.Wallet(
//     "0xeae33450aed0739882e9047ba402bb53094983be11db0213973c1c49385a33f0",
//     provider
//   );

//   const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
//   const binary = fs.readFileSync(
//     "./SimpleStorage_sol_SimpleStorage.bin",
//     "utf8"
//   );
//   const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

//   console.log("Deploying...please wait");
//   const contract = await contractFactory.deploy();
//   console.log(contract);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0x6f005bc07a0bbc3c614a7f868f8ce0e72dd7fd2b849be9a74b21d9894c5c65c2",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait");
  const contract = await contractFactory.deploy();
  console.log(contract);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
