window.onload = function() {
    initPage();
    console.log( "» document ready :)" );
};

/* VARS & CONST*/
const logoHeader = document.querySelector(".logo-header");
const socialIconsLinks = document.querySelector(".social-icons-links");
const socialIconsButton = document.querySelector(".social-icons__button");

const resumeContent = document.querySelector(".resume");
const portfolioContent = document.querySelector(".portfolio");
const contactContent = document.querySelector(".contact");

/* FUNCTIONS */
function initPage(){
    initVisibily();
    initButtons();
}

function initVisibily(){
    logoHeader.style.visibility = "visible";
    socialIconsLinks.style.visibility = "visible";
    /*resumeContent.style.display = "flex";
    portfolioContent.style.display = "flex";
    contactContent.style.display = "flex";*/
}

function initButtons(){
    socialIconsButton.addEventListener("click", function(){
        console.log("Ascen");
    });
}