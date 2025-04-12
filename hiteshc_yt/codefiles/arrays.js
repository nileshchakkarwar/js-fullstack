// Declaration of arrays in JS
let arr1 = [1,2,3,4,5];
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

let arr2 = new Array(1,2,3,4,5,true,'some random string');
console.log(arr2); // [ 1, 2, 3, 4, 5, true, 'some random string' ]

// indexing of array
// let arr3 = [1   ,2  ,3  ,4  ,5]
        //    [0   ,1  ,2  ,3  ,4]
        //   [-5  ,-4 ,-3 ,-2 ,-1]


// Getting a single Element
arr1[2]; // 3
arr1[-2]; // undefined meaning not recognised by JS interpreter

// ----------------------------------------------------------
// slice(start:0, end:arr1.length)
// Accessing elements in Array
// When no argument is given to slice it takes defaults for start:0 and end:arr1.length-1
arr3.slice(); // [1,2,3,4,5]; 

// When only single number is entered in slice it always the START number
arr1.slice(2); //[ 3, 4, 5 ]
arr1.slice(-4); //[ 2, 3, 4, 5 ]

// always the start MUST be smaller than end
arr1.slice(2,4); //[ 3, 4 ]
arr1.slice(-4,-2); // [ 3, 4 ]

// ----------------------------------------------------------
// Adding or removing elements from Array
arr1.push(6); //[ 1, 2, 3, 4, 5, 6 ]
arr1.pop(); // [ 1, 2, 3, 4, 5 ]

// ----------------------------------------------------------
// questioning the array
arr1.includes(3); // true
arr1.includes(9); // false

// ----------------------------------------------------------
arr1.indexOf(3); //2
arr1.indexOf(19); // -1 indicating that element is not present in array

// ----------------------------------------------------------
arr1.join('*') //op is string - '1*2*3*4*5*6'


// -----------------------------------------------------------
let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8,9,10];

// merging/concating 2 arrays
let arr5 = [...arr3,...arr4]; // 

// flatting arrays
let a6 = [[1],[2],[3]]; // thease are arrays within arrays
a6.flat(Infinity); //flattning the array to depth of Inf meaning array within array with in array will be flattened

// making a array OF objects
let o1 = {name: 'Nilesh'};
let o2 = {name: 'Sana'};
let a7 = Array.of(o1,o2);

// making a array from a object, this is needed while looping over object elements
let o5 = {name: 'Nilesh',age: 38, color: 'handsome', weight: '79',hobby: 'learning', addr: {flat: 'a1', wing:'b1',building:'c1'}};
let directArrayFromObj1 = Array.from(o5); // gives empty array
let arrayFromObjKeys1 = Array.from(Object.keys(o5));
let arrayFromObjValues1 = Array.from(Object.values(o5));