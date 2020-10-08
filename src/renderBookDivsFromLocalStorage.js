function renderBookDivsFromLocalStorage(libraryHtmlConteiner, /*libraryArray, objArrayPosition, */libraryObj){
    for(let key in libraryObj){
        //
        let book = document.createElement('div');
        book.classList.add('book');
        libraryHtmlConteiner.appendChild(book);
        let bookData = document.createElement('div');
        bookData.classList.add('bookData');
        book.appendChild(bookData)
        //
        let Author = document.createElement('div');
        Author.classList.add('author');
        Author.innerHTML = libraryObj[key].author;
        bookData.appendChild(Author);
        let firstDiv = document.createElement('div');
        firstDiv.classList.add('space');
        bookData.appendChild(firstDiv);
        //
        let Title = document.createElement('div');
        Title.classList.add('title');
        Title.innerHTML = libraryObj[key].title;
        bookData.appendChild(Title);
        let secondDiv = document.createElement('div');
        secondDiv.classList.add('space');
        bookData.appendChild(secondDiv)
        //
        let NumberOfChapters = document.createElement('div');
        NumberOfChapters.classList.add('title');
        NumberOfChapters.innerHTML = libraryObj[key].numberOfChapters;
        bookData.appendChild(NumberOfChapters);
        let thirdDiv = document.createElement('div');
        thirdDiv.classList.add('space');
        bookData.appendChild(thirdDiv);
        //
        let IsRead = document.createElement('div');
        IsRead.classList.add('title');
        IsRead.innerHTML = libraryObj[key].isRead;
        bookData.appendChild(IsRead);
        //
        let bookStatusButton = document.createElement('button');
        bookStatusButton.classList.add('bookStatusButton');
        book.appendChild(bookStatusButton);
        //
        bookStatusButton.addEventListener('click', () => {
            IsRead.innerHTML = libraryObj[key].changeBookStatus();
        })
        //
        let deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add('deleteBookButton');
        book.appendChild(deleteBookButton);
        //
        deleteBookButton.addEventListener('click', () => {
            libraryHtmlConteiner.removeChild(book);
            
            delete libraryObj[key];
            localStorage.setItem('libraryObj', JSON.stringify(libraryObj));
        })
    }
}

export default renderBookDivsFromLocalStorage;