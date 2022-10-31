function solution(address) {
    return address.split('@').pop();
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test findEmailDomain2

// alternative solution
