let listOfBooks = [
    {name: 'B1', genre: 'Fiction', publish: 1994, edition: 2004},
    {name: 'B2', genre: 'History', publish: 1995, edition: 2009},
    {name: 'B3', genre: 'Fiction', publish: 1996, edition: 2009},
    {name: 'B4', genre: 'Fiction', publish: 1997, edition: 2009},
    {name: 'B5', genre: 'History', publish: 1998, edition: 2014},
    {name: 'B6', genre: 'History', publish: 1999, edition: 2020},
    {name: 'B7', genre: 'Science', publish: 2000, edition: 2021},
    {name: 'B8', genre: 'Science', publish: 2001, edition: 2023},
];

// get the history books published after 1998;
// normal method
let op = listOfBooks.filter(bkItem=> bkItem.publish>1998 && bkItem.genre === 'History');
console.log(op);//[ { name: 'B6', genre: 'History', publish: 1999, edition: 2020 } ]

// using chaining
let op2 = listOfBooks.filter(bkItem=>bkItem.publish>1998)
                     .filter(bkItem=>bkItem.genre === 'History');

console.log(op2); //[ { name: 'B6', genre: 'History', publish: 1999, edition: 2020 } ]

