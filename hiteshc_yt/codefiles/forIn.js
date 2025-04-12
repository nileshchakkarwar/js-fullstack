let obj1 = {
    name: 'Nilesh',
    edu : 'Masters',
    add : 'R4E104 Life Republic',
    ph  : 808768001,
    cmp : 'connectwise'
}

for (const key in obj1) {
    console.log(`${key} >>>> ${obj1[key]}`); // obj1[key] only this works!
    // console.log(key, obj1.key);  // obj1.key will not work!
}
/**
    name >>>> Nilesh
    edu >>>> Masters
    add >>>> R4E104 Life Republic
    ph >>>> 808768001
    cmp >>>> connectwise
 */