// Delcaration of object in JS
//     1. Singleton method
//     2. object literals

// Singleton - Object.create();

// Object Literals: General Method is  method
let symbol1 = Symbol("key1");
const jsUser = {
  name: "nilesh",
  "full name": "nilesh chakkarwar",
  [symbol1]: "This is a symbol",
  age: 19,
  location: "pune",
  email: "abc@1secmail.com",
  isLoggedIn: false,
};

// accessing values in objects
jsUser.name; // nilesh
jsUser["full name"]; // accessing keys with spaces then we have to use [] only. dot notation won't work

jsUser[symbol1]; // 'This is a symbol' only with [] it is accesible not with dot notation
jsUser.symbol1; // undefined. We cann't access symbols with dot notation.

// changing values in a object
jsUser.name = "NileshRC"; // direct assignment works here!
// oldObj={name:"nilesh","full name":"nilesh chakkarwar",age:19,location:"pune",email:"abc@1secmail.com",isLoggedIn:!1,[Symbol(key1)]:"This is a symbol"},
// newObj={name:"NileshRC","full name":"nilesh chakkarwar",age:19,location:"pune",email:"abc@1secmail.com",isLoggedIn:!1,[Symbol(key1)]:"This is a symbol"};

// locking a object
Object.freeze(jsUser); // once this applied then we cann't change values of the object
jsUser.name = "Trying to modify but since obj is freeze it wont wrk";
// output: {name:"NileshRC","full name":"nilesh chakkarwar",age:19,location:"pune",email:"abc@1secmail.com",isLoggedIn:!1,[Symbol(key1)]:"This is a symbol"};
// name did not get updated!!!
// unfreezing is not an option
// only way out would be to create a deep copy of object and work on the new object.

// Methods in JS objects--------------------------------------------------------------------------------------
let objectWithMethod = {
  name: "Nilesh",
  age: "forever21",
  flatNo: "104",
  building: "E",
  sector: "R4",
  township: "Life Republic",
  town: "Marunji",
  pin: 411057,
  way1: function () {
    console.log(
      `fetchAddress1 is \n${this.sector} ${this.building}${this.flatNo} ${this.township}\n${this.town} - ${this.pin}`
    );
  },
  way2() {
    console.log(
      `fetchAddress is \n${this.building}${this.flatNo} ${this.sector} ${this.township}\n${this.town} - ${this.pin}`
    );
  },
  way3() {
    console.log(`Way6 function outputing name.........${name}}`);
  },
};

// methods are defined outside the object but the object is getting updated at run time
objectWithMethod.way4 = () => {
  console.log(
    `fetchAddress is \n${this.building}${this.flatNo} ${this.sector} ${this.township}\n${this.town} - ${this.pin}`
);
};
objectWithMethod.way5 = () => {
  console.log(
    `fetchAddress is \n${building}${flatNo} ${sector} ${township}\n${town} - ${pin}`
  );
};
objectWithMethod.way6 = function () {
  console.log(
    `fetchAddress is \n${this.building}${this.flatNo} ${this.sector} ${this.township}\n${this.town} - ${this.pin}`
  );
};

// How the object now looks like after adding way3 and way4 fuctions
// {
//     name: 'Nilesh',
//     age: 'forever21',
//     flatNo: '104',
//     building: 'E',
//     sector: 'R4',
//     township: 'Life Republic',
//     town: 'Marunji',
//     pin: 411057,
//     way1: [Function: way1],
//     way2: [Function: way2],
//     way3: [Function: way3],
//     way4: [Function (anonymous)],
//     way6: [Function (anonymous)],
//     way5: [Function (anonymous)]
//   }

objectWithMethod.way1; // since () i.e is invocation is missing this return [Function: fetchAddress]

objectWithMethod.way1(); //output is normal; using : to assign a funtion a name
objectWithMethod.way2(); //syntac is kind of matching up with other languages
objectWithMethod.way3(); //Uncaught ReferenceError: name is not defined as we did not use THIS to refer name
objectWithMethod.way4(); //its not allowed to use ARROW function and THIS
objectWithMethod.way5(); // this also gives and error so its better to avoid ()=>{} while declaring function
                        // user arrow function when using them as callback functions
objectWithMethod.way6(); // normal output



// concat objects------------------------------------------------------------------------------------
let obj1 = {1:'a',2:'b'};
let obj2 = {3:'c',4:'d'};

// Object.assign(target,sources)
let obj3 = Object.assign({},obj1,obj2); //{} is target and obj1 & obj2 are sources
let obj4 = Object.assign(obj1,obj2); // since here obj1 is target, obj2 is modified!

// check if a key is present in object
'3' in obj1; // true
obj1.hasOwnProperty('3'); //true

// / extract keys or values from object-----------------------------------
//fetching array of keys or values or object or entire object
Object.keys(obj1); //[ '1', '2' ]
Object.values(obj1); //[ 'a', 'b' ]
Object.entries(obj1); // [ [ '1', 'a' ], [ '2', 'b' ] ]