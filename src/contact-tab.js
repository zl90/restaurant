
const CONTACT_TITLE = "Contact Sal";
const NAME = "Sal Salverson";
const PROFESSION = "Pizza Chef";
const PHONE = "555-555-5566";
const EMAIL = "sal.salverson@salspizza.com";

function loadContactTab () {

    // Contact
    const content = document.querySelector('.content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const contactHeading = document.createElement('h2');
    contactHeading.classList.add('contact-heading');
    contactHeading.textContent = CONTACT_TITLE;
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    const name = document.createElement('p');
    name.textContent = NAME;
    const profession = document.createElement('p');
    profession.textContent = PROFESSION;
    const phone = document.createElement('p');
    phone.textContent = PHONE;
    const email = document.createElement('p');
    email.textContent = EMAIL;
    contactForm.appendChild(name);
    contactForm.appendChild(profession);
    contactForm.appendChild(phone);
    contactForm.appendChild(email);
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactForm);
    content.appendChild(contactContainer);
}

export default loadContactTab;