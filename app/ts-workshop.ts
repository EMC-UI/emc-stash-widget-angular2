//typescript + ES6

interface iCustomerInfo {
  name: string;
  isPrime?: boolean;
}

class Customer {

  constructor(
    public info: iCustomerInfo) {

  }
  placeOrder(): string {
    return `order placed by ${this.info.name}`;
  }
}

class PremiumCustomer extends Customer {

  constructor(
    public info:iCustomerInfo,
    public privs:Set<string>
  )
  {
    super(info);
  }
  placeOrder(): string {
    return `premium order placed by ${this.info.name}`;
  }

}

var cust = new Customer(<iCustomerInfo>{name:'dehru'});
console.log(cust.placeOrder());
//var premCust = new PremiumCustomer(<iCustomerInfo>{name:'zack'}, new Set('gold', 'watch'));
//console.log(premCust.placeOrder());

//Basic ES6

//  sets
var set = new Set();
set.add('dehru');
set.add('christian');
set.add('jase');
set.add('kathy');
if  (set.has('dehru')) console.log('yes');
set.delete('jase');
if (set.has('jase') === false) console.log('no jase off team');
set.clear();

//  destructuring
var [first, last] = ['John', 'Doe'];
console.log(first, last);

//  rest parameters
//class Car {
//  setDetails(make = 'No Make', ...accessories) {
//    console.log(make);
//    if (accessories) {
//      //forIn()
//    }
//  }
//}
