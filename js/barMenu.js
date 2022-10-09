const toggle = document.querySelector (".navtoggle");
const menu = document.querySelector (".navmenu");
toggle.addEventListener ("click", () => {
    menu.classList.toggle ("navmenuvisible");
    if (menu.classList.contains("navmenuvisible")) {
        toggle.setAttribute("aria-label", "close menu");
    } 
    else {
        toggle.setAttribute("aria-label", "open menu");
    }
}); 