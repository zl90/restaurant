
const PAGE_TITLE = "Sal's Pizza and Pasta";
const HOME_BUTTON_TEXT = "Home";
const MENU_BUTTON_TEXT = "Menu";
const CONTACT_BUTTON_TEXT = "Contact";

// This loads the initial page.
function loadPage () {

    // Header
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    const heading = document.createElement('h1');
    heading.classList.add('page-title');
    heading.textContent = PAGE_TITLE;
    overlay.appendChild(heading);
    body.appendChild(header);
    header.appendChild(overlay);

    // Navbar
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.textContent = HOME_BUTTON_TEXT;
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.textContent = MENU_BUTTON_TEXT;
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');
    contactButton.textContent = CONTACT_BUTTON_TEXT;
    body.appendChild(nav);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    // Content
    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);
}

export default loadPage;