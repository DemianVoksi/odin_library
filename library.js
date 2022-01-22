/* ------ PUTTING A BOOK INTO A LIBRARY ------ */


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
  /* Changes the read value from string to boolean */

  if (readValue == "yes") {
    readValue = true;
  } else {
    readValue = false;
  }
}

function toggleReadValue() {
  /* Toggles the read value */

  if (readValue == true) {
    readValue = false;
  } else {
    readValue = true;
  }
}

form.addEventListener('submit', function(e) {
  /* 
  Event listener for the form. Takes in the value of the 
  form input, creates a new Book object with that values 
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


/* ------------ */ 


/* ------ GENERATING A NEW LIST OF BOOKS WITH THE LIBRARY DATA ------ */

function renderEntry(boo, ind) {
  /* Renders an new list item */
  
  let listHolder = document.getElementsByClassName('list-holder');

  let listSmaller = document.createElement('div');
  listSmaller.setAttribute('class', 'list-smaller');
  listHolder.appendChild(listSmaller);

  let bookData = document.createElement('div');
  bookData.setAttribute('class', 'book-data');
  listSmaller.appendChild(bookData);

  let nameSmaller = document.createElement('div');
  nameSmaller.setAttribute('class', 'name-smaller');
  bookData.appendChild(nameSmaller);
  let nameText = document.createTextNode(boo.name);
  nameSmaller.appendChild(nameText);

  let authorSmaller = document.createElement('div');
  authorSmaller.setAttribute('class', 'author-smaller');
  bookData.appendChild(authorSmaller);
  let authorText = document.createTextNode(boo.author);
  authorSmaller.appendChild(authorText);

  let lengthSmaller = document.createElement('div');
  lengthSmaller.setAttribute('class', 'length-smaller');
  bookData.appendChild(lengthSmaller);
  let lengthText = document.createTextNode(boo.length);
  lengthSmaller.appendChild(lengthText);

  let buttons = document.createElement('div');
  buttons.setAttribute('class', 'buttons');
  listSmaller.appendChild(buttons);

  let readSmaller = document.createElement('button');
  readSmaller.setAttribute('class', 'read-smaller');
  buttons.appendChild(readSmaller);

  let deleteSmaller = document.createElement('button');
  deleteSmaller.setAttribute('class', 'delete-smaller');
  buttons.appendChild(deleteSmaller);
}


function renderLibrary() {

  myLibrary.forEach((book, index) => {
    renderEntry(book)
  });
}

/*
To do: 

1) Find out how to use the id for the library. DONE use index
2) Make a function which pulls data from the library and renders it 
   as an item in the list with the appropriate html and css.
3) Make a button which changes read status. DONE
4) Make a button which deletes the entry.
*/