const path = require('path'),
      fs = require('fs'),
      solc = require('solc');

const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(lotteryPath,'utf8');


const input = {
    language: 'Solidity',
    sources: {
      'Lottery.sol': {
        content: source, // Provide the Solidity source code
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'], // Select all output items
        },
      },
    },
  };


const output =  JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = output.contracts['Lottery.sol'].Lottery;

console.log("Succesfull");