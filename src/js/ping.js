let green = "#90ee90";
let yellow = "#fafa90";
let orange = "#ffd7b5";
let red = "#ff7f7f";
let danger = "#ff0000";
function getPing(website) {
  $.ajax({
    url: website,
    method: "HEAD",
    start_time: new Date().getTime(),
    success: function (data) {
      let ms = new Date().getTime() - this.start_time;
      let ping = document.querySelector("ping");
      ping.innerText = ms;
      if (ms < 100) {
        ping.style.color = green;
      } else if (ms >= 100) {
        ping.style.color = yellow;
      } else if (ms >= 200) {
        ping.style.color = orange;
      } else if (ms >= 500) {
        ping.style.color = red;
      } else if (ms >= 700) {
        ping.style.color = danger;
      }
    },
  });
}

setInterval(() => {
  if (
    document.getElementById("loading-screen").getAttribute("class") != "loaded"
  )
    getPing(window.location.href);
}, 100);
