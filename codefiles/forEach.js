let arr1 = ['python','javascript','c++','dotnet','swift'];

arr1.forEach((item, index, completeArrRef)=>{
    console.log(item+" -- Just adding a string!")
})

console.log(arr1)
/**         output
        python -- Just adding a string!
        javascript -- Just adding a string!
        c++ -- Just adding a string!
        dotnet -- Just adding a string!
        swift -- Just adding a string!
 */

// Return doesn't work with forEach---------------------------------------

let returnValues = arr1.forEach((item)=>{
        return item
    }
)

console.log(returnValues); // undefined

// Tweak way to work with array----------------------------------------
let scores = [10, 20, 30];
scores.forEach((score, index, arr) => {
    arr[index] = score + 5;
});
console.log(scores); // [15, 25, 35]
