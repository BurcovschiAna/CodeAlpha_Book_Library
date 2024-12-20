const chosePicture = document.querySelector("#chose-picture");
const profileImg = document.querySelector("#profile-img");
const deleteBook = document.querySelectorAll(".delete-posted-book");



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