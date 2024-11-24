const accountId = 14529 /* value can't be changed */
let accountEmail = "abc@gmail.com" /*changeable value */ 
var accountPassword = "12578"
/* prefer not to use var 
 because of issue in block scop and functional scope */
accountcity = "delhi" /*by default values are of var , prefer not */

let accountSate 
/* it will give output as undefined */

accountEmail = "xyz@gmail.com"
accountPassword = "5896"
accountcity = "west bangal"
console.log(accountEmail) /* prints one value at a time */
console.table([accountId, accountEmail,accountPassword , accountcity,accountSate]) /* for printing all the values at one time in table form */
