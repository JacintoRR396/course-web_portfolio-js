window.onload = function() {
    initPage();
    console.log( " » document ready :)" );
};

/* VARS & CONST*/
const logoHeader = document.querySelector(".logo-header");
const socialIconsLinks = document.querySelector(".social-icons-links");
const socialIconsButton = document.querySelector(".social-icons__button");

const profileButton = document.querySelectorAll(".menu-main_tab-link")[0];

const profileContent = document.querySelector(".profile");
const resumeContent = document.querySelector(".resume");
const portfolioContent = document.querySelector(".portfolio");
const contactContent = document.querySelector(".contact");

/* FUNCTIONS */
function initPage(){
    initButtons();
}

function initButtons(){
    socialIconsButton.addEventListener("click", () => socialIconsLinks.classList.toggle("visibility"));
    profileButton.addEventListener("click", function(){
        logoHeader.classList.toggle("visibility");
        
    });
}