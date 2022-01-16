// Library variable
let myLibrary = [
  {
    name: "Gardens of the Moon",
    author: "Steven Erikson",
    length: 712,
    read: "yes"
  }
];


// Book object
function Book(name, author, length, read) {
  this.name = name
  this.author = author
  this.length = length
  this.read = read
}

// Query selectors 
let form = document.querySelector("#form");
let book = document.querySelector("#book");
let author = document.querySelector("#author");
let length = document.querySelector("#length");
let read = document.querySelector("#read");


form.addEventListener('submit', function(e) {
  /* 
  Event listener for the form. 
  Takes in the value of the form input,
  creates a new Book object with that values
  and pushes the Book to the myLibrary array.
  */

  e.preventDefault()

  let bookValue = book.value;
  let authorValue = author.value;
  let lengthValue = length.value;
  let readValue = read.value;

  /* Only for practice, delete in final version. */
  console.log(bookValue);
  console.log(authorValue);
  console.log(lengthValue);
  console.log(readValue);

  myLibrary.push(new Book(bookValue, authorValue, lengthValue, readValue));
  console.log(myLibrary); //Only for practice, delete in final version.
});