function reveal() {
  let percent1;
  let percent2;
  if (windowHeight < windowWidth) {
    percent1 = 0.45;
    percent2 = 0.4;
  } else {
    percent1 = 0.05;
    percent2 = 0.05;
  }
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let r = reveals[i];
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var elementHeight = r.offsetHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = windowHeight * percent1;
    if (
      elementTop < windowHeight - elementVisible &&
      elementTop + elementHeight - windowHeight * percent2 >= 0
    ) {
      r.style.opacity = "1";
      if (
        (innerWidth <= 900 && r.getAttribute("id") === "project-title") ||
        (innerWidth <= 600 &&
          r.getAttribute("class") === "font-shrinkhand ab-hello reveal")
      )
        r.style.transform = "translateY(0) translateX(50%)";
      else if (
        r.getAttribute("class") === "previous-button control-button reveal"
      )
        r.style.transform = "translateY(0) translateX(0) rotate(180deg)";
      else r.style.transform = "translateY(0) translateX(0px)";
    } else {
      r.style.opacity = "0";
      if (r.getAttribute("class") === "previous-button control-button reveal")
        r.style.transform = "translateY(20px) translateX(20px) rotate(180deg)";
      else r.style.transform = "translateY(20px) translateX(20px)";
    }
  }
}
window.addEventListener("scroll", reveal);
function showScrollY() {
  if (window.scrollY === 0) {
    document.querySelectorAll(".showonstart").forEach((e) => {
      e.style.opacity = "1";
      e.style.transform = "translateY(0) translateX(0px)";
    });
  }
}
setTimeout(showScrollY, 1800);
