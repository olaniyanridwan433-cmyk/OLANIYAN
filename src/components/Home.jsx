import "../styles/Home.css";
import profileImg from "../../public/pic.jpg";

function Home() {
  return (
    <div className="container" id="Home">
      <div className="profile-con">
        <img src={profileImg} alt="profile" className="profile" />
      </div>
      <div className="details">
        <span className="hi">Hi, I'm</span>
        <h1 className="first">OLANIYAN</h1>
        <h1 className="second">RIDWANLAH</h1>
        <h1 className="third">AKINKUNMI</h1>
        <span className="desc">A 15-year-old self-taught developer</span>
      </div>
    </div>
  );
}

export default Home;
