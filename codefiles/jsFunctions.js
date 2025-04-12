// Arguments v/s parameters
// Function Declartion having parameters
function someFunctionName(param1, param2){
    if(param1 && param2){
        return `Output: ${param1} ${param2}`
    }
    return `Param1 or Param2 is empty`
}

// function call with arguments
console.log(someFunctionName(2));

// --------------------------------------------------------------------------------
// Using the rest operator
function demoFuncRestOperator(var1, ...arrItAll){
    console.log(arrItAll); // all args accumulate as Array elements [ 1, 2, 3, 4, 5 ]
    let sum = 0;
    for(let i = 0; i<arrItAll.length;i++){
        sum += arrItAll[i]
    }
    return sum
}

//function call
console.log(demoFuncRestOperator(1,2,3,4,5)); // 14 and not 15 as var1 holds 1 and rest all are stored in arrItAll variable

// --------------------------------------------------------------------------------
// similarly we can send Objects and arrays to the function