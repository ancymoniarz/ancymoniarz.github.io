ReactDOM.render(<Document />, document.querySelector("#app"));

function element(text) {
  return document.querySelector(text);
}

function stringToLink(string, link) {
  if (string === "youtube") return link.youtube;
  else if (string === "instagram") return link.instagram;
  else if (string === "facebook") return link.facebook;
  else if (string === "tiktok") return link.tiktok;
  else if (string === "discord") return link.discord;
  else if (string === "shop") return link.shop;
}
let url = "../../projects/web-template-minecraft-basic/src/config/config.json";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    element("title").innerText = data.title;
    element("#document-title").innerText = data.document.title;
    for (var i = 0; i < data.links.enable.length; i++) {
      element(".socials").innerHTML +=
        "<a href='" +
        stringToLink(data.links.enable[i], data.links) +
        "'><img src='./src/img/" +
        data.links.enable[i] +
        ".svg' alt='" +
        data.links.enable[i] +
        "'/></a>";
    }
  })
  .catch((error) => {
    console.error(error);
  });
