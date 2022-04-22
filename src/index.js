import './style.css';
import loadPage from './load-page';
import loadContactTab from './contact-tab';
import loadHomeTab from './home-tab';
import loadMenuTab from './menu-tab';

const PageController = (function () {

    let content = null;

    const initialise = () => {
        loadPage();
        setEventListeners();
        content = document.querySelector('.content');
        appendHomeTab();
    };

    const setEventListeners = () => {
        document.querySelector('.home-button').addEventListener('click', appendHomeTab);
        document.querySelector('.menu-button').addEventListener('click', appendMenuTab);
        document.querySelector('.contact-button').addEventListener('click', appendContactTab);
    };

    const appendHomeTab = () => {
        clearContent();
        loadHomeTab();
    };

    const appendMenuTab = () => {
        clearContent();
        loadMenuTab();
    };

    const appendContactTab = () => {
        clearContent();
        loadContactTab();
    };

    const clearContent = () => { 
        while (content.lastChild) {
            content.removeChild(content.lastChild);
        }
    };

    return { initialise };
})();

PageController.initialise();