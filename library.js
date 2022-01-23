/* ------ PUTTING A BOOK INTO A LIBRARY ------ */


// Library variable
let myLibrary = [
  {
    name: "Gardens of the Moon",
    author: "Steven Erikson",
    length: 712,
    read: "yes"
  },
  {
    name: "The Hobbit",
    author: "JRR Tolkien",
    length: 310,
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
let listHolder = document.querySelector('.list-holder'); // class selector doesn't work but id an query do


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
  form input, creates a new Book object with that values, 
  pushes the Book to the myLibrary array and renders it.
  */

  e.preventDefault()

  let bookValue = book.value;
  let authorValue = author.value;
  let lengthValue = length.value;
  let readValue = read.value;

  //setReadValue()

  myLibrary.push(new Book(bookValue, authorValue, lengthValue, readValue));
  /* Only for practice, delete in final version. */
  console.log(myLibrary);

  renderEntry(myLibrary.at(-1), myLibrary.indexOf(myLibrary.at(-1)));
});


/* ------------ */ 

function removeAllChildren() {
  /* Removes all child nodes from the main list container. 
  Used by delete button event listener and renderLibrary(). */

  let listHolder = document.querySelector('.list-holder');
  while (listHolder.firstChild) {
    listHolder.removeChild(listHolder.firstChild);
  }
};


// function createDeleteButton(index) {
//   /* Creates the delete button. Used by renderEntry() */

//   let deleteSmaller = document.createElement('button');
//   let buttons = document.querySelector('.buttons');
//   deleteSmaller.setAttribute('class', 'delete-smaller');
//   buttons.appendChild(deleteSmaller);

//   let del = document.querySelector('.delete-smaller');
//   del.innerHTML = 'Delete book';

//   deleteSmaller.addEventListener('click', (e) => {
//     e.preventDefault()
//     myLibrary.splice(index, 1);
//     removeAllChildren();
//     renderLibrary();
// });
// }

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
  listSmaller.appendChild(buttons);

  let readSmaller = document.createElement('button');
  readSmaller.setAttribute('class', 'read-smaller');
  buttons.appendChild(readSmaller);
  readSmaller.innerHTML = setReadText(boo.read);
  // let btn = document.querySelector('.read-smaller');
  // btn.innerHTML = setReadText(boo.read);

  readSmaller.addEventListener('click', function(e) {
    e.preventDefault()
    //let btn = document.querySelector('.read-smaller');

    if (readSmaller.innerHTML == "Read") {
    readSmaller.innerHTML = "Unread";
  } else {
    readSmaller.innerHTML = "Read";
  }
  });

//  createDeleteButton(index);

  let deleteSmaller = document.createElement('button');
  deleteSmaller.setAttribute('class', 'delete-smaller');
  buttons.appendChild(deleteSmaller);
  deleteSmaller.innerHTML = 'Delete book';

  deleteSmaller.addEventListener('click', (e) => {
    e.preventDefault()
    myLibrary.splice(index, 1);
    removeAllChildren();
    renderLibrary();
});
}

function renderLibrary() {
  /* Renders the whole library stored in myLibrary.
  Uses renderEntry() */

  removeAllChildren();

  myLibrary.forEach((book, index) => {
    renderEntry(book, index)
  });
}

window.onload = renderLibrary();

function setReadText(readValue) {
  /* Changes the read value from string to boolean */
  let value;

  if (readValue == "yes") {
    value = "Read";
  } else {
    value = "Unread";
  }
  return value;
}
