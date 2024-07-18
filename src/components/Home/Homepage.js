import heroVideo from "../../assets/videos/hero.mp4";
const Homepage = () => {
  return (
    <div className="container">
      <div className="homepage-container">
        <div className="hero-video">
          <video autoPlay loop muted>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-content">
          <h1>
            Make forms
            <br />
            worth filling out
          </h1>
          <p>
            Get more data—like signups, feedback, and anything else—with forms
            designed to be .<strong>refreshingly different</strong>
          </p>
          <button className="btn btn-signup">Get started—it's free</button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
