window.addEventListener("DOMContentLoaded", setup);
function setup() {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };

  const observertoright = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const observertoleft = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const observertoup = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const h1 = document.querySelector("h1");
  observertoright.observe(h1);

  const paras = document.querySelectorAll(".hiddentoright");
  paras.forEach((p) => observertoright.observe(p));

  const paras2 = document.querySelectorAll(".hiddentoleft");
  paras2.forEach((p) => observertoleft.observe(p));

  const paras3 = document.querySelectorAll(".hiddentoup");
  paras3.forEach((p) => observertoup.observe(p));
}

function logme() {
  console.log("clicked");
}

window.addEventListener("scroll", (event) => {
  if (
    window.pageYOffset >=
    (document.body.offsetWidth -
      document.querySelector(".section-title > h1").offsetWidth) /
      2
  ) {
    document.querySelector(".section-title > h1").style.left =
      (document.body.offsetWidth -
        document.querySelector(".section-title > h1").offsetWidth) /
        2 +
      "px";
    //document.querySelector(".section-title > h1").style.width = 0;
    document.querySelector(".section-title > h1").style.opacity = 1;
  } else {
    document.querySelector(".section-title > h1").style.opacity = 0.8;
    document.querySelector(".section-title > h1").style.width = "auto";
    document.querySelector(".section-title > h1").style.left =
      window.pageYOffset + "px";
  }
});
