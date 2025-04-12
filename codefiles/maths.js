// frequently used Math functions
console.log(Math.abs(-4)); // 4
console.log(Math.round(3.9)) // 4
console.log(Math.ceil(2.1)) // 3
console.log(Math.floor(2.9)) // 2


// how to generate a random number between a given range of values
console.log(Math.random()); // generates number between 0 & 1 only
console.log(Math.random() * 10 + 1); // sometime the output could be 0.03425232 so when we multiply 10 to it
                                    // it will be 0.3425232 and that will always be 0
                                    // but we want random number starting from 1 hence we +1 so such cases
                                    // if happen will yield 1
                                    // hence every output is always +1;
                                    // meaning if Math.floor(Math.random()) yeilds 3 our putput is 4
                                    // ALWAYS increamented by 1

// Random number in a given range
console.log(Math.floor(Math.random() * (30 - 25 + 1) + 25)); // (30 -25 +1) gives range or boundaries for this random 
                                                            // generator
