// Named IFFE
(function abc(){
    console.log('DB Connected! in Named IFFE');
})();

// Unnamed IFFE
(()=>{
    console.log('DB Connected in Un-named IFFE');
})();
// Pass param to IFFE
((param1)=>{
    console.log(`${param1}: DB Connected in unnammed IFFE with param passed!`)
})('Nilesh');

// Writing 2 IFFEs
