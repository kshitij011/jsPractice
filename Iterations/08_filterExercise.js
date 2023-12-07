const books = [
    {title: 'book1', genre: 'Fiction', publication: 1981, edition: 2004},
    {title: 'book2', genre: 'Non-Fiction', publication: 1992, edition: 2008},
    {title: 'book3', genre: 'History', publication: 1999, edition: 2007},
    {title: 'book4', genre: 'Non-Fiction', publication: 1989, edition: 2010},
    {title: 'book5', genre: 'Science', publication: 2009, edition: 2014},
    {title: 'book6', genre: 'Fiction', publication: 1987, edition: 2010},
    {title: 'book7', genre: 'History', publication: 1986, edition: 1996},
    {title: 'book8', genre: 'Science', publication: 2011, edition: 2016},
    {title: 'book9', genre: 'Non-Fiction', publication: 1981, edition: 1989},

];

// console.log(books);

const userBooks = books.filter((bk)=> bk.title === 'book9');    //returns the book with the title book9
console.log(userBooks,'\n');

const oldHistoryBook = books.filter((bk)=> bk.publication < 2000 && bk.genre == 'History');
console.log(oldHistoryBook);
