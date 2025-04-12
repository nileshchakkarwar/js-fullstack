let mapObj = new Map();

mapObj.set('a', 1);
mapObj.set('b', 2);
mapObj.set('c', 3);
mapObj.set('d', 4);
mapObj.set('e', 5);

for (const elm of mapObj) {
    console.log(elm)
}
/** we get a array of key and values
    [ 'a', 1 ]
    [ 'b', 2 ]
    [ 'c', 3 ]
    [ 'd', 4 ]
    [ 'e', 5 ]
 */

// using destructuring of array

for (const [key, value] of mapObj){
    console.log(key, value)
}