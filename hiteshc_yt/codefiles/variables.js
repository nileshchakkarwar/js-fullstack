"use strict";

// Various ways to declare variables in JS
let var1 = 12345;
const var2 = "I am Constant, could be string or number";
var var3 =
  "var is depricated in ES6, yet we see it in production due to old code.";
// after using use strict this line will no longer be valid in ES6 JS
var4 = "This way it goes to global scope. NO NO!";
let var5;

// printing all vars in 1 go
console.table([var1, var2, var3, var4, var5]);
/* Output
┌─────────┬──────────────────────────────────────────────────────────────────────────┐
│ (index) │ Values                                                                   │
├─────────┼──────────────────────────────────────────────────────────────────────────┤
│ 0       │ 12345                                                                    │
│ 1       │ 'I am Constant, could be string or number'                               │
│ 2       │ 'var is depricated in ES6, yet we see it in production due to old code.' │
│ 3       │ 'This way it goes to global scope. NO NO!'                               │
│ 4       │ undefined                                                                │
└─────────┴──────────────────────────────────────────────────────────────────────────┘
*/

// Let us try to change values in each above variable
var1 = 1;
var2 = 2; // since this is a constant only single time assignment is allowed & so the error
var3 = 3;
var4 = 4;
var5 = 5;

console.table([var1, var2, var3, var4, var5]);
/* Output
var2 = 2;
     ^
TypeError: Assignment to constant variable.
at Object.<anonymous> 
(/home/nilesh/gitlab_all_learning/js-basics-hiteshchowdhary/js-basics/codefiles/variables.js:25:6)
 */
