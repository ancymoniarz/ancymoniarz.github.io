window.onload = fetch("./src/newSite/info.json")
  .then((response) => response.json())
  .then((data) => {
    newSite(data.newSite, data.text.h1, data.text.p);
  });

function newSite(state, h1, p) {
  if (!state) return;
  document.body.innerHTML +=
    `<div id="closeWindowFunc" onclick="closeWindow('closeWindowFunc')" style="padding: 10px 5px 10px 5px;background-color: #000000;width: 100%;cursor: pointer !important;text-align: center;position: fixed;top:0;z-index: 100;"> <h1 style="color: white;font-family: 'Poppins', sans-serif;font-size:32px;padding:0;margin:0">` +
    h1 +
    `</h1> <p style="color: white;font-family: 'Poppins', sans-serif;font-size:20px;padding:0;margin:0">` +
    p +
    `</p></div>`;
}

function closeWindow(e) {
  let element = document.getElementById(e);
  element.remove();
}
