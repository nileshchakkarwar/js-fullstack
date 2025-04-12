JS Notes for easy revision
===============

Reference Link:
---
* [Chai & Code Hitesh Choudhary YouTube](https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)

Git repo Code & Notes:
---
* https://gitlab.com/nileshchakkarwar
* doesn't login with gmail creds but use nileshchakkarwar@gmail.com for login

|||EG|Desc|
|-|-|-|-|
|**Quick Revision**||||>--------------EOL--------------<
|for loops|- All types |- [Txt File](/hiteshc_yt/notes/txt/forLoopsInJs.txt)||
|**Naming Conventions**||||>--------------EOL--------------<
||Variable:|- *accountNumber*|- Variable names are defined in camelCase|>--------------EOL--------------<
||Boolean:|- isFirst or  hasValue|- Adding *is* or *has* to make it more readble.|>--------------EOL--------------<
||Function:|- *function* getName(){}<br>|- camelCase. <br>- Function Names are case sensitive in JS meaing **func1** and **Func1** are treated as different functions in JS.|>--------------EOL--------------<
||Constants:|- LIST_OF_CONST_VALS|- All caps and words are seperated using underscore.|>--------------EOL--------------<
||Class:|- class Bike or class HumanBeing|- PascalCase|>--------------EOL--------------<
||Filename:|- jquery-1.4.2.min.js<br>- jquery.plugin-0.1.js<br>- myapp.invoice.js|- <u>prdct-nm.plugin-version.ftype.js</u><br>- Notice how hypen is used in productname and dot(.) for further information<br>- Where the product-name + plugin pair can also represent a namespace and a module.<br>- filetype - min/custom|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Variables**||||>--------------EOL--------------<
||var|- [Variable example code](/hiteshc_yt/codefiles/variables.js)|- Depricated after ES5.<br>- Avoid using while writing new code|>--------------EOL--------------<
||let|- [Variable example code](/hiteshc_yt/codefiles/variables.js)|- Life of the *let* variable is restricted to the block in which it is defined. <br>- The problem of global scope of variable is resolved using *let*|>--------------EOL--------------<
||const|- [Variable example code](/hiteshc_yt/codefiles/variables.js)|- Variables who's values can be set only while declaration and cannot be changed after that.|>--------------EOL--------------<
||*NO* var/let/const|- [Variable example code](/hiteshc_yt/codefiles/variables.js)|- If a variable is not declared using let/var/const then it goes to global scope.<br>- This is not a good practise and should never be used.<br>- Infact if we write **'user strict'** on top of each file this will throw error.|>--------------EOL--------------<
||default value of a variable|- [Variable example code](/hiteshc_yt/codefiles/variables.js)|- default value if no assignment is *undefined*|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Datatypes**||||>--------------EOL--------------<
||Broad classification|- Primitive<br>- Non Primitive|- let arry = [1,2,3]<br>- let obj = {name: "Nilesh", hobby:"fitness"}<br>- let func = function(){}<br><br>- Any variable that has any brackets after is are non primitive datatypes.<br>- Non primitive are also called call by reference types.<br>- They are also stored in HEAP memory where as primitive types are stored in stack.<br>- Primitive types are copied and not referenced!|>--------------EOL--------------<
||Stack & Heap Memory|- Stack ➯ Call by value<br>- Heap ➯ Called by reference|- Primitive ➯ Memory allocation is on stack ➯ String, Number, Boolean, null, undefined, Symbol, BigInt<br>- Non primitive ➯ Memory allocated on Heap ➯ Array, Object and Function (Object Function) |>--------------EOL--------------<
||Numbers|- Integers<br>- Float<br>- Anytype of numbers|- Supports 2^53|>--------------EOL--------------<
||bigint|- let x = BigInt(9999999999);<br>- let x = 999999999999**n**|- If number ends with **n** then it is treated as BigInt<br>- Used in trading or banking application especially Forex|>--------------EOL--------------<
||String|- "abc" or "123" or ""|- Just like other language|>--------------EOL--------------<
||Map|let x = new Map()|-Maps are more powerful than plain objects as plain objects only support string and Symbols as keys<br>- Consider it like object but iterable and that preserves order.<br>- keys are unique!<br>- x.set('a',1)<br>- Representation: { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }<br>- We cannot set values in maps like ➯ *x['a'] = 25 or x.b = 35* we have to use x.set(key, value)|>--------------EOL--------------<
||boolean|- true or false|- Notice that t/f is in small letters|>--------------EOL--------------<
||null|- null|- standalone value<br>- null >= 0 yields true unlike null == 0; as comparison and equality work differently in JS<br>- >= converts null to 0 hence 0 >= 0 will be true.<br><br>- typeof null =o/p=> object<br>- In fact, the ECMAScript specification defines null as the primitive value that represents the **intentional absence** of any object value|>--------------EOL--------------<
||undefined|- let a;|- undefined is when variable is declared but not assigned any value<br>- undefined is one of its kind and kind is undefined itself :)|>--------------EOL--------------<
||symbol|- uniqueness of keys in objects|- heavily used in React|>--------------EOL--------------<
||NaN|- NaN|- typeof NaN is *number* (weired!)|>--------------EOL--------------<
||Array|- let arr = [{},{},{}]|- This is created in heap memory.<br>- Untill we don't make a deep copy, by default it reference is only copied|>--------------EOL--------------<
||Objects|- let obj = {}|- This is created in heap memory.<br>- Untill we don't make a deep copy, by default it reference is only copied|>--------------EOL--------------<
||Functions|- let func = function(){}|- Yes functions are also objects in JS<br>- This is created in heap memory.<br>- Untill we don't make a deep copy, by default it reference is only copied|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Conversion**||||>--------------EOL--------------<
||How to Convert|- Number()<br>- Boolean()<br>- String()<br>- Date()|- new Date(); or new Date('2024-10-29');<br>- All the datatypes have contructors so just pass that value in constructor to get it converted|>--------------EOL--------------<
||Conversion Examples|- [Conversion Code eg](/hiteshc_yt/codefiles/conversion.js)|- Even if string have number and char combination yet there is no error! and silently get converted to NaN|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Operations**||||>--------------EOL--------------<
||Basic operations in JS|- 2+2<br>- 2-2<br>- 2*2<br>- 2/2<br>- 2**3 <br>- 2%3|- ** power operator<br>- % gets the remainder of the divison|>--------------EOL--------------<
||Num to string conversion|&xrArr;|- '1'+2 ➯ 12 as 2 is converted to string<br>- '1'+2+3 ➯ 123 as first occurance is string all other numbers are converted to strings<br>- 1+2+'3' ➯33 coz 1 & 2 will be treated as numbers till interpreter encounters a string|>--------------EOL--------------<
||Prefix & postfix|- ++<br>- --|- let a = 3;const b = ++a; ➯ b will have 4 increment before assigning<br>- let a = 3;const b = a++; ➯ b will have 3 increment after the assignment operation|>--------------EOL--------------<
||Comparison|- ><br>- <<br>- >= or <=<br>- == or !=<br>- === or !==|-  Basic comparsion operations/operators|>--------------EOL--------------<
||Strange Comparison Behaviour|&xrArr;|- null >= 0 yields true unlike null == 0;<br>- Reason comparison operators work diffently then the equality operators in JS.<br>-  Comparison operators convert null to 0 hence we get true|>--------------EOL--------------<
||Strict Comparison|- ===|- Compares datatype as well as value<br>- '02' == 2 is true but<br>- '02' === 2 is false|>--------------EOL--------------<
||Ternary Operator|- condition ? True : False||>--------------EOL--------------<
||Optional Chaining|- user.write?.salary;|- User is object that may or may not have write key, if write is not present how will salary be present?<br>- If parent object (write) is not present then how will child be present salary?<br>- ? will avoid error and just give *undefined* <br>- a.b?.c ? a.b.c : 'Some default if sub-obj is missing'|>--------------EOL--------------<
||Nullish Coalescing|- Truthy \|\| 'default value'<br><br>- Truthy or 0 or "" **??** 'default value'|- \|\| works well untill '' or 0 come to picture<br>- ?? includes Truthy,0 & "" empty strings also ➯ Truthy + 0 + ""(empty string)<br>- Meaning only null and undefined will yield default string<br>- This is mostly used with function calls so if any function returns null or undefined then it should either invoke other function or go for default value.<br>- func1() ?? func2() ?? 'default value'|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Strings in Detail**||||>--------------EOL--------------<
||String Concat|- [String Basic Functions](/hiteshc_yt/codefiles/stringsBasicFunctions.js)|- var1 + var2 ➯ is not preferred old method to concat strings <br>- Always use string interpolation|>--------------EOL--------------<
||String Operations|- [Slice & Reversing a Str](/hiteshc_yt/codefiles/stringReverse.js)|- str1.slice(-3) ➯ -3 acts as lenght from right<br>- str1.slice(-3,-1) ➯ start,end where end is not counted;<br>- Reversing a string ➯ [...var3].reverse().join(''); Not easy like python str3[-1::]|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Number & Maths**||||>--------------EOL--------------<
||Numbers Declaration|- [Image: With & Without constructor](/images/enforcingDatatypeAsNumber.png)|- Without constructor ➯ typeof is 'number'<br>- With constructor new ➯ typeof is 'object'|>--------------EOL--------------<
||Numbers frequently used methods|- [JS example file](/hiteshc_yt/codefiles/numbers.js)|- Simple usage and their output|>--------------EOL--------------<
||Maths|- [Commonly used methods](/hiteshc_yt/codefiles/maths.js)|- Commonly used Math methods<br>- Math is a module that is shipped with JS compiler/interpreter.|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Date & Time**||||>--------------EOL--------------<
||Date&Time Examples||- [Usages of Date&Time in JS](/hiteshc_yt/codefiles/dates.js)|>--------------EOL--------------<
||Epoch Date|- 1970-01-01 00:00:000UTC|- Some arbitrary date that has now become defacto standard|>--------------EOL--------------<
||Ideal way to define dates|- YY MMM DD HH:mm:ss:SSS|- Notice how it is written from larger time to smaller time i.e from years to miliseconds|>--------------EOL--------------<
||Useful resource||- [Formatting Date & Time using moment Library](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)|>--------------EOL--------------<
||Declaration|- <strike>Date.now()</strike><br>- new Date()<br>- new Date('any date string')<br>- new Date(epoch number)|- Date.now() (AVOID) ➯ outputs unix time format in miliseconds<br>- new Date() ➯ outputs a date object that is well formatted|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Arrays**||||>--------------EOL--------------<
||Useful Methods|[Code File](/hiteshc_yt/codefiles/arrays.js)|- Accessing a single element<br>- Accessing a subset (slice method)<br>- Adding/removing a element *push* or *pop*<br>- Questioning array for presence of element in array *includes*<br>- Concating 2 arrays using spread operator<br>- Flattening array of arrays<br>- Array.of to aggegrate objects into array<br>- Array.from(Object.keys(obj)) for creating arrays from objects |>--------------EOL--------------<
||Array De-Structuring|[Code file](/hiteshc_yt/codefiles/destructureObjArr.js)|- [a,b,..rest] = [1,2,3,4,5]<br>- [a=1000,b,...rest]=[] here a is getting default value of 1000 if nothing is assigned to a|>--------------EOL--------------<
||for-of vs for-in |[Code File](/hiteshc_yt/codefiles/forOf.js)<br>[Map-DS Code File](/hiteshc_yt/codefiles/forOfMapDS.js)|- for-of returns values<br>- for-in returns keys but in case of array its going to always be index so not that useful<br>- Works fine on Map Datatypes too as it returns a array object like ➯['key','value']<br>- Doesn't works on objects!|>--------------EOL--------------<
||forEach|[forEach Code File](/hiteshc_yt/codefiles/forEach.js)|- it is inherited for every Array hence very handy and only useful for console.log<br>- it doesn't return anything <br>- doesn't modify exiting array hence mostly used for console.log<br>- use map instead !!!<br>- basic syntax: **arr.forEach((eachItem,index,arrRef)=>{action to be performed on single item}**) |>--------------EOL--------------<
||filter|[arr.filter Code File](/hiteshc_yt/codefiles/arrFilter.js)|- As forEach doesn't return values hence we need filter, map, reduce<br>- basic syntax : **arr1.filter(item=>expression)** here quite a few things happen<br>- All values of *arr* are passed 1-by-1 to arrow function<br>- this arrow callback function focuses on single item so define the operation that is required on that time<br>- expression should evaluate to true/false<br>- false don't return; true then return<br>- since this is on single line and there is no {block} hence return is implicit!|>--------------EOL--------------<
||filter chaining|[chaining Code File](/hiteshc_yt/codefiles/filterChaining.js)|- We can apply filter on the output of other filter! kind of queryset!|>--------------EOL--------------<
||map|[map Code File](/hiteshc_yt/codefiles/map.js)|- Why map if we have forEach?<br>- forEach doesn't returns values irrespective of what we do<br>- Hence chaining is not possible for forEach<br>- Map returns values hence chaining is possible!<br>- hence map == forEach + chaining! :)|>--------------EOL--------------<
||reduce|[reduce Code File](/hiteshc_yt/codefiles/arrReduce.js)|- Best use case scenario is shopping cart to add values from different objects <br>- basic syntax: **let total = arr1.reduce((accumulator, currVal/currObj)=> accumulator+currVal.price, initial value)**|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Objects in JS**||||>--------------EOL--------------<
||General Objects points|[Code file](/hiteshc_yt/codefiles/jsObjects.js)|- We have a relaxation in JS that we don't need to have '' or "" around the key of objects, interpreter does it by itself!<br>- Declaring a object in JS ➯ 1. Singleton 2. Object Literals<br>- Accessing values in objects<br>- Modifying values in objects<br>- Freezing an object to avoid further modification|>--------------EOL--------------<
||Methods *not functions*|[Code file](/hiteshc_yt/codefiles/jsObjects.js)|- Methods and functions are different<br>- Methods work WITHIN objects where as functions work ON objects<br>- There are basically 3 styles to declare methods<br>- Methods with arrow functions is big :x: *no no* :x: as this keyword won't work with arrow functions<br>- JS is flexible enough to accomodate method on runtime or on the fly if the object is not frozen|>--------------EOL--------------<
||Concat 2 objects|[Code file](/hiteshc_yt/codefiles/jsObjects.js)|- Object.assign(*target*,source**S**)<br>- let obj3 = Object.assign({},obj1,obj2);<br>- {...obj1,...obj2}|>--------------EOL--------------<
||Checking if key is present|[Code file](/hiteshc_yt/codefiles/jsObjects.js)|- Using in operator ➯ '3' in obj1<br>- obj1.hasOwnProperty('3');|>--------------EOL--------------<
||Extracting Keys or values only|[Code file](/hiteshc_yt/codefiles/jsObjects.js)|- Object.keys(obj1);<br>- Object.values(obj1);<br>- Object.entries(obj1);|>--------------EOL--------------<
||Object De-Structuring|[Code file](/hiteshc_yt/codefiles/destructureObjArr.js)|- {key} = obj.key ➯ LHS & RHS keys should match so value gets assigned automatically<br>- heavily used in react code|>--------------EOL--------------<
||Useful Resources||- [randomuser.me](https://randomuser.me/)<br>- Try using json formatter to understand the structure of object<br>- [jsonformatter.org](https://jsonformatter.org/) ➯ choose TREE option|>--------------EOL--------------<
||for-in vs for-of|[for-in Code File](/hiteshc_yt/codefiles/forIn.js)|- for-in only works with objects<br>- for-of works on iterator datatypes and object is not a iterable it will give error!<br>- One cannot use dot notation with iteration variable, we have to use obj[key]<br>- If it is a static key, use Dot Notation. But if it is a dynamic key (evaluated from an expression during runtime like for loop), use Bracket Notation.|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Functions**||||>--------------EOL--------------<
||Absolute Basics|[Code File](/hiteshc_yt/codefiles/jsFunctions.js)|- Function Declaration<br>- Function Reference *funcName* i.e is **without** ()<br>- Function call with *funcName()* this executes the function immediately<br>- Arguments v/s parameters<br>&emsp;- Arguments ➯ A means it starts here that is function call<br>&emsp;- Parameter ➯ P comes after A so it goes with function defination|>--------------EOL--------------<
||Rest Operator|[Code File](/hiteshc_yt/codefiles/jsFunctions.js)|- Used to club all the arguments in single paramter :)<br>- ... operator is called SPREAD or REST operator base on the usecase.<br>- So in the usecase of accumulating all the args of functions its called REST operator|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Scopes**||||>--------------EOL--------------<
||Block Scope|[Code File](/hiteshc_yt/codefiles/scopes.js)|- Basicially {} with if or functions or for loop are block scope.<br>- let obj = {} this is object declaration, even if the object has {} it doesn't count in *scoping* discussion.|>--------------EOL--------------<
||Global Scope|[Code File](/hiteshc_yt/codefiles/scopes.js)|- Global scope in Windows/browser and node is different.<br>- If a variable is declared in node under a file then the global scope for that variable is that file!!|>--------------EOL--------------<
||let/const<br>var<br>no keyword|[Code File](/hiteshc_yt/codefiles/scopes.js)|- let/const are block scoped where has var and variable without var keyword is global scoped!|>--------------EOL--------------<
||Nested Scope|[Code File](/hiteshc_yt/codefiles/scopes.js)|- Eg Functions within Functions|>--------------EOL--------------<
||Basic Function<br>Expression Function|[Code File](/hiteshc_yt/codefiles/basicFunc.vs.expressionFunc.js)|- Anonymous function when assigned to a variable becomes a expression function.<br>- Hoisting doesn't apply to the expression fuctions|>--------------EOL--------------<
||Closure||- Closure is a techinique used by JS to define scopes<br>- Will be discussed in detail with DOM<br>- Inner function able to access the variable of the outer functions is a example of closures|>--------------EOL--------------<
||DOM||- Document Object Model is nothing but the way to manipulate HTML page|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**Arrow Functions**||||>--------------EOL--------------<
||this keyword|[Code File](/hiteshc_yt/codefiles/thisKeyword.js)|- refers to the current context!<br>- but *this* cannot be used with arrow function or other functions too check the code file<br>- this keyword in an js object makes sense but in function returns metadata or undefined|>--------------EOL--------------<
||Arrow Functions|[Code File](/hiteshc_yt/codefiles/arrowFunction.js)<br>- ()=>{}<br>- ()=> expression<br>- param=>(expression)<br>- ()=>()<br>- (()=>())() IIFE<br>- (()=>{})() IIFE|- When arrow function has {} then explicit *return* is required<br>- We can also have arrow functions without {} called implicit return.<br>- In this cases the JS interpreter assumes the context to be single line and mostly single operation most of the time<br>- What if we want the arrow function to return a object and goes without saying that object has {}; to solve this issue we wrap the RHS in ().<br>- ()=>({name:'Nilesh'}) is a arrow function with implicit return that will return the object!<br>- Note that function definition is different than function invocation. <br>- *funcName()* () is responsible for function invocation<br>- Hence arrow functions need to (()=>{})() - Notice the () that wraps the function definition<br>- and then () does the function invocation!|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**IFFE**||||>--------------EOL--------------<
||Basic theme|(func-def)()|- enclose the function def in () and then add () to invoke it ➯ ()()<br>- We need IFFEs to avoid global variables polluting the local scope|>--------------EOL--------------<
||Named IFFE|[Code File](/hiteshc_yt/codefiles/iffe.js)|- With the theme (func def)(invocation) the functions def has a name is named IFFE|>--------------EOL--------------<
||Unnamed IFFE|[Code File](/hiteshc_yt/codefiles/iffe.js)|- Usually made with arrow or anonymous functions|>--------------EOL--------------<
||Pass param to IFFE|[Code File](/hiteshc_yt/codefiles/iffe.js)|- Code is best reference|>--------------EOL--------------<
||Writing 2 IFFEs|[Code File](/hiteshc_yt/codefiles/iffe.js)|- don't forget the ; between 2 IFFEs as the interpreter/compiler doesn't understand where the context of functions ends|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**25:JS Code Execution & Call Stack**||||>--------------EOL--------------<
||JS Execution Context|No Code File|- Global Execution **Context** is mapped to *this*<br>- Function Execution Context<br>- Eval Exeuction Context that is part of global execution context itself|>--------------EOL--------------<
||JS Cycles while code execution|No Code File|- Memory Creation Phase or Just Memory Phase<br>- Actual Execution Phase|>--------------EOL--------------<
||Complete Flow with EG|No Code File|- Say we create a js file. With some variables and functions. And with functions within functions<br>- Yes the execution happens line by line! but the thing is it has 2 cycles|>--------------EOL--------------<
|||Memory Cycle|- First for the file a global context is created and *this* is attached to it, in browser *this* attaches to window object<br>- First cycle runs and all the varibles memory allocation is done. Say we have let x=10; then only in heap memory x is created as undefined. Yes as undefined and not 10. 10 is allocated to x in execution cycle<br>- Say if there is a anonymous or named function in the file then just the memory reference is created in first cycle<br>- JS doesn't support classes directly but class and other are just syntatic sugar in JS.<br>- JS achieves all the functionality of classes by using first-class functions, hooks, context, closures|>--------------EOL--------------<
|||Execution cycle|- So when the execution starts variables start getting value there are assigned undefined in memory cycle<br>- What happens with functions? A new context is created and again memory cycle insulated from the global context is created then the execution context for the function is started!<br>- Try to imagine that main thread moves to function context and both the cycles start again<br>- JS is single threaded execution!|>--------------EOL--------------<
|||Call Stack|- Stack means LIFO<br>- Consider context as seperate **least** colluding exeution env, interaction happens only when function access global variables<br>- First context pushed on the stack is Global Context<br>- Every Function gets its own context and sits on top of global context!<br>- first one to enter the stack is global context and last one to exit is global context|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**26:Control Flow**||||>--------------EOL--------------<
||if-else syntax|[Code File](/hiteshc_yt/codefiles/ifElse.js)|if (condition) {code block} <br>else if(cond2) {} <br>else {}|>--------------EOL--------------<
||if-else bad syntax||- Don't avoid using {} if you have more than 1 line under if block<br>- if (cond) console.log(), console.log();|>--------------EOL--------------<
||Ternary Operator||condition ? true : false|>--------------EOL--------------<
||Operators||<, >, <=, >=, ==, !=, ===, !==|>--------------EOL--------------<
||And OR||- &&<br>- \|\||>--------------EOL--------------<
||Switch Case|[Code File](/hiteshc_yt/codefiles/switch.js)|- Consider it as a subset of if else<br>- break; is required otherwise all the below statements will get executed until break is encoutred<br>- if nothing matches then default!<br>- Only equality if checked; cann't check <= or any other comparasion operators <br>- Useful when each increment has some code execution<br>- Best example would be 1-12 representing Jan to Dec and some logic with it!|>--------------EOL--------------<
||Falsy values||- false<br>- 0<br>- (negative zero) ➯ -0<br>- BigInt 0n<br>- "" empty string<br>- null<br>- undefined<br>- NaN|>--------------EOL--------------<
||Truthy||- Everything that is not falsy is truthy, some of the below values are also truthy<br>- '0' ➯ Since string is not empty<br>- 'false' ➯ As false is not bool and string is not empty <br>- " " ➯ Since space is also some char<br>- [] ➯ Empty array is also a truthy<br>- {} ➯ Empty object is also truthy<br>- function(){} ➯ Empty function is also truthy!|>--------------EOL--------------<
||Check empty array||- let arr1 = [];<br>- arr1.length ===0 ? 'Array is empty': arr1;|>--------------EOL--------------<
||Check empty object||- Object.keys(obj1) returns a array and then we check lenght<br>- There is no direct way to check if array or object is empty<br><br>- let obj1 = {};<br>- Object.keys(obj1).length === 0 ? 'Empty Object': obj1|>--------------EOL--------------<
||Nullish Coalescing|[Code file](/hiteshc_yt/codefiles/nullishCoalescing.js)|- let func1 = ()=>undefined;<br>- let func2 = ()=>null;<br>- let func3 = ()=>1;<br><br>- console.log(func1()??func3()??func2()); // output is 1<br>- It is like a fallback option in JS. As null and undefined might create issues if not handled correctly|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**27: For Loops**||||>--------------EOL--------------<
||for-loop basic|[Code File](/hiteshc_yt/codefiles/forLoop.js)|- for (let i = 0; i < 10; i++) {console.log(i);}<br>- for every outer loop index to increment the inner loop needs to complete its cycle!|>--------------EOL--------------<
||for break continue|[Code File](/hiteshc_yt/codefiles/forBreakContinue.js)|- break will break out of the loop scope as soon as the condition is met<br>- continue will just SKIP the iteration!<br>- 5 is missing in that iteration|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**28: While**||||>--------------EOL--------------<
||When to use while||- While is preffered over for-loop when we know at what condition to stop but we don't know when that condtion will be met!<br>- Best example would be you create a command line utility and if user type 'z' then we have to break else we need to continue<br>- such cases for loop may not useful or ideal, hence here we use while loop|>--------------EOL--------------<
||syntax||- let i=0; <br>while(cond till when it should run)<br>{... increment i value}<br><br>- let i=11;<br>do{<br>execute in first go<br>}while(condition)|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**29&30: Array Loops**||||>--------------EOL--------------<
||Need for different loop syntax||- for-of works on iterable data-structure such as arrays and maps where as objects are not iterable<br>- Basic idea is that for-of returns values and for-in returns keys.<br>- Always think that JS is designed around json<br>- Meaning that Arrays are objects whose keys are defined to start from 0 and will be numbers only<br>- Meaning that arrays are restricted objects!!|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**31: DOM Intro**||||>--------------EOL--------------<
||JS Founder||- Brendan Eich|>--------------EOL--------------<
||2 Imp areas||- Object and elements in a page ➯ How a webpage is organised<br>- Events ➯ what happens if we click somewhere on the page|>--------------EOL--------------<
||What is \<!DOCTYPE html\>||- This is just to notify the browser/consumer that this is a html:5 type doc|>--------------EOL--------------<
||Object Hierarchy||- EG Traversing path: windows object ➯ document ➯ html ➯ body ➯ [any node or attribute]<br>- [DOM Visualizer](https://bioub.github.io/dom-visualizer/)<br>- [How HTML page objects are organised](/images/domStructure.png)<br>- Important jargons NODE & ATTRIBUTERS<br>- NODES: head body paragraph<br>- ATTRIBUTES: class, ids etc are attributes<br>- window.document ➯ referes to the webpage that going to be rendered!|>--------------EOL--------------<
||console.log(document)<br>vs<br>console.dir(document)||- log only prints out a toString representation, whereas dir prints out a navigable tree.|>--------------EOL--------------<
||Node Locators/selectors||- [Webpage: CSS vs Xpath](https://www.zenrows.com/blog/xpath-vs-css-selector#conclusion)<br>- [Syntax comparasion CSS Selectors vs Xpath](/notes/md/05-css_selectors-vs-xpath.md) |>--------------EOL--------------<
||XPath|- [LambdaTest Website](https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/)|- [XPATH doc](/notes/md/04-xpath-details.md)|>--------------EOL--------------<
||CSS Selector||- [CSS Selector MD file for details](/notes/md/03-css-selectors.md)|>--------------EOL--------------<
||Main Difference Xpath vs CSS||- XPath is primarily designed for navigating and querying XML documents, and XPath expressions are great for precise data extraction. Instead, CSS selectors are specifically intended for selecting elements in HTML documents, and they excel at selecting elements via CSS but don't work on non-HTML documents like XML.|>--------------EOL--------------<
||Why XPath preferred over CSS||- XPath is preferred over CSS selectors for its precision and advanced capabilities. It excels in granular element selection from highly nested web pages. As opposed to CSS selectors, it also allows for the retrieval of attributes and text nodes. Plus, its bidirectional tree traversal capabilities are crucial for navigating hierarchical layouts. While CSS selectors are ideal for basic tasks, XPath shines in complex scenarios.|>--------------EOL--------------<
||Xpath or css-selectors||- querySelector supports jQuery syntax and supports all CSS Selector selection and hence that is used more in coding in JS.<br>- It is also quite optimized as XPath is method to traverse XML document.<br>- HTML is also a subset of XML doc but css-selectors specialize in HTML hence they are more fast!<br>- For granularity use XPath|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**32: DOM Selector, NodeList & HTMLCollection**||||>--------------EOL--------------<
||Tag:Attribute:Property:Content||- TAG ➯ a or p or div <br>- Attributes ➯ id or class or href or Style or any custom attributes<br>- Properties ➯ display or visibility or background color or borderradius etc<br>- Content ➯ \<p\> Content is here\</p\>|>--------------EOL--------------<
||How to define and use a style|- [Def & Use styles](/images/def-n-use-style.png)|- Notice how we define a style of background color in head tag and used it in body tag!|>--------------EOL--------------<
||How to select/access an element/node|- [Getting a node by ID](/images/getElementById.png)|- document.getElementById('id-001') ➯ This will return the entire HTML Tag<br>- Similarly there are getElementByClassName and so on<br>- But mostly we use querySelector or querySelectorAll|>--------------EOL--------------<
||NodeList<br>vs<br>HTMLCollection||- Node list is like a array but not an array<br>- NodeList use forEach ➯ that is anyways part of its prototype<br>- NodeList to Array conversion ➯ Array.from(document.querySelectorAll('h1');)<br>- HTMLCollection ➯ Although it hold elements like array but it neither has forEach or filter or anything so this one needs to be convreted to Array and then only iteration is possible<br>- HTMLColleciton to Array ➯ Same Array.for(some Nodelist)|>--------------EOL--------------<
||evaluate<br>vs<br>querySelector||- document.evaluate(XPath)<br>- document.querySelector('jQuery or css-selectors') ➯ will give the first occurance of the tag<br>- document.querySelectorAll('jQuery or css-selectors') ➯ will give HTMLCollection, that is similar to JS array but not the same, of all the nodes |>--------------EOL--------------<
||Getting Attributes||- document.getElementById('id').getAttribute('class') returns class value!|>--------------EOL--------------<
||Setting Attributes||- document.getElementById('id').setAttribute('attributeName', 'value')<br>- If the attribute, while setting the attribute, is already present then it gets overridden.<br>- Meaning it is important that we retain the old values and add new values|>--------------EOL--------------<
||Sytle Attribute||- Special attribute that defines how the element should look like<br>- General syntax style="color:blue"<br>- let title = document.getElementById('id-001')<br>- title.style.color = 'white' ➯ This will set the font color to white<br>- title.style.backgroundColor = 'yellow' ➯ This will set the background color to yellow<br>- title.style.display = 'none'; ➯ this will hide the text or the tag meaning it will not be visible on screen |>--------------EOL--------------<
||Ways to extract Content||- let title = document.getElementById('id-001')<br>- title.textContent<br>- title.innerHTML<br>- title.innerText|>--------------EOL--------------<
||innerText<br>vs<br>textContent<br>vs<br>innerHTML||- innerText ➯ shows only visible text, text that is not hidden by any css property<br>- textContent ➯ will display all the text irrespective it is visible or not but will remove any tags<br>- innerHTML ➯ will display content with HTML tags included usually span tag|>--------------EOL--------------<
|||||>--------------EOL--------------<
|**33. Add Element to Existing DOM**||||>--------------EOL--------------<
||Setup||- HTML file will have a script tag that will have code<br>- We will be checking the console for the output|
||Traversing Nodes||- List all childern of parent<br>- Getting First Child <br>- Getting Last Child<br>- Traversing to Siblings|>--------------EOL--------------<
||Adding Elements in Dom||- Step 1 ➯ Defining the properties of the Tag<br>- Adding/Attaching/Appending that tag to the document|>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<
|||||>--------------EOL--------------<



- https://youtu.be/xAvTgCsCHLs?si=3Ux1QJNTHoSUOeQP&t=1036