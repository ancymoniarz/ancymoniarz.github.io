let d = document;
let b = d.body;
function startWebsite(toggle) {
  d.querySelector(".loading-animation").addEventListener(
    "animationend",
    end("load-animation-container", "loading-animation", toggle)
  );
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

startWebsite(true);

function special(querySelectorName, website, text) {
  let delay = 700;
  let element = d.querySelector(querySelectorName);
  let old = element.innerText;
  if (website) {
    element.innerText = "Redirecting...";
    let link = element.getAttribute("link");
    setTimeout(() => {
      window.open(link);
      element.innerText = old;
      d.body.innerHTML += `<div id="temp-delete-website"></div>`;
      let tdw = d.getElementById("temp-delete-website");
      tdw.click();
      tdw.remove();
    }, delay);
  } else {
    element.innerText = "Text copied";
    setTimeout(() => {
      element.innerText = old;
      d.body.innerHTML += `<div id="temp-delete-copy" onclick="copy('${text}')"></div>`;
      let tdc = d.getElementById("temp-delete-copy");
      tdc.click();
      tdc.remove();
    }, delay);
  }
}
