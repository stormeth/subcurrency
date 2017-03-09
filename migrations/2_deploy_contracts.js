var SubCurrency = artifacts.require("./SubCurrency.sol");

module.exports = function(deployer) {
  deployer.deploy(SubCurrency);
};
