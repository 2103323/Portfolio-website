/*=============== REMOVE MENU MOBILE ===============*/ const navLink = document.querySelectorAll(".nav__link");
const linkAction = ()=>{
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("show-menu");
};
navLink.forEach((n)=>n.addEventListener("click", linkAction));

//# sourceMappingURL=index.ea2e0567.js.map
