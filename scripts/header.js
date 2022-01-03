let isMenuVisible = false
const MENU = document.getElementById("menu"); //The div which contains links 
const NAVBAR = document.querySelector("nav"); //The navbar at the top of the page
const MOBILE_BUTTON = document.getElementById("mobile-menu-icon"); //The menu icon

MOBILE_BUTTON.addEventListener("click", () => {
    
    if(isMenuVisible) {
        isMenuVisible = false;
        NAVBAR.classList.remove("more-space");

        setTimeout(() => {
            MENU.style.display = "none";
        }, 1000); //Use timemout to be synced with css animation

    } else {
        isMenuVisible = true;
        NAVBAR.classList.add("more-space");
        MENU.style.display = "flex";
    }

})
