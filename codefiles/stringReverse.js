let str1 = 'Nilesh'; // or let str1 = new String('Nilesh') is same but browser console elobrates the object
let str2 = 'Chakkarwar';
let str3 = `This is my Name: ${str1} ${str2}`;

// Reversing a string in JS
console.log([...str3].reverse().join('')); //'rawrakkahC hseliN :emaN ym si sihT';
str3.split('').reverse().join('');

// Slicing over substring as slice can take negative index also
// slice(start, end) -> note that start has to be smaller than end and end is not included
console.log(str3.slice(5,9)); //'is m'
console.log(str3.slice(-3,-1)); //wa 
console.log(str3.slice(-3)); // war