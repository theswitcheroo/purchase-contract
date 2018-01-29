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
    var seller = accounts[1];
    var switcheroo = accounts[0];

    it("should increment PurchaseId", function() {
        var factory;
        var priorPurchaseId;
        var PurchaseId;

        return PurchaseCreator.deployed().then(function(instance) {
            factory = instance;
            return factory.nextPurchaseId.then(function(instance) {
                priorPurchaseId = instance;
            });
            return factory.newSimplePurchaseContract(seller, 5).then(function(ret1, ret2) {
                PurchaseId = ret2;
                assert.equal(PurchaseId, priorPurchaseId + 1, "Did not increment properly")
            });
        });
    });

    it("should create new Simple Purchase", function() {
        var factory;
        var newPurch;

        return PurchaseCreator.deployed().then(function(instance) {
            factory = instance;
            return factory.newSimplePurchaseContract(seller, 5).then(function(ret1, ret2) {
                newPurch = ret1;
                //TODO assert that the new contract was deployed correctly
    })

    it("should have Switcheroo as owner", function() {
        var factory;

        return PurchaseCreator.deployed().then(function(instance) {
            factory = instance;
            return factory.owner.then(function(owner) {
                assert.equal(owner.address, switcheroo, "Switcheroo is not the owner");
            });
        });
    });
});
