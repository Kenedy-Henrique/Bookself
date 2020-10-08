import bookButtonAnimation from './animations/addBookButtonAnimation';
import addBookFormAnimation from './animations/formAnimation';
import formSubmissionAnimation from './animations/formSubmissionAnimation';
import makeBookDiv from './makeBookDiv';
import makeBookObj from './makeBookObj';
import renderBookDivsFromLocalStorage from './renderBookDivsFromLocalStorage';

let libraryArray = [];
let libraryHtmlConteiner = document.querySelector('.library');
let libraryObj = {};

if(localStorage.getItem('libraryObj')){
  libraryObj = JSON.parse(localStorage.getItem('libraryObj'));
  renderBookDivsFromLocalStorage(libraryHtmlConteiner, libraryObj);
}

function putTheBookInLibraryArray(bookObj){
    if(libraryArray.length === 0){
      libraryArray[libraryArray.length] = bookObj;
    } else libraryArray[libraryArray.length] = bookObj;
    
    libraryObj[bookObj.title] = bookObj;
    localStorage.setItem('libraryObj', JSON.stringify(libraryObj));
}

function updateLibraryArray(libraryArray){
  let objArrayPosition = [libraryArray.length-1];
  makeBookDiv(
    libraryArray[libraryArray.length-1].author,
    libraryArray[libraryArray.length-1].title,
    libraryArray[libraryArray.length-1].numberOfChapters,
    libraryArray[libraryArray.length-1].isRead,
    libraryArray[libraryArray.length-1],
    libraryHtmlConteiner,
    libraryArray,
    objArrayPosition,
    libraryObj);
}

//Add book button animation ------------------------------- Below
let addBookButton = document.querySelector('.addBookButton')
let animationLine = document.querySelector('.animationLine')
let isShow = false;
addBookButton.addEventListener('click', () => {
  bookButtonAnimation(isShow, animationLine);
  isShow = !isShow;
});
//Add book button animation ------------------------------- Above

//Add book form animation ------------------------------- Below
let addBookForm = document.querySelector('.addBookForm');
addBookButton.addEventListener('click', () => {
  addBookFormAnimation(isShow, addBookForm);
})
//Add book form animation ------------------------------- Above

//hide form animation when the submit button is clicked ------------------------------- Below
let submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', () => {
  formSubmissionAnimation(addBookForm, animationLine);
  isShow = !isShow;
});
//hide form animation when the submit button is clicked ------------------------------- Above

//Gets values from form ------------------------------- Below
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let author = addBookForm.author.value;
  let title = addBookForm.title.value;
  let numberOfChapters = addBookForm.numberOfChapters.value;
  let status = addBookForm.status.value;
  let bookObj = makeBookObj(author, title, numberOfChapters, status);
  putTheBookInLibraryArray(bookObj);
  updateLibraryArray(libraryArray);
})
//Gets values from form ------------------------------- Above