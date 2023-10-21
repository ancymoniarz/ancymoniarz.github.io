function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let r = reveals[i];
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = windowHeight / 10;
    if (elementTop < windowHeight - elementVisible) {
      if (r.getAttribute("experience") != null) {
        r.classList.add("skill-anim");
        r.style.width = r.getAttribute("experience") + "%";
      } else {
        r.classList.add("active");
      }
    } else {
      if (r.getAttribute("experience") != null) {
        r.style.width = 0;
        r.classList.remove("skill-anim");
      } else {
        r.classList.remove("active");
      }
    }
  }
}

window.addEventListener("scroll", reveal);
