import React from "react";
import hero from "../assets/heroimage.png";
import heroback from "../assets/ball.png";



function Home() {
  return (
    <>
      <div className="container-fluid mt-5" style={{ height: "515px" }}>
        <div className="row d-flex justify-content-end">
          <div className="col-md-6 col-lg-5">
            <h1 className="display-4">
              Digital Marketing <br />
              That Delivers Impact
            </h1>
            <p className="lead">
              Empowering brands with strategic digital solutions through
              data-driven marketing, engaging content creation, and powerful
              social media management that drives real growth and lasting
              success.
            </p>
            <div className="mt-4">
              <button className="btn btn-outline-light mx-2">Login</button>
              <button className="btn btn-light">Contact</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 hero-img-section">
            <img
              src={hero}
              alt="Hero Image"
              className="img-fluid rounded position-absolute hero-img-section-one"
            />
            <img
              src={heroback}
              alt="Hero Image"
              className="img-fluid rounded position-relative"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
