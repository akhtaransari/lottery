# Lottery Contract

This project implements a simple decentralized lottery contract on the Ethereum blockchain. Users can enter the lottery by sending a certain amount of ether, and the manager (creator of the contract) can pick a winner randomly from the list of participants.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to have the following software installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/akhtaransari/lottery-contract.git
```

2. Navigate to the project directory:

```bash
cd lottery-contract
```

3. Install dependencies:

```bash
npm install
```

### Running Tests

To run the automated tests for this system, execute the following command:

```bash
npm run test
```

## Usage

To deploy the lottery contract and interact with it, you can use the provided JavaScript code in the `test` directory. Modify the `Lottery.test.js` file according to your requirements and run the tests to ensure the contract functions as expected.

## Built With

- Solidity - The smart contract language used
- Node.js - JavaScript runtime for running the test scripts
- Web3.js - Ethereum JavaScript API for interaction with the Ethereum blockchain
- Mocha - JavaScript test framework
- Ganache - Local Ethereum blockchain for testing

## Contributing

Contributions are welcome! Please feel free to submit a pull request with any enhancements or fixes.
