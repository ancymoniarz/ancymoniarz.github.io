window.onload = function () {
  document.querySelector(".loading-screen").classList.add("load-end");
};

window.addEventListener("DOMContentLoaded", setup);
function setup() {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };

  
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const paras = document.querySelectorAll(".hidden");
  paras.forEach((p) => obs.observe(p));
}

let swiper = document.getElementById("projects");
let swiperLink = document.querySelector(".swiper > a");
let swiperLabel = document.querySelector(".label");

let nextL = document.querySelector(
  "body > div > section.projects > div > div.swiper-control > p:nth-child(1)"
);
let nextR = document.querySelector(
  "body > div > section.projects > div > div.swiper-control > p:nth-child(2)"
);

fetch("projects.json")
  .then((res) => res.json())
  .then((data) => {
    let projects = data.project;
    let latest = projects[projects.length - 1];
    swiper.src = "./img/projects-view/" + latest[0];
    swiperLink.setAttribute("href", latest[1]);
    nextR.setAttribute("onclick", "displayProject(0)");
    nextL.setAttribute("onclick", `displayProject(${projects.length - 1})`);
  });

function getPositon(projects, current) {
  for (var i = 1; i < projects.length + 1; i++) {
    if (projects[i - 1] === current) {
      return i;
    }
  }
}

function displayProject(num) {
  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => {
      let projects = data.project;
      let latest = projects[projects.length - 1];
      let current = projects[num];
      let position = getPositon(projects, current);

      nextR.setAttribute("onclick", "displayProject(" + position + ")");
      nextL.setAttribute("onclick", `displayProject(${position - 2})`);
      swiperLabel.classList.remove("show-label");
      if (current == latest) {
        swiperLabel.classList.add("show-label");
        nextR.setAttribute("onclick", "displayProject(0)");
      } else if (current === projects[0]) {
        nextL.setAttribute(
          "onclick",
          `displayProject(${projects.length - 1} )`
        );
      }

      swiper.src = "./img/projects-view/" + current[0];
      swiperLink.setAttribute("href", current[1]);
    });
}

addEventListener("mousemove", (event) => {
  let x = event.x + 10;
  let y = event.y + 10;
  let message = document.querySelector(".swiper-click-info");
  message.style.left = x + "px";
  message.style.top = y + "px";
});
