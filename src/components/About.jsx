import "../styles/About.css";

function About() {
  return (
    <div className="about-container" id="About">
      <h1 className="title">About Me</h1>

      <p className="intro">
        I’m a self-taught frontend developer passionate about building clean and
        modern app experiences.
      </p>

      <div className="section">
        <h2>My Journey</h2>
        <p>
          I started learning web development at a young age, focusing on
          javascript and React Native. Now I build React Native projects and improve my
          skills every day.
        </p>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>JavaScript</li>
          <li>React Native</li>
        </ul>
      </div>

      <div className="section">
        <h2>Goals</h2>
        <p>
          I want to become a professional full-stack developer and build
          real-world applications that solve problems.
        </p>
      </div>

      <p className="fun">🚀 Fun fact: I enjoy turning ideas into real apps.</p>
    </div>
  );
}

export default About;
