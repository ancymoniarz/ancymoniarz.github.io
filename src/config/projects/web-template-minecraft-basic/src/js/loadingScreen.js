setTimeout(() => {
  var imgs = document.images,
    len = imgs.length,
    counter = 0;

  [].forEach.call(imgs, function (img) {
    if (img.complete) incrementCounter();
    else img.addEventListener("load", incrementCounter, false);
  });

  function incrementCounter() {
    counter++;
    loadingBar(counter, len);
    if (counter === len) {
      let a = document.querySelector("#loading-screen");
      a.classList.add("loaded");
      setTimeout(() => (a.style.top = "100%"), 1000);
    }
  }
}, 1);

function loadingBar(completed, max) {
  let percent = parseInt((completed / max) * 100);
  let loadBar = document.querySelector("#loading-bar > div");
  loadBar.style.width = percent + "%";
}
