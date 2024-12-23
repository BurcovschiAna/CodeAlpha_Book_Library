// Selecting necessary DOM elements for later use
const allBooks = document.querySelector("#all-books");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const modalMessage = document.querySelector("#modal-message");
let modal = new bootstrap.Modal(document.querySelector('#modal-error'));
let likedBookIndices = [];

// Event listeners for search input and button
searchInput.addEventListener("keydown", searchByEnter);
searchBtn.addEventListener("click", search);

// Function to display books on the shelf
function displayBooks(source) {
    allBooks.innerHTML = ''; // Clear previous content
    let cards = [];
    source.forEach(book => {
        let card = document.createElement("div");
        card.classList.add("col-xxl-2", "col-lg-3", "col-md-4", "col-sm-6", "mx-auto");
        card.setAttribute("data-type", `${book.category}`);
        card.setAttribute("data-index", `${book.bookIndex}`);
        card.innerHTML = `
        <div class="card bg-light-color border-0">
            <div class="img-card">
                <img src="${book.bookImg}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${book.bookTitle}</h5>
                <p>${book.bookAuthor}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-darker-green"><i class="bi bi-arrow-down-circle"></i></a>
                    <div class="liked-book"><i class="bi bi-heart-fill text-danger fs-4"></i></div>
                </div>
            </div>
        </div>`;
        
        allBooks.appendChild(card);
        cards.push(card);
    });

    // Add event listeners to liked book icons
    const likedBooks = document.querySelectorAll(".liked-book");
    likedBooks.forEach(book => {
        book.addEventListener("click", like);
    });
}

// Function to initialize liked books from localStorage
function initializeLikedBooks() {
    const savedLikedBooks = localStorage.getItem("likedBooks");
    if (savedLikedBooks) {
        likedBookIndices = JSON.parse(savedLikedBooks);
    }
}

// Function to display liked books
function displayLikedBooks() {
    const likedBooks = books.filter(book => likedBookIndices.includes(book.bookIndex.toString()));
    displayBooks(likedBooks);
}

// Initializing and displaying liked books
initializeLikedBooks();
displayLikedBooks();

// Function to handle liking a book
function like() {
    const heartIcon = this.firstElementChild; 
    heartIcon.classList.toggle("bi-heart");
    heartIcon.classList.toggle("bi-heart-fill");
    heartIcon.classList.toggle("text-danger");
    const card = this.closest(".card");    
    const bookIndex = card.parentElement.getAttribute("data-index"); 

    // Update likedBookIndices based on the heart icon state
    if (heartIcon.classList.contains("bi-heart-fill")) {
        likedBookIndices.push(bookIndex); 
    } else {
        likedBookIndices = likedBookIndices.filter(index => index !== bookIndex);  
    }
    localStorage.setItem("likedBooks", JSON.stringify(likedBookIndices)); 
    console.log(likedBookIndices);
}

// Function to search for books by title or author
function search() {
    let value = searchInput.value.trim().toLowerCase();
    if (value) {
        const likedBooks = books.filter(book => likedBookIndices.includes(book.bookIndex.toString()));
        let filteredBooks = likedBooks.filter(book => {
            return book.bookTitle.toLowerCase().indexOf(value) === 0 || 
                   book.bookAuthor.toLowerCase().indexOf(value) === 0;
        });

        // Display filtered books or show an error modal
        if (filteredBooks.length > 0) {
            displayBooks(filteredBooks); 
        } else {
            modalMessage.innerHTML = `Sorry, we do not have any liked books with the name or author "${value}."`;
            modal.show(); 
        }
    } else {
        modalMessage.innerHTML = "You didn't enter a book name or author.";
        modal.show(); 
        return;
    }
}

// Function to handle search on Enter key press
function searchByEnter(event) {
    if (event.key === 'Enter') {
        search(); 
    }
}