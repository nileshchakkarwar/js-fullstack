// problem with Var-------------------------------------------------------------

if (true) {
  var a = 1;
}

console.log(a); // ideally this should throw error but it prints 1 since var is in global scope

// ----------------------------------------------------------------------------
let var1 = "var1"; // this is declared for the file level scope hence accessible 
                   //everywhere in the file also with inner most functions!!
function outerFunction() {
  let var2 = "var2";
  function innerFunction() {
    console.log(var1); // var1 is accessible to innerFunction!
    console.log(var2); // so is var2
  }
  innerFunction(); // invocation
}

outerFunction();

// Trying to modify the global variable via inner function-----------------------------
let globalVar = 'I am global';

function outerFunction1(){
    let outerVar = 'I am outer Var';
    function innerFunction1(){
        globalVar = 'I am innerVar now'; // trying to override the global var and it works!
    }
    innerFunction1()
}

outerFunction1();
console.log(globalVar);