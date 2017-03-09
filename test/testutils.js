var SubCurrency = artifacts.require("./SubCurrency.sol");

var TestUtils = {

    printObj: function(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(key + " -> " + obj[key]);
            }
        }
    }
/*
    check: function(meta) {
        return meta.getNumberOfCampaigns.call().then(function(p) {
        var numofcampaigns = p.c[0]
        console.log(typeof(p));
        TestUtils.printObj(p);
        console.log(typeof(numofcampaigns));
        console.log('number of campaigns = ', numofcampaigns);
    })
    }

    showBalance: function(s) {
        return MyAdvancedToken.deployed().then(function(instance) {
            return instance.getBalance.call(s.address);
        }).then(function(balance) {
            console.log(s.whoami, " ", balance)
        });
    },

    showBalances: function(people) {
        people.forEach(function(s) {
            TestUtils.showBalance(s)
        })
    }
*/
}

module.exports = TestUtils
