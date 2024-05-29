/*=============== EMAIL JS ===============*/ const contactForm = document.getElementById("contact-form"), contactMessage = document.getElementById("contact-message");
const sendEmail = (e)=>{
    e.preventDefault();
    if (contactForm && contactMessage) // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_i2j2np4", "template_7hyx5fg", "#contact-form", "2IA3SQGDVkX9IW5v3").then(()=>{
        // Show sent message     
        contactMessage.textContent = "Message sent successfully \u2705";
        // Remove message after 5 seconds
        setTimeout(()=>{
            if (contactMessage) contactMessage.textContent = "";
        }, 5000);
        // Clear input fields
        contactForm.reset();
    }).catch(()=>{
        if (contactMessage) contactMessage.textContent = "Message not sent (service error) \u274C";
    });
};
if (contactForm) contactForm.addEventListener("submit", sendEmail);

//# sourceMappingURL=index.586e0f7a.js.map
