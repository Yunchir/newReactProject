import "../styles/main.css";
import group from "../images/Group296.png";
import linked from "../images/linked.png";
import medium from "../images/medium.png";
import twitter from "../images/twitter.png";

export default function Main() {
  return (
    <div className="blog">
      <div>
        <h1>Blog Posts</h1>
        <h3>I think so, this is it.</h3>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="img">
          <img src={twitter} alt="#" />
          <img className="centerimg" src={linked} alt="#" />
          <img src={medium} alt="#" />
        </div>
      </div>
      <div>
        <img src={group} alt="#" />
      </div>
    </div>
  );
}
