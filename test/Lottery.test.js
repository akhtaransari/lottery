const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');

const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

let accounts;
let lottery;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(abi)
    .deploy({data: evm.bytecode.object})
    .send({ from: accounts[0], gas: '1000000' });
});

  describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });

  it('allows players to enter into the lottery', async () => {
    await lottery.methods.enterIntoLottery().send({ from: accounts[1], value: web3.utils.toWei('0.02', 'ether') }); 
    const players = await lottery.methods.getAllPlayers().call(); 
    assert.equal(players.length, 1); 
    assert.equal(players[0], accounts[1]);
  });
});
