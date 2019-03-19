// Resuming this project
const linkCategory = document.getElementById("linkCategory"); // gets the DOM element

const submitBtn = document.getElementById("submitButton");

// + BUTTON OPENS ADD LINK FORM AND CANCEL BUTTON CLOSES IT
const addBtn = document.getElementById("addBtn");
const cancel = document.getElementById("cancelButton");
const addLinkPanel = document.getElementById("addLinkPanel");

addBtn.addEventListener('click', (event) => {
    showFormPanel();
});

cancel.addEventListener('click', (event) => {
    hideFormPanel();
});

function showFormPanel() {
    addLinkPanel.classList.remove('hide');
}

function hideFormPanel() {
    addLinkPanel.classList.add('hide');
}

// var has scope of its parent function whereas let has scope of its current container
// for loops are not functions so a var in a for loop can be accessed outside

let linkCategories = []; // an array like a java array
let links = []; // ALL DIFFERENT LINKS IN THE APP

linkCategory.addEventListener('keydown', function(event) {
    if(event.keyCode == 188) { // 188 is keyCode for comma
        event.preventDefault(); // prevents what happens by default which is to show comma when pressed

        linkCategories.push(linkCategory.value); // add category to the array

        linkCategory.value = ''; // empties the input text box

        // display the categories on the screen
        displayCategories();
    }
});

function displayCategories() {
    console.log("Display link categories");
}

// THIS KEYWORD CAN BE CHANGED BY OBJECT LITERAL, CONSTRUCTOR FUNCTION
// ,  MANUAL RESETTING IT, OR A REGULAR CALLBACK FUNCTION IMPLEMENTED IN AN EVENT LISTENER

// THIS IS HOW TO MAKE AN ARROW FUNCTION
submitBtn.addEventListener('click', (event) => { // => DEFINES AN ARROW FUNCTION
    // Stop form from submitting so the page does not open external link
    event.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title, // JAVASCRIPT ASSUMES KEY AND VALUE ARE SAME IF WRITTEN LIKE THIS IN A DICTIONARY
        url,
        categories
    };

    console.log(newLink);

    // ADDING LINK TO THE ARRAY OF LINKS
    links.push(newLink);

    // EMPTYING ALL THE INPUT TEXT BOXES AND THE LINK CATEGORIES SECTION
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];

    displayCategories();

    // HIDING FORM PANEL AFTER SUBMIT PRESSED
    hideFormPanel();
});
