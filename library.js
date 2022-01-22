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

  //setReadValue()

  myLibrary.push(new Book(bookValue, authorValue, lengthValue, readValue));
  /* Only for practice, delete in final version.
  console.log(myLibrary);*/ 
});


/* ------------ */ 


/* ------ GENERATING A NEW LIST OF BOOKS WITH THE LIBRARY DATA ------ */

let listHolder = document.getElementById('list-holder');


function renderEntry(boo, index) {
  /* Renders an new list item.
  Used by renderLibrary() */
  

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
  buttons.setAttribute('id', 'buttons');
  listSmaller.appendChild(buttons);

  let readSmaller = document.createElement('button');
  readSmaller.setAttribute('class', 'read-smaller');
  buttons.appendChild(readSmaller);

  createDeleteButton(index);

}


let createDeleteButton = function(index) {
  let deleteSmaller = document.createElement('button');
  let buttons = document.getElementById('buttons');

  deleteSmaller.setAttribute('class', 'delete-smaller');
  buttons.appendChild(deleteSmaller);
  deleteSmaller.addEventListener('click', () => {
    e.preventDefault()
    myLibrary.splice(index, 1);
    renderLibrary()
  });
}


function renderLibrary() {
  /* Renders the whole library stored in myLibrary.
  Uses renderEntry() */

  myLibrary.forEach((book, index) => {
    renderEntry(book, index)
  });
}

renderLibrary();
/*
To do: 

1) Find out how to use the id for the library. DONE use index
2) Make a function which pulls data from the library and renders it 
   as an item in the list with the appropriate html and css.
3) Make a button which changes read status. DONE
4) Make a button which deletes the entry.
*/