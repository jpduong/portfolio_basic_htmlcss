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

//preloader
// window.addEventListener('load', function() {
//         const loader = document.querySelector('.loader');
//         loader.className += ' hidden';
//     });

// email function
let email = document.getElementById("email").addEventListener("click", emailFunction);

function emailFunction() {
  const el = document.createElement("textarea");
  el.value = "james.duong93@gmail.com";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Copied to clipboard: \n\njames.duong93@gmail.com");
}

