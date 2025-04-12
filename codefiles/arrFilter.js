// let arr1 = [1,2,3,4,5,6,7,8,9,10];

// let returnVals = arr1.filter(item=>item<=7);
// console.log(returnVals);

// complex objects fileration using filter method

let listOfBooks = [
    {name: 'B1', genre: 'Fiction', publish: 1994, edition: 2004},
    {name: 'B2', genre: 'History', publish: 1995, edition: 2009},
    {name: 'B3', genre: 'Fiction', publish: 1996, edition: 2009},
    {name: 'B4', genre: 'Fiction', publish: 1997, edition: 2009},
    {name: 'B5', genre: 'History', publish: 1998, edition: 2014},
    {name: 'B6', genre: 'History', publish: 1999, edition: 2020},
    {name: 'B7', genre: 'Science', publish: 2000, edition: 2021},
    {name: 'B8', genre: 'Science', publish: 2001, edition: 2023},
]

let fictionBooks = listOfBooks.filter((obj)=>obj.genre === 'Fiction');
console.log(fictionBooks);
/*
        [
            { name: 'B1', genre: 'Fiction', publish: 1994, edition: 2004 },
            { name: 'B3', genre: 'Fiction', publish: 1996, edition: 2009 },
            { name: 'B4', genre: 'Fiction', publish: 1997, edition: 2009 }
        ]
*/

let edition2009 = listOfBooks.filter(obj=> obj.edition === 2009);
console.log(edition2009);
/**
        [
            { name: 'B2', genre: 'History', publish: 1995, edition: 2009 },
            { name: 'B3', genre: 'Fiction', publish: 1996, edition: 2009 },
            { name: 'B4', genre: 'Fiction', publish: 1997, edition: 2009 }
        ]
 */
