import { useState } from "react";
import "./App.css";

import javascriptImg from "../public/javascript.png";
import githubLogo from "../public/github.png";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div id="main">
      <Header
        javascriptImg={javascriptImg}
        githubLogo={githubLogo}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className="content">
        <Home />
      </div>
      <div className="content">
        <About />
      </div>
      <div className="content">
        <Projects />
      </div>
      <div className="content">
        <Contact />
      </div>
    </div>
  );
}

export default App;
