const coding = ["js","java","python","cpp"]

// Does for each return any value ?
const values = coding.forEach(  (item) => {
    // console.log(item);
//  return item;
})
// so forEach doesnt return value
// console.log(values) // it return undefined.


// so js developer knows that there maybe some program which will need to return value
const myNums = [1,2,3,4,5,10,6,7,8,9] ;

//Syntax
//filter(  (callback function) => condition ) // those who satisfy condition that will be returned ;

// const newNum = myNums.filter(  (num) => num > 4 ) // we have not used scope  so no need to use return 
// console.log(newNum)

// const newNum = myNums.filter(  (num) => {
//     num > 4
// })
// console.log(newNum); // so it return empty string , if we not use return keyword when we use scope ({scope})


// const newNum = myNums.filter(  (num) => {
//     return num > 4 // so we used return and it printed value
// })
// console.log(newNum);


// When we need to do same thing with forEach

// const newNums = [];
// myNums.forEach(  ( num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title : 'Book One', genre: 'Fiction', publish: 1981,edition: 2004
    },
    {
        title : 'Book Two', genre: 'History', publish: 1981,edition: 2004
    },
    {
        title : 'Book Three', genre: 'Fiction', publish: 1981,edition: 2004
    },
    {
        title : 'Book Four ', genre: 'Non-Fiction', publish: 1982,edition: 2005
    },
    {
        title : 'Book Five', genre: 'Science', publish: 2005,edition: 2006
    },
    {
        title : 'Book Six', genre: 'Sci-Fi', publish: 2002,edition: 2007
    },
    {
        title : 'Book Seven', genre: 'Non-Fiction', publish: 1985,edition: 2008
    },
    {
        title : 'Book Eight', genre: 'History', publish: 2000,edition: 2009
    }
];

//show book whose genre is history
// const userBooks = books.filter( (bk ) =>   bk.genre === 'History')

// console.log(userBooks);

// when const is used for variable then we cant overwrite it .

// we used scope here so we used return
// const userBooks = books.filter( (bk) => {return bk.publish >= 2000})
// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History' // using && operator
})

console.log(userBooks)

