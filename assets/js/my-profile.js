// Selecting necessary DOM elements for later use
const chosePicture = document.querySelector("#chose-picture"); // Element for choosing a profile picture
const profileImg = document.querySelector("#profile-img"); // Profile image element
const deleteBook = document.querySelectorAll(".delete-posted-book"); // Buttons to delete posted books
const likedBooksUl = document.querySelector("#list-liked-books"); // Unordered list for displaying liked books

let likedBookIndices = []; // Array to store indices of liked books

// Event listeners for profile image hover effects
profileImg.addEventListener("mouseenter", displayInput); // Show input for changing picture on mouse enter
profileImg.addEventListener("mouseleave", hideInput); // Hide input for changing picture on mouse leave

// Adding click event listeners to each delete button
deleteBook.forEach(btn => {
    btn.addEventListener("click", deleteABook); // Attach delete function to each button
});

// Function to display the input for choosing a picture
function displayInput() {
    chosePicture.classList.remove("d-none"); // Remove the 'd-none' class to show the input
}

// Function to hide the input for choosing a picture after a delay
function hideInput() {
    setTimeout(() => {
        chosePicture.classList.add("d-none"); // Add 'd-none' class to hide the input
    }, 300); // Delay of 300ms before hiding
}

// Function to delete a book from the list
function deleteABook() {
    console.log(this); // Log the button that was clicked
    
    const bookItem = this.closest('.list-group-item'); // Find the closest list item to the clicked button
    if (bookItem) {
        bookItem.remove(); // Remove the book item from the DOM
    }
}

// Function to initialize liked books from localStorage
function initializeLikedBooks() {
    const savedLikedBooks = localStorage.getItem("likedBooks"); // Retrieve liked books from localStorage
    if (savedLikedBooks) {
        likedBookIndices = JSON.parse(savedLikedBooks); // Parse the stored JSON string into an array
    }
}

// Function to display liked books in the UI
function displayLikedBooks() {
    const likedBooks = books.filter(book => likedBookIndices.includes(book.bookIndex.toString())); // Filter liked books based on stored indices
    displayBooks(likedBooks); // Call function to display the filtered liked books
}

// Function to display books in the liked books list
function displayBooks(source) {
    likedBooksUl.innerHTML = ''; // Clear the current list
    source.forEach(book => {
        let listItem = document.createElement("li"); // Create a new list item for each book
        listItem.classList.add("list-group-item"); // Add class for styling
        listItem.innerHTML = `
        <span class="fw-bold">${book.bookTitle}</span> <!-- Display book title -->
        <span>${book.bookAuthor}</span>`; // Display book author
        likedBooksUl.appendChild(listItem); // Append the new list item to the liked books list
    }); 
}

// Initialize and display liked books when the script runs
initializeLikedBooks(); // Load liked books from localStorage
displayLikedBooks(); // Render liked books in the UI