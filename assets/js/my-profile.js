const chosePicture = document.querySelector("#chose-picture");
const profileImg = document.querySelector("#profile-img");
const deleteBook = document.querySelectorAll(".delete-posted-book");
const likedBooksUl = document.querySelector("#list-liked-books")

let likedBookIndices = [];

profileImg.addEventListener("mouseenter", displayInput);
profileImg.addEventListener("mouseleave", hideInput);

deleteBook.forEach(btn => {
    btn.addEventListener("click", deleteABook);
})

function displayInput(){
    chosePicture.classList.remove("d-none");
}

function hideInput(){
    setTimeout(() => {
        chosePicture.classList.add("d-none"); 
    }, 300);
}

function deleteABook() {
    console.log(this);
    
    const bookItem = this.closest('.list-group-item'); // Adjust '.book-item' to your actual parent class
    if (bookItem) {
        bookItem.remove(); // Remove the parent element
    }
}

function initializeLikedBooks() {
    const savedLikedBooks = localStorage.getItem("likedBooks");
    if (savedLikedBooks) {
        likedBookIndices = JSON.parse(savedLikedBooks);
    }
}
function displayLikedBooks() {
    const likedBooks = books.filter(book => likedBookIndices.includes(book.bookIndex.toString()));
    displayBooks(likedBooks);
}

function displayBooks(source) {
    likedBooksUl.innerHTML = '';
    source.forEach(book => {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
        <span class="fw-bold">${book.bookTitle}</span>
        <span>${book.bookAuthor}</span>`;
        likedBooksUl.appendChild(listItem);
    }); 
}

initializeLikedBooks();
displayLikedBooks();