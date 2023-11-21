let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tab-content");

function opentab(tabName) {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
        //tabContent.classList.add("active-tab");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
