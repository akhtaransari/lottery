// SPDX-License-Identifier: MIT

pragma solidity >=0.4.16 <0.9.0;

contract Lottery {
    address public manager;
    address[] public players;

    function createLottery() public {
        manager = msg.sender;
    }

    function enterIntoLottery() public payable basicRequirement {
        players.push(msg.sender);
    }

    function pickWinner() private onlyManager view returns (uint ) {
        return uint(keccak256(abi.encodePacked(block.basefee, block.timestamp, players)));
    }

    function refundAllPlayers() private onlyManager {
        for (uint i = 0; i < players.length; i++) {
        address payable player = payable(players[i]);
            player.transfer(0.01 ether);
        }
        players = new address[](0);
    }

    function createWinner() public onlyManager {
        require(players.length > 0, "No players entered into the lottery");

        uint index = pickWinner();
        address payable winner = payable(players[index]);
        uint contractBalance = address(this).balance;
        winner.transfer(contractBalance);

        players = new address[](0);
    }


    function getAllPlayers() public view returns (address[] memory) {
        return players;
    }

    modifier basicRequirement() {
        require(msg.value > 0.01 ether, "Insufficient ether sent");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only Manager can access this");
        _;
    }
}
