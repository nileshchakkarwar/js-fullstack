basicFunction(); // calling basic func before declaration is absolutely fine.
function basicFunction(){
    console.log('I am basic function')
}

expressionFunc(); // this will throw error
                  // ReferenceError: Cannot access 'expressionFunc' before initialization
                  // details will be covered in hoisting!!!
const expressionFunc = function(){
    console.log("I am expression function")
}