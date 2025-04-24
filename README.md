# CodeAlpha_Book_Library
<h3>Introduction</h3>
<p>
    This project consists of a web application that allows users to manage their book collection, including functionalities for user authentication, profile management, and book interaction (like, delete, search). The application is structured into several JavaScript files, each handling specific features and functionalities.
</p>
<h3>File structure:</h3>
<ul>
    <li>
        home-page.js: Manages the display and interaction of books on the home page.
    </li>
    <li>
        index.js: Handles user authentication, including login and account creation.
    </li>
    <li>
        my-profile.js: Manages user profile features such as changing the profile picture and displaying liked books.
    </li>
    <li>
        my-shelf.js: Manages the user's bookshelf, including searching through liked books.
    </li>
</ul>

<h4>Features</h4>
<ol>
    <li>
        User Authentication (index.js)
        <ul>
            <li>
                Account Creation: Users can create accounts with validation for email, username, and password.
            </li>
            <li>
                Login: Users can log in with validation checks for their credentials.
            </li>
            <li>
                Password Visibility: Users can toggle the visibility of their passwords.
            </li>
        </ul>
    </li>
    <li>
        Home Page Book Management (home-page.js)
        <ul>
            <li>
                Display Books: Dynamically displays a list of books from a predefined source.
            </li>
            <li>
                Category Filtering: Allows users to filter books by categories.
            </li>
            <li>
                Search Functionality: Users can search for books by title or author. If no results are found, an error message is displayed in a modal.
            </li>
        </ul>
    </li>
    <li>
        Profile Management (my-profile.js)
        <ul>
            <li>
                Profile Picture Management: Users can change their profile picture.
            </li>
            <li>
                Liked Books: Displays a list of books that the user has liked, which are stored in local storage.
            </li>
        </ul>
    </li>
    <li>
        Bookshelf Management (my-shelf.js)
        <ul>
            <li>
                Liked Books Display: Shows only the books that the user has liked.
            </li>
            <li>
                Like/Unlike Functionality: Users can like or unlike books, with the state being saved in local storage.
            </li>
            <li>
                Search Functionality: Users can search through their liked books by title or author.
            </li>
        </ul>
    </li>
</ol>

<h4>
    Code Structure
</h4>
<div>
    <h4>index.js</h4>
    <img src="./assets/img/index page.png" style="margin: 0 auto;">
</div>
<ul>
    <li>
        DOM Elements: Selects elements for the login and account creation forms.
    </li>
    <li>
        Validation Functions: Validates user input for account creation and login.
    </li>
    <li>
        Event Listeners: Sets up listeners for form interactions and password visibility toggling.
    </li>
</ul>

<div>
    <h4>home-page.js</h4>
    <img src="./assets/img/home page.png" style="margin: 0 auto;">
</div>
<ul>
    <li>
        DOM Elements: Selects necessary elements for displaying books and handling search functionality.
    </li>
    <li>
        Event Listeners: Sets up listeners for category selection and search input.
    </li>
    <li>
        Functions:
        <ul>
            <li>
                displayBooks(source): Renders books on the page.
            </li>
            <li>
                displayCategory(event): Filters books by selected category.
            </li>
            <li>
                search(): Searches for books based on user input.
            </li>
            <li>
                initializeLikedBooks(): Loads liked books from local storage.
            </li>
            <li>
                like(): Handles liking and unliking books.
            </li>
        </ul>
    </li>
</ul>

<div>
    <h4>my-profile.js</h4>
    <img src="./assets/img/profile page.png" style="margin: 0 auto;">
</div>
<ul>
    <li>
        DOM Elements: Selects elements for managing the profile picture and displaying liked books.
    </li>
    <li>
        Event Listeners: Sets up listeners for hover effects on the profile picture and delete buttons.
    </li>
    <li>
        Functions:
        <ul>
            <li>
                displayInput(): Shows input for changing the profile picture.
            </li>
            <li>
                hideInput(): Hides the input after a delay.
            </li>
            <li>
                deleteABook(): Deletes a book from the list.
            </li>
            <li>
                initializeLikedBooks(): Loads liked books from local storage.
            </li>
            <li>
                displayLikedBooks(): Displays liked books in the UI.
            </li>
        </ul>
    </li>
</ul>

<div>
    <h4>my-shelf.js</h4>
    <img src="./assets/img/favorite books page.png" style="margin: 0 auto;">
</div>
<ul>
    <li>
        DOM Elements: Selects elements for displaying all books and handling search functionality.
    </li>
    <li>
        Event Listeners: Sets up listeners for search input and button clicks.
    </li>
    <li>
        Functions:
        <ul>
            <li>
                displayBooks(source): Displays books on the shelf.
            </li>
            <li>
                initializeLikedBooks(): Loads liked books from local storage.
            </li>
            <li>
                search(): Searches for liked books.
            </li>
            <li>
                searchByEnter(event): Triggers search on Enter key press.
            </li>
        </ul>
    </li>
</ul>
    <h2>Contact</h2>
    <p>For any inquiries or feedback, feel free to reach out to me at <a href="https://www.linkedin.com/in/ana-burcovschi-2a0b8b271/">LinkedIn</a>.</p>