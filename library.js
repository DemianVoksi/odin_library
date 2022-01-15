let myLibrary = [
  
];

function Book(name, author, length, read) {
  this.name = name
  this.author = author
  this.length = length
  this.read = read
}





// function addBook() {
//   let gotm = new Book('Gardens of the Moon', 'Steven Erikson', 712, true);
//   myLibrary.push(gotm);
// }

// addBook()

// myLibrary.push(new Book('Deadhouse Gates', 'Steven Erikson', 900, true));

// console.log(myLibrary);

let form = document.querySelector("#form");
let book = document.querySelector("#book");
let author = document.querySelector("#author");
let length = document.querySelector("#length");
let read = document.querySelector("#read");


form.addEventListener('submit', function(e) {
  e.preventDefault()

  let bookValue = book.value;
  let authorValue = author.value;
  let lengthValue = length.value;
  let readValue = read.value;

  console.log(bookValue);
  console.log(authorValue);
  console.log(lengthValue);
  console.log(readValue);

  myLibrary.push(new Book(bookValue, authorValue, lengthValue, readValue));
  console.log(myLibrary);
});