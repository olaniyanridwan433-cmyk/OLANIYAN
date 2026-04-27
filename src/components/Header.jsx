import "../styles/Header.css";
function Header({ javascriptImg, sidebarOpen, setSidebarOpen, githubLogo }) {
  const openLink = () => {
    window.open("https://github.com/olaniyanridwan433-cmyk", "_blank");
  };
  return (
    <>
      {/* OVERLAY (click to close sidebar) */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* HEADER */}
      <header className="header">
        {/* LEFT */}
        <div className="left">
          <img src={javascriptImg} alt="logo" />
          <h1>OLANIYAN</h1>
        </div>

        {/* NAV LINKS (desktop) */}
        <nav className="nav">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="right">
          <button className="github-btn" onClick={openLink}>
            <img src={githubLogo} alt="github" />
            <span>GitHub</span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* SIDEBAR (mobile) */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          ✕
        </button>

        <a href="#Home" onClick={() => setSidebarOpen(false)}>
          Home
        </a>
        <a href="#About" onClick={() => setSidebarOpen(false)}>
          About
        </a>
        <a href="#Project" onClick={() => setSidebarOpen(false)}>
          Projects
        </a>
        <a href="#Contact" onClick={() => setSidebarOpen(false)}>
          Contact
        </a>
      </aside>
    </>
  );
}

export default Header;
