const allBooks = document.querySelector("#all-books");
const category = document.querySelectorAll(".book-category");


function displayBooks() {
    for (let i = 0; i < books.length; i++) {
        let card = document.createElement("div");
        card.classList.add("col-xxl-2", "col-lg-3", "col-md-4", "col-sm-6");
        
        // Correctly set the innerHTML property
        card.innerHTML = `
        <div class="card bg-light-color border-0">
            <img src="${books[i].bookImg}" class="card-img-top shadow-sm">
            <div class="card-body">
                <h5 class="card-title">
                    ${books[i].bookTitle}
                </h5>
                <p>${books[i].bookAuthor}</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-darker-green"><i class="bi bi-arrow-down-circle"></i></a>
                    <div><i class="bi bi-heart fs-4"></i></div>
                </div>
            </div>
        </div>`;
        
        allBooks.appendChild(card);
    }
}

displayBooks();
displayBooks();
