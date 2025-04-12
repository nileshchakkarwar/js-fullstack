// declare a object
let obj1 = {
    name: 'nilesh',
    surname: 'chakkarwar',
    age: 'forever 21',
    address:{
        flat: 104,
        wing: 'E',
        sector: 'R4',
        township: 'Life Republic',
        pin: 41107
    }
}

// object deconstruct or destructuring
let {name1} = obj1; // equals to let name = obj1.name; note property name has to match
let {xyz} = obj1; // undefined as xyz doesn't match any key in object obj1.

let {a,b,...rest1} = obj1; //a = undefined, b=undefined rest = complete obj1

let {name, surname, ...rest} = obj1 
    // name = nilesh, 
    // surname = chakkarwar and 
    // rest = {age:"forever 21",address:{flat:104,wing:"E",sector:"R4",township:"Life Republic",pin:41107}};


// Destructuring Arrays

let [a1,b1,...restOfArr] = [10,20,30,40,50,60,70,80,90,100];

a // 10
b // 20
rest // [30, 40, 50,  60, 70, 80, 90, 100]

// default values 
let [c=21,d,...rest2] = [];

c // 21
d // undefined
rest2 // undefined