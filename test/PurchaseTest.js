/*Test list

IDEAL PATH
- Create new SimplePurchase ("SP") contract via factory
- Endow it with correct txnValue, seller, and PurchaseId
- Check that Switcheroo is admin of new SP contract
- Have buyer accept transaction, check that buyer deposited value
- Admin confirms that item has been shipped
- Admin confirms that item has been delivered
- Seller withdraws funds

SELLER ABORT (Canceled before buyer locks money) PATH
- Create new SimplePurchase ("SP") contract via factory
- Endow it with correct txnValue, seller, and PurchaseId
- Check that Switcheroo is admin of new SP contract
- Seller cancels purchase and retrieves money
- Check that buyer can't interact with contract

SELLER FAILS TO MAIL PATH
- Create new SimplePurchase ("SP") contract via factory
- Endow it with correct txnValue, seller, and PurchaseId
- Check that Switcheroo is admin of new SP contract
- Have buyer accept transaction, check that buyer deposited value
- Admin posts that item has not been shipped w/in 72 hours of buyer deposit
- Allow buyer to withdraw contract funds
- Seller cannot withdraw any funds
*/

var PurchaseCreator = artifacts.require("PurchaseCreator");
var SimplePurchase = artifacts.require("SimplePurchase");

//IDEAL PATH
contract('PurchaseCreator', function())
