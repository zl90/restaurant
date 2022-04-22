const TESTIMONIAL_TEXT = "Sal makes the best pizza! The atmosphere and customer service make you feel like you are sitting in the middle of New York, eating authentic New York pizza! This is exactly the kind of place that I like to return to again and again.";
const TESTIMONIAL_CITE = "Frederick";
const HOURS_HEADING = "Hours";
const HOURS = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm"
];
const LOCATION_TITLE = "Location";
const LOCATION_TEXT = "123 New York Drive, Forestville, Maine";


function loadHomeTab () {
    
    // Testimonial
    const content = document.querySelector('.content');
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial-container');
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = TESTIMONIAL_TEXT;
    blockquote.classList.add('testimonial-text');
    const cite = document.createElement('cite');
    cite.textContent = TESTIMONIAL_CITE;
    cite.classList.add('testimonial-cite');
    testimonial.appendChild(blockquote);
    testimonial.appendChild(cite);
    content.appendChild(testimonial);

    // Hours
    const hours = document.createElement('div');
    hours.classList.add('hours-container');
    const title = document.createElement('h2');
    title.classList.add('hours-title');
    title.textContent = HOURS_HEADING;
    const container = document.createElement('div');
    container.classList.add('hours-text-container');
    for (let i = 0; i < HOURS.length; i++) {
        let p = document.createElement('p');
        p.textContent = HOURS[i];
        container.appendChild(p);
    }
    hours.appendChild(title);
    hours.appendChild(container);
    content.appendChild(hours);

    // Location
    const location = document.createElement('div');
    location.classList.add('location-container');
    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('location-title');
    locationTitle.textContent = LOCATION_TITLE;
    const locationText = document.createElement('p');
    locationText.classList.add('location-text');
    locationText.textContent = LOCATION_TEXT;
    location.appendChild(locationTitle);
    location.appendChild(locationText);
    content.appendChild(location);
}

export default loadHomeTab;