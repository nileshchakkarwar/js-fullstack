const arr1 = Array.from({length:15},()=> Math.floor(Math.random()*5));
console.log(arr1);

let dict = {};
for (let elm of arr1){
    if(elm in dict){
        dict[elm ] = dict[elm] + 1;
    }else{
        dict[elm] = 1;
    }
}
console.log(dict);