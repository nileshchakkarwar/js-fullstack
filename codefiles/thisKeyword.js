// this basics
const obj1 = {
    name : 'Nilesh',
    subscription: 999,
    greetOnWelcome: function(){
        console.log(this) // op on line 10
        return `Hey ${this.name} welcome for Chai and Code Series`
    }
}

console.log(obj1.greetOnWelcome())
/*
{
  name: 'Nilesh',
  subscription: 999,
  greetOnWelcome: [Function: greetOnWelcome]
}
Hey Nilesh welcome for Chai and Code Series
*/
// first the object is printed as response to the this printing
// then the return

// ---------------------------------------------------
console.log(this); // {} in node this outside object is empty object
                   // whereas in browser this refers to Windows object

// -----------------------------------------------------
// lets try this in any function context
function arbitaryFunction(){
    let var1 = 'somevalue';
    console.log(this.var1) // undefined
    console.log(this); // just this op on line 36 onwards
}
arbitaryFunction();

/*  this keyword in function scope yields below op and has no trace of var1

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
 */