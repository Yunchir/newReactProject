import "../styles/navbar.css";
import logo from "../images/Hire.png";
import leap from "../images/Leap.png";

export default function Navbar() {
  return (
    <div className="main">
      <div className="header">
        <div className="navImage">
          <img src={leap} alt="#" />
          <img src={logo} alt="#" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a className="blog" href="#">
                Blog
              </a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">FreeLance</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
