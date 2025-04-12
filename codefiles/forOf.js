let obj = [
  { course: "c1", price: 200, year: 2024 },
  { course: "c2", price: 201, year: 2025 },
  { course: "c3", price: 202, year: 2026 },
  { course: "c4", price: 203, year: 2027 },
  { course: "c5", price: 204, year: 2028 },
  { course: "c6", price: 205, year: 2029 },
  { course: "c7", price: 206, year: 2030 },
];

for (const elm of obj) {
    console.log(elm);
}

// for-of on strings as string is also an array of chars!!
let randomStr = 'Hello World!';
for (const char1 of randomStr) {
  console.log(char1);
}

// error as for-of doesn't work on objects we need to use for-in
let obj2 = {course: 'c6',price: 205, year: 2029};

for (const elm of obj2) {
    console.log(elm);
}
