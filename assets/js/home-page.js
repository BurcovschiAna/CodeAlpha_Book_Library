// Selecting necessary DOM elements for later use
const allBooks = document.querySelector("#all-books");
const category = document.querySelectorAll(".book-category");
const allCategories = document.querySelector("#all-categories");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const modalMessage = document.querySelector("#modal-message");

// Initialize Bootstrap modal for error messages
let modal = new bootstrap.Modal(document.querySelector('#modal-error'));
let cards = [];
let likedBookIndices = [];

// Event listeners for category selection
category.forEach(category => {
    category.addEventListener("click", displayCategory);
});

// Event listener for displaying all categories
allCategories.addEventListener("click", function() {
    displayBooks(books); // Call displayBooks when allCategories is clicked
});

// Event listener for search functionality
searchInput.addEventListener("keydown", searchByEnter);
searchBtn.addEventListener("click", search);

// Function to display books on the page
function displayBooks(source) {
    allBooks.innerHTML = ''; // Clear previous book listings
    cards = []; // Reset cards array
    source.forEach(book => {
        let card = document.createElement("div"); // Create a new card for each book
        card.classList.add("col-xxl-2", "col-lg-3", "col-md-4", "col-sm-6", "mx-auto");
        card.setAttribute("data-type", `${book.category}`);
        card.setAttribute("data-index", `${book.bookIndex}`);
        card.innerHTML = `
        <div class="card bg-light-color border-0">
            <div class="img-card">
                <img src="${book.bookImg}" alt="${book.bookTitle}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${book.bookTitle}</h5>
                <p>${book.bookAuthor}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-darker-green"><i class="bi bi-arrow-down-circle"></i></a>
                    <div class="liked-book"><i class="bi bi-heart fs-4"></i></div>
                </div>
            </div>
        </div>`;
        
        allBooks.appendChild(card); // Append the card to the allBooks container
        cards.push(card); // Add card to the cards array
    }); 

    // Add event listeners to liked book icons
    const likedBooks = document.querySelectorAll(".liked-book");
    likedBooks.forEach(book => {
        book.addEventListener("click", like);
    }); 
    initializeLikedBooks(); // Initialize liked books from localStorage
}

// Initial display of all books
displayBooks(books);

// Function to filter and display books by selected category
function displayCategory(event) {
    const selectedCategory = event.target.innerHTML.trim();
    const filteredBooks = books.filter(book => book.category === selectedCategory);
    displayBooks(filteredBooks); 
}

// Function to handle search functionality
function search() {
    let value = searchInput.value.trim().toLowerCase(); // Get the search input value
    if (value) {
        // Filter books based on title or author
        let filteredBooks = books.filter(function(book) {
            return book.bookTitle.toLowerCase().indexOf(value) === 0 || 
                   book.bookAuthor.toLowerCase().indexOf(value) === 0;
        });
        if (filteredBooks.length > 0) {
            displayBooks(filteredBooks); // Display filtered books
        } else {
            modalMessage.innerHTML = `Sorry we do not have a book with the name or author "${value}."`;
            modal.show(); // Show modal if no books found
        }
    } else {
        modalMessage.innerHTML = "You didn't enter a book name or author.";
        modal.show(); // Show modal if input is empty
        return;
    }
}

// Event listener for search on Enter key press
function searchByEnter(event) {
    if (event.key === 'Enter') {
        search(); // Call search function
    } else {
        return;
    }
}

// Function to initialize liked books from localStorage
function initializeLikedBooks() {
    const savedLikedBooks = localStorage.getItem("likedBooks");
    if (savedLikedBooks) {
        likedBookIndices = JSON.parse(savedLikedBooks); // Parse saved liked book indices
        likedBookIndices.forEach(index => {
            const card = document.querySelector(`[data-index="${index}"]`);
            if (card) {
                const heartIcon = card.querySelector(".liked-book i");
                heartIcon.classList.add("bi-heart-fill", "text-danger"); // Mark as liked
                heartIcon.classList.remove("bi-heart");
            }
        });
    }
}

// Function to handle liking/unliking a book
function like() {
    const heartIcon = this.firstElementChild; // Select heart icon
    heartIcon.classList.toggle("bi-heart"); // Toggle heart icon state
    heartIcon.classList.toggle("bi-heart-fill");
    heartIcon.classList.toggle("text-danger");
    const card = this.closest(".card"); // Get the card element
    const bookIndex = card.parentElement.getAttribute("data-index"); // Get book index
    if (heartIcon.classList.contains("bi-heart-fill")) {
        likedBookIndices.push(bookIndex); // Add to liked books
    } else {
        likedBookIndices = likedBookIndices.filter(index => index !== bookIndex); // Remove from liked books
    }
    localStorage.setItem("likedBooks", JSON.stringify(likedBookIndices)); // Save liked books to localStorage
}