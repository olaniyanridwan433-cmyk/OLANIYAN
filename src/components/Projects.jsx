import nodeJs from "../../public/nodejs.png";
import eccomerce from "../../public/logo.png";
import message from "../../public/messa.png";
import "../styles/Projects.css";
import SYNAPZ from "../synapz.png";

const projects = [
  {
    img: eccomerce,
    title: "Go Packet",
    desc: "A full-stack e-commerce app built with React Native, Node.js, Express, and MongoDB. It features user authentication, product management, a shopping cart and admin management.",
    link: "https://github.com/olaniyanridwan433-cmyk/Eccomerce_App",
  },
  {
    img: nodeJs,
    title: "Eccomerce Server",
    desc: "The backend server for the e-commerce application, built with Node.js and Express.",
    link: "https://github.com/olaniyanridwan433-cmyk/eccomerce",
  },
  {
    img: message,
    title: "Messanger App",
    desc: "A full-stack messaging app built with React Native, Node.js, Express, and MongoDB. It features real-time chat functionality, user authentication, message management, and a modern responsive UI designed for smooth communication across devices.",
    link: "https://github.com/olaniyanridwan433-cmyk/Messanger",
  },
  {
    img: nodeJs,
    title: "Messanger Server",
    desc: "The backend server for the messenger application, built with Node.js and Express.",
    link: "https://github.com/olaniyanridwan433-cmyk/messanger_backend",
  },
  {
    img: SYNAPZ,
    title: "Synapz.",
    desc: "The full-stack Ai smart learning app built with react native, nodejs, express, mongodb and cloudinary. It features user authentication, messaging ai and also summarizing notes from pdf and documents.",
    install:
      "https://www.mediafire.com/file/pl38pl70y5zc7zn/application-546d2396-1964-460e-a004-3b611db76906.apk/file",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="Project">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {project.link && (
              <div className="project-buttons">
                <a href={project.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            )}
            {project.install && (
              <div className="project-buttons">
                <a href={project.install} target="_blank" rel="noreferrer">
                  Install
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
