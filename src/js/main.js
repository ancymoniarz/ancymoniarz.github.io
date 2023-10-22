ReactDOM.render(<Welcome />, document.querySelector("#root"));
document.querySelector("title").innerText = "𝔞𝔫𝔠𝔶𝔪𝔬𝔫";

var i = 0;
var txt = "ancymon";
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".bar-ancymon").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function Navbar() {
  return (
    <nav class="font-poppins">
      <div>
        <p onClick={scrollHome}>Home</p>
        <img
          class="chunky-star"
          src="../../src/img/particles/chunky-star.svg"
          alt=""
        />
        <p onClick={scrollAboutme}>About me</p>
        <img
          class="chunky-star"
          src="../../src/img/particles/chunky-star.svg"
          alt=""
        />
        <p onClick={scrollProjects}>Projects</p>
        <img
          class="chunky-star"
          src="../../src/img/particles/chunky-star.svg"
          alt=""
        />
        <p onClick={scrollContact}>Contact</p>
      </div>
    </nav>
  );
}
ReactDOM.render(<Navbar />, document.querySelector("#nav"));

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let element = document.querySelector("nav");
  if (y === 0) {
    element.classList.remove("scrollbar-background");
  } else {
    element.classList.add("scrollbar-background");
  }
});

function scrollHome() {
  document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
}
function scrollAboutme() {
  document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
}
function scrollProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
function scrollContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

setProject("recent");

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.shiftKey || e.key === "F12" || e.key === "F11") {
    e.stopPropagation();
    e.preventDefault();
    try {
      e.keyCode = 0;
    } catch (e) {}
    return false;
  }
  return true;
});
