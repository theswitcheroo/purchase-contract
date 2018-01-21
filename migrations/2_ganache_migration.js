var PurchaseCreator = artifacts.require("./PurchaseCreator.sol");
var SimplePurchase = artifacts.require("./SimplePurchase.sol");

module.exports = function(deployer) {
    deployer.deploy(PurchaseCreator, {from: 0x627306090abaB3A6e1400e9345bC60c78a8BEf57});
    deployer.deploy(SimplePurchase);
}
