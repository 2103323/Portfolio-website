/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/ const sections = document.querySelectorAll("section[id]");
const scrollActive = ()=>{
    const scrollDown = window.scrollY;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        if (sectionId) {
            const sectionsClass = document.querySelector(`nav__menu a[href*=${sectionId}]`);
            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) sectionsClass.classList.add("active-link");
                else sectionsClass.classList.remove("active-link");
            }
        }
    });
};
window.addEventListener("scroll", scrollActive);

//# sourceMappingURL=index.39cf6a15.js.map
