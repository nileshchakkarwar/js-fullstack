// duck typing way to define numbers
let num1 = 100;
console.log(num1);

let num2 = new Number(987654321);
console.log(num2);

// some common method used with numbers
console.log(num2.toString().length);  // 9
console.log(num2.toFixed(2)); // 987654321.00
console.log(1234.123.toPrecision(5)); // 1234.1 returns 5 chars not numbers where before decimal is preferred
                                    // can also be used for rounding off the number
console.log(num2.toLocaleString('en-IN')); //98,76,54,321
