/*Test list

IDEAL PATH
- Create new SimplePurchase ("SP") contract via factory
- Add correct txnValue, seller, and PurchaseId to PurchaseData struct
- Check that Switcheroo is owner of factory contract (how??)
- Test pausing the contract
- Use PurchaseId to call PurchaseData struct & pull info

*/

var PurchaseCreator = artifacts.require("PurchaseCreator");
var SimplePurchase = artifacts.require("SimplePurchase");


contract('PurchaseCreator', function(owner) {
    it("should increment PurchaseId", function() {
        var factory;

        return PurchaseCreator.deployed().then(function(instance) {
            factory = instance;
            return factory.newSimplePurchaseContract.
        });
    });
});
