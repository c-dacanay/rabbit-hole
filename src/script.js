smallNav = document.getElementById("nav");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    smallNav.style.display = "block"
  } else {
    smallNav.style.display = "none"
  }
};

window.addEventListener("scroll", myScrollFunc);