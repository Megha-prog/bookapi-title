// this file is for routing request


const bookController = require('../controllers/book.controller');

module.exports = function (app) {
    // route for creating new book
    app.post('/store_book/api/v1/books/', bookController.addBook);

    // route to get all book
    app.get('/store_book/api/v1/books/', bookController.getAllBooks);






    //route to get by book title

    app.get('/store_book/api/v1/books?title=', bookController.findAll);

    //get publisher

    app.get('/store_book/api/v1/books?publisher=', bookController.findAll);


    
    //Route for the GET request to fetch a book based on the id
    app.get("/store_book/api/v1/books/:id", bookController.GetBookById);




    // //Route for the PUT request to update a book based on the id
    app.put("/store_book/api/v1/books/:id", bookController.UpdateBookById);

    // //Route for the DELETE request to delete a book based on the id
    app.delete("/store_book/api/v1/books/:id", bookController.DeleteBookById);

    

} 