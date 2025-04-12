// Basic for loop structure

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
    console.log(`Outer Loop ${i}-------------------`);
    for (let j = 0; j < 5; j++) {
        console.log(`Outer Loop ${i} Inner Loop ${j}`)   
    }
}

/**
--------------For every iteration of outer loop inner loop runs n times
Outer Lopp 0
Outer Loop 0 Inner Loop 0
Outer Loop 0 Inner Loop 1
Outer Loop 0 Inner Loop 2
Outer Loop 0 Inner Loop 3
Outer Loop 0 Inner Loop 4
Outer Lopp 1
Outer Loop 1 Inner Loop 0
Outer Loop 1 Inner Loop 1
Outer Loop 1 Inner Loop 2
Outer Loop 1 Inner Loop 3
Outer Loop 1 Inner Loop 4
Outer Lopp 2
Outer Loop 2 Inner Loop 0
Outer Loop 2 Inner Loop 1
Outer Loop 2 Inner Loop 2
Outer Loop 2 Inner Loop 3
Outer Loop 2 Inner Loop 4
Outer Lopp 3
Outer Loop 3 Inner Loop 0
Outer Loop 3 Inner Loop 1
Outer Loop 3 Inner Loop 2
Outer Loop 3 Inner Loop 3
Outer Loop 3 Inner Loop 4
Outer Lopp 4
Outer Loop 4 Inner Loop 0
Outer Loop 4 Inner Loop 1
Outer Loop 4 Inner Loop 2
Outer Loop 4 Inner Loop 3
Outer Loop 4 Inner Loop 4
 */