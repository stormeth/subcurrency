var TestUtils = require('./testutils')
var SubCurrency = artifacts.require("./SubCurrency.sol");

contract('Sc1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];

        var ac1_end;
        var ac2_end;
        var ac3_end;

        var amount = 10;
        var amount1 = 100;
        var amount2 = 200;
        var amount3 = 300;

        return SubCurrency.deployed().then(function(instance) {
            meta = instance;

        // Do all the minting up front so I can mess with the
        // ability for others besides the minter to mint coins

            return meta.mint(ac1, amount3);
        }).then(function() {

            return meta.mint(ac2, amount2);
        }).then(function() {

            return meta.mint(ac3, amount1);
        }).then(function() {


            return meta.sendCoin(ac2, amount);
        }).then(function() {

            return meta.sendCoin(ac2, amount).then(function(tx) {
                // console.log(tx);
            })
        }).then(function() {

            return meta.sendCoin(ac3, amount);
        }).then(function() {

            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);

            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);

            return meta.getBalance.call(ac3);
        }).then(function(balance) {
            ac3_end = balance.toNumber();
            console.log('3e', ac3_end);
        });
    });
});
