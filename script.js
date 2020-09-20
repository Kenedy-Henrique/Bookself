
let library = []

function makeBook(author, title, numberOfChapters, isRead){
    this.author = author
    this.title = title
    this.numberOfChapters = numberOfChapters
    this.isRead = isRead
}
makeBook.prototype.chageBookStatus = function() {
  if(this.isRead === 'Reading') {
    this.isRead = 'Completed';
    return this.isRead;
  } else if(this.isRead === 'Completed'){
    this.isRead = 'Not Read Yet';
    return this.isRead;
  } else if(this.isRead === 'Not Read Yet'){
    this.isRead = 'Reading';
    return this.isRead;
  }
}

function putTheBookInBookself(book){
    if(library.length === 0){
        library[library.length] = book;
    } else library[library.length] = book;
}

let bookSelf = document.querySelector('.library')
function createBook(author, title, numberOfChapters, isRead, currentBook){
  //
  let book = document.createElement('div');
  book.classList.add('book');
  bookSelf.appendChild(book);
  let bookData = document.createElement('div');
  bookData.classList.add('bookData');
  book.appendChild(bookData)
  //
  let Author = document.createElement('div');
  Author.classList.add('author');
  Author.innerHTML = author;
  bookData.appendChild(Author);
  let firstDiv = document.createElement('div');
  firstDiv.classList.add('space');
  bookData.appendChild(firstDiv);
  //
  let Title = document.createElement('div');
  Title.classList.add('title');
  Title.innerHTML = title;
  bookData.appendChild(Title);
  let secondDiv = document.createElement('div');
  secondDiv.classList.add('space');
  bookData.appendChild(secondDiv)
  //
  let NumberOfChapters = document.createElement('div');
  NumberOfChapters.classList.add('title');
  NumberOfChapters.innerHTML = numberOfChapters;
  bookData.appendChild(NumberOfChapters);
  let thirdDiv = document.createElement('div');
  thirdDiv.classList.add('space');
  bookData.appendChild(thirdDiv);
  //
  let IsRead = document.createElement('div');
  IsRead.classList.add('title');
  IsRead.innerHTML = isRead;
  bookData.appendChild(IsRead);
  //
  let bookStatusButton = document.createElement('button');
  bookStatusButton.classList.add('bookStatusButton');
  book.appendChild(bookStatusButton);
  //
  bookStatusButton.addEventListener('click', () => {
    IsRead.innerHTML = currentBook.chageBookStatus();
  })
  //
  let deleteBookButton = document.createElement('button');
  deleteBookButton.classList.add('deleteBookButton');
  book.appendChild(deleteBookButton);
  //
  deleteBookButton.addEventListener('click', () => {
    bookSelf.removeChild(book);
    let temporary = [];
    currentBook = temporary;
    currentBook = library[length.length-1];
    library[library.length-1] = temporary;
    library.pop();
  })
}

function updateBookself(library){
  createBook(library[library.length-1].author, library[library.length-1].title, library[library.length-1].numberOfChapters, library[library.length-1].isRead, library[library.length-1]);
}

//Add book button animation ------------------------------- Below
let addBookButton = document.querySelector('.addBookButton')
let animationLine = document.querySelector('.animationLine')
let isShow = false;
addBookButton.addEventListener('click', () => {
  if(!isShow){
    animationLine.animate([
      { transform: 'rotate(0)'},
      { transform: 'rotate(-90deg)'}
    ], {
      duration: 800,
      fill: "forwards"
    })
    isShow = true;
  } else {
    animationLine.animate([
      { transform: 'rotate(-90deg)'},
      { transform: 'rotate(0)'}
    ], {
      duration: 800,
      fill: "forwards"
    })
    isShow = false;
  }
})
//Add book button animation ------------------------------- Above

//Add book form animation ------------------------------- Below
let addBookForm = document.querySelector('.addBookForm');
addBookButton.addEventListener('click', () => {
  if(!isShow){
    addBookForm.animate([
      { transform: 'translateX(-105%)'},
      { transform: 'translateX(0)'}
    ], {
      duration: 800,
      fill: "forwards"
    })
  } else {
    addBookForm.animate([
      { transform: 'translateX(0)'},
      { transform: 'translateX(-105%)'}
    ], {
      duration: 800,
      fill: "forwards"
    })
  }
})
//Add book form animation ------------------------------- Above

//hide form animation when the button submit is clicked ------------------------------- Below
let submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', () => {
  addBookForm.animate([
    { transform: 'translateX(-105%)'},
    { transform: 'translateX(0)'}
  ], {
    duration: 800,
    fill: "forwards"
  })
  animationLine.animate([
    { transform: 'rotate(-90deg)'},
    { transform: 'rotate(0)'}
  ], {
    duration: 800,
    fill: "forwards"
  })
  isShow = false;
})
//hide form animation when the button submit is clicked ------------------------------- Above

//Gets values from form ------------------------------- Below
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let author = addBookForm.author.value;
  let title = addBookForm.title.value;
  let numberOfChapters = addBookForm.numberOfChapters.value;
  let status = addBookForm.status.value;
  let book = new makeBook (author, title, numberOfChapters, status);
  putTheBookInBookself(book);
  updateBookself(library);
})
//Gets values from form ------------------------------- Above