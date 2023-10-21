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
    if (counter === len) {
      let a = document.querySelector("#loading-screen");
      a.classList.add("loaded");
      setTimeout(() => (a.style.top = "100%"), 1000);
    }
  }
}, 1);
