/*=============== ADD BLUR HEADER ===============*/ const blurHeader = ()=>{
    const header = document.getElementById("header");
    let blurElement = document.getElementById("blurElement");
    if (window.scrollY >= 50) {
        if (!blurElement) {
            blurElement = document.createElement("div");
            blurElement.id = "blurElement";
            blurElement.style.content = "";
            blurElement.style.position = "absolute";
            blurElement.style.width = "1000%";
            blurElement.style.height = "100%";
            blurElement.style.backgroundColor = "hsla(var(--hue), 70%, 4%, .2)";
            blurElement.style.backdropFilter = "blur(16px)";
            blurElement.style.webkitBackdropFilter = "blur(16px)";
            blurElement.style.top = "0";
            blurElement.style.left = "0";
            blurElement.style.zIndex = "-1";
            header.appendChild(blurElement);
        }
    } else if (blurElement) header.removeChild(blurElement);
};
window.addEventListener("scroll", blurHeader);

//# sourceMappingURL=index.134a5235.js.map
