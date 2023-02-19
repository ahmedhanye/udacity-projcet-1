/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

const navigationList = document.getElementById("navbar__list"); //thats where is navbar_list exist.

const Sections = Array.from(document.querySelectorAll("section")); //every section will be added to the html will be in this array

function createListItem() {
  //this function will select every section and add to it an "li" elemnt inside it (the name of the section & link to it)

  for (sec of Sections) {
    listItem = document.createElement("li");
    listItem.innerHTML = `
        <a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">
          ${sec.dataset.nav}
        </a>
`;
    navigationList.appendChild(listItem); //this code will add the every listItem to the nav using appendchild method.
  }
}
createListItem();
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    //this is a "scroll"event.
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

const navLinks = document.querySelectorAll(".menu__link"); // this makes the scroll goes smoothly.

navLinks.forEach((link) => {
  link.addEventListener("click", (toSec) => {
    toSec.preventDefault();
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  });
});
