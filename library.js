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


function setReadValue() {
  if (readValue == "yes") {
    readValue = true;
  } else {
    readValue = false;
  }
}

function changeReadValue() {
  if (readValue == true) {
    readValue = false;
  } else {
    readValue = true;
  }
}

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

  setReadValue()
  /* Only for practice, delete in final version.
  console.log(bookValue);
  console.log(authorValue);
  console.log(lengthValue);
  console.log(readValue); */

  myLibrary.push(new Book(bookValue, authorValue, lengthValue, readValue));
  /* Only for practice, delete in final version.
  console.log(myLibrary);*/ 
});

/*
To do: 

1) Find out how to use the id for the library. DONE remove parent element?
1.1) Check out localStorage for Javascript
2) Make a function which pulls data from the library and renders it 
   as an item in the list with the appropriate html and css.
3) Make a button which changes read status. DONE
4) Make a button which deletes the entry.
*/