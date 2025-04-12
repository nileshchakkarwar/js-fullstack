// While using dates use only new Date().
// Date.now() is not of much use.

let d1 = new Date();
console.log(d1); //2024-10-13T10:10:18.624Z

// How to convert date object to epoch date
console.log(`${Date.parse(d1)}`);//1728820788000

// Convert epoch back to standard format
console.log(`${new Date(Date.now())}`);

// Number of miliseconds in a day
console.log(`${60*60*24*1000}`);

// Fetch Date Day and Year from dateobj
console.log(`${d1.getDay()} ${d1.getDate()} ${d1.getFullYear()}`);
//OUTPUT: 0 representing Sunday; 13 2024

// wow library for dateformatting.
moment = require('moment');

// no arguments will give the now date
moment()

// moment takes both epoch and string as input
console.log(moment('2024-12-02')); // identified coz of string
console.log(moment(1728821607572)); // identified coz of number

// Doc: https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
// you can custom define any format we want.
moment(d1).format('DD MMM YY   HH:mm:ss:SSS');

