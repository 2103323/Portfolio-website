/*=============== SHOW SCROLL UP ===============*/ const scrollUp = ()=>{
    const scrollUpElement = document.getElementById("scroll-up");
    if (scrollUpElement) window.scrollY >= 350 ? scrollUpElement.classList.add("show-scroll") : scrollUpElement.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

//# sourceMappingURL=index.274ae24c.js.map
