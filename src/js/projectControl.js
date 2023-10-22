function container(element) {
  return document.querySelector(element);
}

let imgPath = "../../src/img/projects/";
let animationDelay = 300;
let buttonDelay = animationDelay * 2 + 100;
let url = "../../src/config/projects.json";

function setProject(num) {
  let url = "../../src/config/projects.json";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let i;
      if (num === "recent") i = data.length;
      else i = num;
      let info = data[i - 1];
      let title = info.title;
      let description = info.description;
      let image = info.image;
      let imageurl;

      container("#frame").setAttribute("project", `${i}`);
      container("#frame").setAttribute("max-project", `${data.length}`);

      if (
        image.split("https://")[0] === image &&
        image.split("http://")[0] === image
      ) {
        imageurl = imgPath + image;
      } else {
        imageurl = image;
      }
      container("#project-title").innerText = title;
      container("#project-description").innerHTML = newLineHTML(description);
      container("#project-img").setAttribute("src", imageurl);
      switchAnimations(false);
    })
    .catch((error) => {
      console.error(error);
    });
}

function newLineHTML(description) {
  let result = "";
  for (var i = 0; i < description.length; i++) {
    result += description[i];
    if (i != description.length - 1) {
      result += " <br /> ";
    }
  }
  return result;
}

function switchProject(pos) {
  switchAnimations(true);
  let projectNum = parseInt(container("#frame").getAttribute("project"));
  let projectMax = parseInt(container("#frame").getAttribute("max-project"));
  let changeTo;
  setTimeout(() => {
    if (pos === "next") {
      changeTo = projectNum - 1;
      if (changeTo === 0) return setProject("recent");
    } else if (pos === "previous") {
      changeTo = projectNum + 1;
      if (changeTo === projectMax + 1) return setProject(1);
    } else return;
    return setProject(changeTo);
  }, animationDelay);
}

function switchAnimations(enable) {
  let title = container("#project-title");
  let description = container("#project-description");
  let viewer = container("#project-view");
  let dark = container(".darken-frame");
  if (enable === true) {
    title.classList.add("switch-hidden");
    description.classList.add("switch-hidden");
    viewer.classList.add("switch-hidden");
    dark.style.backgroundColor = "#000000";
    dark.style.backdropFilter = "blur(30px)";
  } else if (enable === false) {
    title.classList.remove("switch-hidden");
    description.classList.remove("switch-hidden");
    viewer.classList.remove("switch-hidden");
    dark.style.backgroundColor = "#00000080";
    dark.style.backdropFilter = "blur(0)";
  } else return;
}

function toggleButtons(toggle) {
  if (toggle === true) {
    container(".control-buttons > img:nth-child(1)").setAttribute(
      "enabled",
      "true"
    );
    container(".control-buttons > img:nth-child(2)").setAttribute(
      "enabled",
      "true"
    );
  } else if (toggle === false) {
    container(".control-buttons > img:nth-child(1)").setAttribute(
      "enabled",
      "false"
    );
    container(".control-buttons > img:nth-child(2)").setAttribute(
      "enabled",
      "false"
    );
  } else return;
}

function leftArrow() {
  let buttonEnabled = container(".previous-button").getAttribute("enabled");
  if (buttonEnabled === "false") return;
  toggleButtons(false);
  switchProject("previous");
  setTimeout(() => toggleButtons(true), buttonDelay);
}
function rightArrow() {
  let buttonEnabled = container(".previous-button").getAttribute("enabled");
  if (buttonEnabled === "false") return;
  toggleButtons(false);

  switchProject("next");
  setTimeout(() => toggleButtons(true), buttonDelay);
}

function viewProject() {
  if (container("#project-view").getAttribute("enabled") === "false") return;
  container("#project-view").setAttribute("enabled", "false");
  let transitionDelay = 1000;
  let url = "../../src/config/projects.json";
  let projectNum = parseInt(container("#frame").getAttribute("project"));
  let view = container("#view-container");
  let close = container("#view-close");
  view.click();
  document.body.style.overflowY = "hidden";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let info = data[projectNum - 1];
      let projectUrl =
        info.file.split(".").length > 1
          ? "https://" + info.file
          : "./src/config/projects/" + info.file;

      view.setAttribute("src", projectUrl);
      view.style.top = "0";
      setTimeout(() => {
        container("nav").style.transform = "translateY(-110%)";
        close.style.top = "0";
      }, transitionDelay - animationDelay);
    })
    .catch((error) => {
      console.error(error);
    });
}

function closeProject() {
  let transitionDelay = 1000;
  let view = container("#view-container");
  let close = container("#view-close");
  view.style.top = "100%";
  close.setAttribute("style", "");
  document.body.style.overflowY = "auto";
  setTimeout(
    () => (container("nav").style.transform = "translateY(0%)"),
    animationDelay
  );
  setTimeout(() => {
    container("#view-container").setAttribute("src", "");
    container("#view-container").innerHTML = "";
    setTimeout(() => {
      container("#project-view").setAttribute("enabled", "true");
    }, 1);
  }, transitionDelay);
}
