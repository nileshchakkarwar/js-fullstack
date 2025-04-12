// ways to concat strings in js

let str1 = 'Nilesh';
let str2 = 'Chakkarwar';
console.log(str1 + ' ' + str2); // this should be avoided!
// Output: Nilesh Chakkarwar

// String Interpolation method to concat strings
console.log(`This is my Name: ${str1} ${str2}`)
// Output: This is my Name: Nilesh Chakkarwar


let str3 = `This is my Name: ${str1} ${str2}`;

console.log(str3.toUpperCase()); //THIS IS MY NAME: NILESH CHAKKARWAR
console.log(str3.charAt(3)); // 's' as counting starts from 0
console.log(str3.indexOf('t'))// -1 indicating that not found as search is case sensitive
console.log(str3.indexOf('T'))// 0 
console.log(str3.substring(1,4))// 'his' 4th position is excluded

console.log('         Exmaple      '.trim()); // 'Example'


