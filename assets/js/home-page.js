const allBooks = document.querySelector("#all-books");
const category = document.querySelectorAll(".book-category");
const allCategories = document.querySelector("#all-categories");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const modalMessage = document.querySelector("#modal-message");

var modal = new bootstrap.Modal(document.querySelector('#modal-error'));
let cards = [];
let likedBookIndices = [];

category.forEach(category => {
    category.addEventListener("click", displayCategory);
})
allCategories.addEventListener("click", function() {
    displayBooks(books); // Call displayBooks when allCategories is clicked
});
searchInput.addEventListener("keydown", searchByEnter);
searchBtn.addEventListener("click", search);




function displayBooks(source) {
    allBooks.innerHTML = '';
    cards = [];
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
                <h5 class="card-title">
                    ${book.bookTitle}
                </h5>
                <p>${book.bookAuthor}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-darker-green"><i class="bi bi-arrow-down-circle"></i></a>
                    <div class="liked-book"><i class="bi bi-heart fs-4"></i></div>
                </div>
            </div>
          </div>`;
        
        allBooks.appendChild(card);
        cards.push(card);
    }); 
    const likedBooks = document.querySelectorAll(".liked-book");
    likedBooks.forEach(book =>{
    book.addEventListener("click", like)
}) 
initializeLikedBooks();
}
displayBooks(books);
function displayCategory(event){
    
    for(let i = 0; i < cards.length; i++){
        cards[i].classList.add("d-none")
    }
    const selectedCategory = event.target.innerHTML.trim();

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("data-type") === selectedCategory) {
            cards[i].classList.remove("d-none");
        }
    }
}


function search() {
    let value = searchInput.value.trim().toLowerCase();
    if (value) {
        let filteredBooks = books.filter(function(book) {
            return book.bookTitle.toLowerCase().indexOf(value) === 0 || 
                   book.bookAuthor.toLowerCase().indexOf(value) === 0;
        });
        if (filteredBooks.length > 0) {
            displayBooks(filteredBooks); 
        } else {
            modalMessage.innerHTML = `Sorry we do not have a books with name or author "${value}."`
            modal.show(); 
        }
    } else {
        modalMessage.innerHTML = "You didn't enter a book name or author."
        modal.show(); 
    }
}

function searchByEnter(event) {
    if (event.key === 'Enter') {
        search(); 
    }
}

function initializeLikedBooks() {
    const savedLikedBooks = localStorage.getItem("likedBooks");
    if (savedLikedBooks) {
        likedBookIndices = JSON.parse(savedLikedBooks);
        likedBookIndices.forEach(index => {
            const card = document.querySelector(`[data-index="${index}"]`);
            if (card) {
                const heartIcon = card.querySelector(".liked-book i");
                heartIcon.classList.add("bi-heart-fill", "text-danger");
                heartIcon.classList.remove("bi-heart");
            }
        });
    }
}


function like() {
    const heartIcon = this.firstElementChild; 
    heartIcon.classList.toggle("bi-heart");
    heartIcon.classList.toggle("bi-heart-fill");
    heartIcon.classList.toggle("text-danger");
    const card = this.closest(".card");    
    const bookIndex = card.parentElement.getAttribute("data-index"); 
    if (heartIcon.classList.contains("bi-heart-fill")) {
        likedBookIndices.push(bookIndex); 
    } else {
        likedBookIndices = likedBookIndices.filter(index => index !== bookIndex);  
    }
    localStorage.setItem("likedBooks", JSON.stringify(likedBookIndices)); 
    console.log(likedBookIndices);
}
initializeLikedBooks();