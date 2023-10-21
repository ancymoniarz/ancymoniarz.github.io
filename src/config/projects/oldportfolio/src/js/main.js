let d = document;
let b = d.body;

function getLocation() {
  console.log("[ALD] Ancymon Language Detector loaded");
  console.log("[ALD] Getting Language");
  if (
    Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1] === "Warsaw"
  ) {
    console.log(
      "[ALD] Timezone",
      Intl.DateTimeFormat().resolvedOptions().timeZone,
      "detected"
    );
    console.log("[ALD] Language set to polish");
    changeLang(0);
    startWebsite(true);
    setTimeout(() => {
      autoLangNotif(0);
    }, 3000);
  } else {
    startWebsite(true);
    setTimeout(() => {
      autoLangNotif(1);
    }, 3000);
  }

  d.querySelector(".copyright").innerText =
    "© " + new Date().getFullYear() + " ancymon.lol";
}

function polish() {
  fetch("langs.json")
    .then((res) => res.json())
    .then((data) => {});
  startWebsite(true);
}

function changeLang(option) {
  fetch("langs.json")
    .then((res) => res.json())
    .then((data) => {
      let lang = data[option];
      d.querySelector("h1.hi").innerText = lang.hi;
      d.querySelector("h1.nazwa").classList.remove("nazwa-en");
      d.querySelector("h1.nazwa").classList.remove("nazwa-pl");
      d.querySelector("h1.nazwa").classList.add("nazwa-" + lang.lang);
      d.querySelector(".qoute1").innerText = lang.quote[0];
      d.querySelector(".qoute2").innerText = lang.quote[1];
      d.querySelector(".aboutme").innerText = lang.nav[0].aboutme;
      d.querySelector(".projects").innerText = lang.nav[0].projects;
      d.querySelector(".skills").innerText = lang.nav[0].skills;
      d.querySelector(".contact").innerText = lang.nav[0].contact;
      d.querySelector(".am-age").innerText = lang.aboutme[0];
      d.querySelector(".am-bot").innerText = lang.aboutme[1];
      d.querySelector(".am-fe").innerText = lang.aboutme[2];
    });
}

function end(element, htmlclass, toggle) {
  if (toggle === true) {
    setTimeout(() => {
      let htmlelement = d.querySelector("." + element);
      let loadingscreen = d.querySelector(".loading-screen");
      htmlelement.classList.remove(htmlclass);
      htmlelement.classList.add("loading-cover");
      setTimeout(() => {
        loadingscreen.style.opacity = "0";
        setTimeout(() => {
          htmlelement.remove();
          loadingscreen.remove();
          b.style.overflow = "visible";
        }, 1000);
      }, 1000);
    }, 2200);
  }
}

function startWebsite(toggle) {
  d.querySelector(".loading-animation").addEventListener(
    "animationend",
    end("load-animation-container", "loading-animation", toggle)
  );
}

d.addEventListener("scroll", (event) => {
  let scroll = window.scrollY;
  let h = b.offsetHeight - window.innerHeight;
  if (scroll === 0) {
    d.querySelector(".shadow-top").style.opacity = "0";
    d.querySelector("nav").style.backgroundColor = "#00000000";
    d.querySelector(".shadow-bottom").style.bottom = "0";
  } else if (scroll === h) {
    d.querySelector(".shadow-bottom").style.bottom = "-10vh";
    d.querySelector(".shadow-top").style.opacity = "1";
    d.querySelector("nav").style.backgroundColor = "#000000";
  } else {
    d.querySelector(".shadow-bottom").style.bottom = "0";
    d.querySelector(".shadow-top").style.opacity = "1";
    d.querySelector("nav").style.backgroundColor = "#000000";
  }
});

function notification(title, description, htmlelement) {
  let notif = d.querySelector(".notification");
  notif.innerHTML += '<h2 class="notif-title">' + title + "</h2>";
  notif.innerHTML += '<p class="notif-desc">' + description + "</p>";
  notif.innerHTML += htmlelement;
  notif.innerHTML += '<div class="notif-duration"></div>';
  let duration = d.querySelector(".notif-duration");
  notif.classList.add("notif-show");
  setTimeout(() => {
    duration.classList.add("notif-start");
    setTimeout(() => {
      notif.classList.remove("notif-show");
      duration.classList.remove("notif-start");
      setTimeout(() => {
        notif.innerHTML = "";
      }, 300);
    }, 3500);
  }, 500);
}

function autoLangNotif(option) {
  fetch("langs.json")
    .then((res) => res.json())
    .then((data) => {
      let lang = data[option];
      let langnumber;
      if (option === 0) {
        langnumber = 1;
      } else langnumber = 0;
      let htmlelement =
        '<div class="notif-change-lang" onclick="langTransition(' +
        langnumber +
        ')">' +
        lang.notif[0].button +
        "</div>";
      notification(lang.notif[0].title, lang.notif[0].description, htmlelement);
    });
}

function langTransition(option) {
  let transition = d.querySelector(".transition").classList;
  transition.add("transition-play");
  b.style.overflow = "hidden";
  setTimeout(() => {
    console.log("[ALD] Manually changed language");
    changeLang(option);
    d.querySelector(".notification").classList.remove("notif-show");
    d.querySelector(".notif-duration").classList.remove("notif-start");
    setTimeout(() => {
      transition.remove("transition-play");
      b.style.overflow = "visible";
    }, 1200);
  }, 800);
}
