// window.addEventListener('load', function() {
//     const loader = document.querySelector('.loader');
//     loader.className += ' hidden';
// });
const navBar = document.getElementById("navbar"); 
const toggle = document.getElementById("toggle");

//navbar scroll 
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//toggle
toggle.addEventListener("click", function() {
  if (navBar.style.background === "white") {
      navBar.style.background = "blue";
  }
  else {
    navBar.style.background = "white";
  }
});
