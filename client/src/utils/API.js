import axios from "axios";

export default {

    //calls the api
    getGoogleBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    //gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },

    //gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    // deletes book with a specific ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    //save book to database.
    saveBook: function(savedBooks) {
        return axios.post("/api/books", savedBooks);
    }
}