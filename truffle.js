// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "awesome valid mention fine episode ill together place enroll mobile entry census protect floor unique";

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 8545,
      network_id: '*' // Match any network id
  },
  ropsten: {
  	provider: function() {
  		return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/d460ac4e71f24d869c8b75119ebe4213")
  	},
  	network_id: 3,
  	gas: 4700000
  }
}
}
