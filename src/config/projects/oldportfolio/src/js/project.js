function convertToProject(project, language) {
  fetch("./src/js/projects.json")
    .then((response) => response.json())
    .then((data) => {
      let p = data[project];
      let title;
      let description;
      let image = p.global.image;
      let link = p.global.link;
      if (language === "pl") {
        title = p.pl.title;
        description = p.pl.description;
      } else if (language === "en") {
        title = p.en.title;
        description = p.en.description;
      }
    });
}

convertToProject(0, "pl");
