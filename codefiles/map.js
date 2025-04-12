let arr1 = [1,2,3,4,5,6,7,8,9,10];

let intermediateArray = arr1.map(item=>item*5);
console.log(intermediateArray); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(arr1); //[1,2,3,4,5,6,7,8,9,10];

let finalOp = arr1.filter(item=>item>=5)
                  .map(item=>item*5);
console.log(finalOp); //[ 25, 30, 35, 40, 45, 50 ]

