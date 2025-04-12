let func1 = ()=>undefined;
let func2 = ()=>null;
let func3 = ()=>1;

console.log(func1()??func3()??func2()); // output is 1

// Consider nullish coalescing as fallback mechanism in JS.

const a = func1() ?? func2() ?? 10;
console.log(a);