
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var menuTriggers = document.querySelector("#menu-triggers");
menuTriggers.addEventListener("click", showMenu, true);
 
var menuItems = document.querySelector("#menu-items");

var exit = document.querySelector("#x-close");
exit.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    menuItems.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    menuItems.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
}