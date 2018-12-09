const navBar = document.getElementById("navbar"); 
const toggle = document.getElementById("toggle");

//navbar hide when scroll 
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

// preloader animation
window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        loader.className += ' hidden';
    });

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

//AOS initialization
AOS.init();

//smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//vh
function calcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.getElementsByClassName("VH").setAttribute("style", "height:" + vH + "px;");
}
calcVH();
window.addEventListener('onorientationchange', calcVH, true);