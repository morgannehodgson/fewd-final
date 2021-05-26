

var menuTrigger = document.querySelector("#hamburger-icon");
menuTrigger.addEventListener("click", showMenu, true);
 
var menuItems = document.querySelector("#menu-expand");

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


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => console.log(json))