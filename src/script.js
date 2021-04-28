smallNav = document.getElementById("nav");
let cardInfo = [{
  id: "lurk",
  src: "src/img/incel.gif"
}, {
  id: "dark"
}, {
  id: "meme"
}, {
  id:"rue"
}, {
  id: "gloss"
}] 

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    smallNav.style.display = "block"
  } else {
    smallNav.style.display = "none"
  }
  changeDiv(y)
};

let t = 1;
let changeDiv = function(y){
  // for (let t in targetIds) {
    let target = targetIds[t]
    if (y > (target.offsetTop + target.offsetHeight)) {
    console.log('scrolled past', target)
    t++
    console.log(t)
  } else {
    // t--
    console.log(t)
  }
// }
}


targetIds = []
for (i = 0; i < cardInfo.length; i++) {
  let card = cardInfo[i].id
  targetIds.push(document.getElementById(card))
} 

window.addEventListener("scroll", myScrollFunc);