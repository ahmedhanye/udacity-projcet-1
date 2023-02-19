# udacity-projcet-1
adding navbar
\\first\\
I made a (<link href="script.js" as="script">) a link in the end of the Html body .

\\second\\
1.The first line const navigationList = document.getElementById("navbar__list"); gets the element with the id "navbar__list" and assigns it to the variable "navigationList".
2.The second line const sections = Array.from(document.querySelectorAll("section")); selects all elements with the tag "section" and converts them into an array, assigned to the variable "sections".
3.The "createListItem" function is defined. It loops through each element in the "sections" array.
4.Inside the loop, a new "li" element is created and assigned to the variable "listItem".
5.The innerHTML of the listItem is set to a string containing an anchor tag that links to the current section being looped through. The link's href is set to "#" + the id of the current section. The data-nav attribute is also set to the id of the current section, and the text displayed in the link is the value of the data-nav attribute of the current section.
6.The newly created listItem is then appended to the navigationList.
7.The createListItem function is then called to execute the code in the function.
8.The last part of the code is a function that is executed when the window is scrolled. It selects all elements with the "section" tag and loops through each one.
9.Inside the loop, it checks if the current section being looped through is within a certain range of the top of the viewport. If it is, it adds the class "your-active-class" to the section, if not, it removes the class "your-active-class" from the section.

\\the last code is for making to make navigation look smooth\\
This code selects all elements with the class "menu \_ link" (the navigation links), and adds an
event listener to each one that listens for a click event. When a link is clicked, the default
behavior of the link is prevented and the method is called on the
section that the link is linking to. The _behavior: 'smooth'_ option is passed to the
method to enable smooth scrolling.
\\I changed the color of the navigation bar into yellow\\
