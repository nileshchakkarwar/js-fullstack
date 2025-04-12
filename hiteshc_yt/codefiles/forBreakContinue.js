for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    // console.log(`${i}`)
}
/*
0
1
2
3
4
Since it finds 5 it breaks
*/

for (let i = 1; i < 10; i++) {
    if (i == 5) continue;
    console.log(`${i}`)
}
/**
1
2
3
4
       5 is skipped!!!
6
7
8
9
 */