window.onload = function() {
    initWeb();
    console.log( " » document ready :)" );
};

/* VARS & CONST*/
const logoHeader = document.querySelector(".logo-header");
const socialIconsLinks = document.querySelector(".social-icons-links");
const socialIconsButton = document.querySelector(".social-icons__button");

var isLogoVisible = false;
const tabs =  ["profile", "resume", "portfolio", "contact"];
var tabActive = tabs[0];

const profileButton = document.querySelectorAll(".main-menu_tab-link")[0];
const resumeButton = document.querySelectorAll(".main-menu_tab-link")[1];
const protfolioButton = document.querySelectorAll(".main-menu_tab-link")[2];
const contactButton = document.querySelectorAll(".main-menu_tab-link")[3];

const profileContent = document.querySelector(".profile");
    const profileContentProgressBars = document.querySelectorAll(".resume-skills-data__line-progressbar");
const resumeContent = document.querySelector(".resume");
const portfolioContent = document.querySelector(".portfolio");
const contactContent = document.querySelector(".contact");

/* FUNCTIONS */
function initWeb(){
    initPagesHMTL();
    initButtons();
    initProgressBars();
}

function initPagesHMTL(){
    //chargePageHTML("header", "main-header");
    tabs.forEach( e => chargePageHTML(`main_${e}`, e) );
    chargePageHTML("footer", "main-footer");
}
    function chargePageHTML(nameFile, IdTag){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', `../html/${nameFile}.html`, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById(IdTag).innerHTML = xmlhttp.responseText;
                console.log(`Se ha cargado ${nameFile}.html`);
            }
        }
        xmlhttp.send();
    }

function initButtons(){
    socialIconsButton.addEventListener("click", () => socialIconsLinks.classList.toggle("opacity-off") );
    profileButton.addEventListener("click", (e) => managementTabs(e, 0) );
    resumeButton.addEventListener("click", (e) => managementTabs(e, 1) );
    protfolioButton.addEventListener("click", (e) => managementTabs(e, 2) );
    contactButton.addEventListener("click", (e) => managementTabs(e, 3) );
}
    function managementTabs(event, index){
        if(tabActive !== tabs[index]){
            managementTabActive(event);
            tabActive = tabs[index];
            managementTabActive(event);
        }
    }
        function managementTabActive(event){
            const tabElement = event.target.parentElement.parentElement;
            // Logo
            switch(tabActive){
                case tabs[0]:
                    if(isLogoVisible){
                        logoHeader.classList.toggle("translate-xy");
                        logoHeader.classList.toggle("opacity-on");
                        isLogoVisible = false;
                    }
                break;
                case tabs[1]:
                case tabs[2]:
                case tabs[3]:
                    if(!isLogoVisible){
                        logoHeader.classList.toggle("translate-xy");
                        logoHeader.classList.toggle("opacity-on");
                        isLogoVisible = true;
                    }
                break;
                default: console.log("ERROR » tab not valid");
            }
            // Menu / Content
            switch(tabActive){
                case tabs[0]:
                    profileButton.parentElement.classList.toggle("active");
                    profileButton.classList.toggle("active");
                    profileContent.classList.toggle("collapse-height");
                break;
                case tabs[1]:
                    resumeButton.parentElement.classList.toggle("active");
                    resumeButton.classList.toggle("active");
                    resumeContent.classList.toggle("display-flex");
                    setTimeout( () => {
                        resumeContent.classList.toggle("opacity-on"); }, 250);
                break;
                case tabs[2]:
                    protfolioButton.parentElement.classList.toggle("active");
                    protfolioButton.classList.toggle("active");
                    portfolioContent.classList.toggle("display-flex");
                    setTimeout( () => {
                        portfolioContent.classList.toggle("opacity-on"); }, 250);
                break;
                case tabs[3]:
                    contactButton.parentElement.classList.toggle("active");
                    contactButton.classList.toggle("active");
                    contactContent.classList.toggle("display-flex");
                    setTimeout( () => {
                        contactContent.classList.toggle("opacity-on"); }, 250);
                break;
                default: console.log("ERROR » tab not valid");
            }
        }

function initProgressBars(){
    //document.styleSheets[4].addRule(".resume-skills-data__line-progressbar::before", "text-align: right;");
    profileContentProgressBars.forEach( (elem) => {
        const cssComputedStyle = window.getComputedStyle(elem, "::before");
        var percentage = cssComputedStyle.getPropertyValue("content");
        percentage = percentage.substring(1, percentage.length - 2) - 2;
        elem.style.setProperty("--data-val", percentage + "%");
    });
}