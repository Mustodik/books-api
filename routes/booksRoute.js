const {Router} = require("express")
const auth= require("../middlewares/books.auth")
const {getBooks, deleteBook} = require("../controllers/booksController")


const router =Router();

router.route("/books").get(getBooks)
router.delete("/books/title", deleteBook)

router.delete("/books/ find/:title", deleteBook)

module.exports =router