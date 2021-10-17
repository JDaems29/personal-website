import "./intro.css";
import Me from "../../img/031.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Joey Daems</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Data scientist</div>
              <div className="i-title-item">Basketball Player</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-description">
            I am a web developer based in Belgium. I love building websites and
            web apps for all types of clients. Outside of that I also work on a
            lot of software engineering and data science projects.
          </p>
        </div>
        <svg width="60px" className="i-scroll" viewBox="0 0 14.334 24.75">
          <circle class="circle-1" fill="black" cx="7.167" cy="6" r="1.2" />
          <circle class="circle-2" fill="black" cx="7.167" cy="6" r="1.2" />
          <path
            stroke="black"
            fill="transparent"
            d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"
          />
        </svg>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
