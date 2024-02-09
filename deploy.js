const {Web3} = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const {interface,bytecode} = require('./compile')

const hdWalletProvider = new hdWallet('Your mnemonic key','infura testnet link');
const web3 = new Web3(hdWalletProvider);

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deployewith account of ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode})
    .send({from : accounts[0],gas : 10000});
    console.log("Contract deployed to ", result.options.address)
    hdWalletProvider.engine.stop();
};

deploy();