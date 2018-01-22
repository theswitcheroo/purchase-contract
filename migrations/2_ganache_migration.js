var PurchaseCreator = artifacts.require("./PurchaseCreator.sol");
var SimplePurchase = artifacts.require("./SimplePurchase.sol");

module.exports = function(deployer) {
    deployer.deploy(PurchaseCreator);
    //deployer.deploy(SimplePurchase);
}
