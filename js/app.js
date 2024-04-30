const hamburgerOpen = document.querySelector(".hamburger_icon");
const iconClose = document.querySelector(".icon_close");
const menu = document.querySelector('.mobile_menu');
const headerNav = document.querySelector(".header_nav");
const log = document.querySelector(".log");

menu.classList.add('display');
iconClose.classList.add('display');

// log.classList.add("display");

// open menu code
hamburgerOpen.addEventListener('click',function(){
    hamburgerOpen.classList.add('display');
    iconClose.classList.remove('display');
menu.classList.remove('display');

})

// close menu code
iconClose.addEventListener('click',function(){
    // alert("hello");
    hamburgerOpen.classList.remove('display');
    iconClose.classList.add('display');
    menu.classList.add('display');
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


