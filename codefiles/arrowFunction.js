/* 
return statement is compulsory with {}
return is implicit without {} or ()
*/

// ways to write arrow functions

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,5)); //8

// implicit return
const addTwo2 = (num1,num2) => num1+num2;
console.log(addTwo2(5,5));

// implicit return with ()
const addTwo3 = (num1,num2) => (num1+num2); //{} is for scope where as () is different! hence it doesn't need return statement
console.log(addTwo2(5,5));

// returning a object using arrow function
console.log(() => ({name:'Nilesh'})()); //function declaration is not wrapped in ()
console.log((() => ({name:'Nilesh'}))()); // IIFE

/* some syntax for reference 
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
  return
}

param => {
  statements
  return
}

(param1, paramN) => {
  statements
  return
} 
*/