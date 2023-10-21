function Welcome() {
  return (
    <div>
      <section id="welcome">
        <div>
          <img
            class="title reveal showonstart"
            src="../../src/img/title.png"
            alt=""
          />
          <img
            class="text-webdev reveal showonstart"
            src="../../src/img/webdev.svg"
            alt=""
          />
          <section class="title-undertext showonstart">
            <div class="font-poppins text-underwebdev showonstart reveal">
              <p>some of my work</p>
              <p>and personal projects,</p>
              <p>I hope you'll like them!</p>
            </div>
            <img
              class="thinstar reveal showonstart"
              src="../../src/img/particles/thin-star.svg"
            />
            <p class="font-barcode bar-ancymon showonstart reveal">ancymon</p>
          </section>
        </div>
      </section>
      <section id="aboutme">
        <div class="photo">
          <img
            class="xxxx reveal"
            src="../../src/img/particles/xxxx.svg"
            alt=""
          />
          <img id="photo" class="reveal" src="../../src/img/photo.svg" alt="" />
          <img
            class="dotted-rect reveal"
            src="../../src/img/particles/dotted-rect.svg"
            alt=""
          />
        </div>
        <div class="text-ab font-poppins">
          <h1 class="font-shrinkhand ab-hello reveal">Hello!</h1>
          <p class="reveal">
            My name is Fryderyk, also known
            <br />
            as Ancymon. I'm a Front-end
            <br />
            Developer / Web Designer
            <br />
            from Poland.
          </p>
          <p class="reveal">
            I've been passionate about creating
            <br />
            various types of websites of websites since 2020.
            <br />
            I've also gained experience designing
            <br />
            Discord bots for a while.
          </p>
          <p class="reveal">
            My determination and enthusiasm for
            <br />
            learning continuously drive me to <br />
            develop my skillsin web design
            <br />
            and programming.
            <br />
          </p>
        </div>
      </section>
      <section id="projects">
        <div class="frame">
          <div class="reveal">
            <img class="frame-shine" src="../../src/img/particles/shine.svg" />
            <img
              id="frame"
              project="project"
              max-project="max-project"
              src="../../src/img/frame.png"
            />
            <div>
              <div class="darken-frame"></div>
              <img id="project-img" />
            </div>
          </div>
          <div class="control-panel ">
            <div>
              <div class="pr-title">
                <h2 id="project-title" class="font-shrinkhand reveal">
                  project-title
                </h2>
                <img
                  id="project-view"
                  class="open-link-button reveal"
                  src="../../src/img/open-link-button.svg"
                  alt=""
                  onClick={viewProject}
                />
              </div>

              <div class="control-buttons">
                <img
                  enabled="true"
                  class="previous-button control-button reveal"
                  src="../../src/img/next-button.svg"
                  alt=""
                  onClick={leftArrow}
                />
                <img
                  enabled="true"
                  class="next-button control-button reveal"
                  src="../../src/img/next-button.svg"
                  alt=""
                  onClick={rightArrow}
                />
              </div>
            </div>
            <p id="project-description" class="font-poppins reveal">
              project-description
            </p>
          </div>
        </div>
        <div id="contact" class="font-poppins">
          <p icon="discord">@ancymon</p>
          <p icon="instagram">@kochamduszki</p>
          <p icon="mail">ancymon@ancymon.lol</p>
        </div>
      </section>
      <iframe id="view-container" src=""></iframe>
      <img
        id="view-close"
        src="../../src/img/close-button.svg"
        alt=""
        onClick={closeProject}
      />
    </div>
  );
}
