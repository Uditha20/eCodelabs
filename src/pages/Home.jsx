import React from "react";
import hero from "../assets/heroimage.png";
import heroback from "../assets/ball.png";
import youtube from "../assets/yuotube.png";
import futureGirl from "../assets/feature-girl.png";
import xreative from "../assets/xreative.png";
import smart from "../assets/smart-robo.png";
import ball from "../assets/robo-ball.png";
import Map from "../assets/map.png";
// import mathara from "../assets/"
function Home() {
  return (
    <>
      <div
        className="container-fluid mt-5"
        style={{ height: "auto", minHeight: "515px" }}
      >
        <div className="row d-flex justify-content-end align-items-center">
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
          <div className="col-md-6 col-lg-6 hero-img-section position-relative">
            <img
              src={hero}
              alt="Hero Image"
              className="img-fluid rounded position-absolute hero-img-section-one"
              style={{ top: "0", left: "0", zIndex: 1 }} // Adjust positioning as needed
            />
            <img
              src={heroback}
              alt="Hero Image"
              className="img-fluid rounded"
              style={{ zIndex: 0 }} // Ensure this image is behind the first one
            />
          </div>
        </div>
      </div>
      <div className="container p-4 mt-5">
        <div className="row d-flex justify-content-center position-relative about">
          <div className="col-12 col-md-8 p-4 about-us-box">
            <div className="row d-flex justify-content-end">
              <div className="col-md-6">
                <p className="mb-4">
                  <h3 className="text-primary">Why Choose Us</h3>
                  <h1 className="display-4 font-weight-bold mb-4">About Us</h1>
                  At [Your Company Name], we help businesses grow by delivering
                  strategic digital solutions. From branding and content
                  creation to social media management, we craft impactful
                  campaigns that drive real results. Our mission is
                  simple—empower brands to thrive in the digital world with
                  purpose and precision.
                </p>
                <div className="text-center">
                  <button className="contact-btn px-5">Contact</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="custom-box position-absolute d-flex justify-content-center align-items-center"
            style={{ top: "25%", left: "5%" }}
          >
            <img
              src={youtube}
              alt="box"
              className="img-fluid rounded"
              style={{ height: "200px" }}
            />
          </div>
        </div>
      </div>

      <section className="services">
        <div className="container">
          <div className="services-header text-center">
            <span className="subtitle">Our Services</span>
            <h2>What We Offer</h2>
            <p className="description">
              "Empowering brands with a complete digital presence—tailored
              solutions for websites, social media, and creative content that
              leave a lasting impact."
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card text-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v16" />
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>
                Custom websites built with modern technologies and best
                practices.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19c.5 0 1-.2 1.4-.6l7.4-7.4a3 3 0 1 0-4.2-4.2L12 11.4l-4.6-4.6a3 3 0 0 0-4.2 4.2l7.4 7.4c.4.4.9.6 1.4.6Z" />
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Intuitive and engaging user experiences that convert visitors.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h3>Social Media</h3>
              <p>Strategic social media management and content creation.</p>
            </div>

            <div className="service-card text-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0  20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Results-driven marketing strategies that grow your business.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3>Content Strategy</h3>
              <p>
                Engaging content that tells your story and drives engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid features">
        <div className="row feature-row align-items-center">
          <div className="col-lg-5 col-md-6 text-center">
            <img
              src={futureGirl}
              className="img-fluid feature-image"
              alt="Future Girl"
            />
          </div>

          <div className="col-lg-6 col-md-6 text-center text-md-start">
            <h2 className="mt-3">
              We Provide Many <br />
              Features You Can Use
            </h2>
            <p>
              Explore the features we provide while having fun! Each feature has
              its unique functionality.
            </p>
            <ul className="feature-ui">
              <li>Feature 1: Customizable and user-friendly.</li>
              <li className="mt-3">Feature 2: Secure and scalable.</li>
              <li className="mt-3">Feature 3: High performance.</li>
              <li className="mt-3">Feature 4: Responsive on all devices.</li>
              <li className="mt-3">Feature 5: Enhanced UX/UI design.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="gradient-bg d-flex flex-column flex-md-row align-items-center justify-content-between p-3">
            <div className="text-white">
              <h2 className="h5 fw-semibold">
                Empowering Brands with Digital <br />
                Excellence
              </h2>
              <div className="social-icons mt-2">
                <a href="#" className="text-white me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
            <a href="#" className="contact-btn mt-3 mt-md-0">
              <span>Contact</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="container-fluid creative-section"
        style={{ marginTop: "100px" }}
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <img src={xreative} className="img-fluid" alt="Creative Content" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>
              Creative and Viral Content <br />
              Strategies That Elevate Your <br />
              Brand
            </h2>
            <p>
              Fuel your brand’s growth with bold creative direction, viral
              content strategies, <br />
              and expert branding. From scroll-stopping visuals to campaigns
              that leave <br />
              lasting impressions, we help your brand stand out and stay
              relevant.
            </p>
            <div>
              <button className="gradient-button">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container creative-section" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>
              Creative and Viral Content Strategies That Elevate Your Brand
            </h2>
            <p>
              Fuel your brand’s growth with bold creative direction, viral
              content strategies, and expert branding. From scroll-stopping
              visuals to campaigns that leave lasting impressions, we help your
              brand stand out and stay relevant.
            </p>
            <div>
              <button className="gradient-button">Contact</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative">
            <img
              src={ball}
              className="img-fluid position-relative"
              style={{ left: "100px" }}
            />
            <img
              src={smart}
              className="img-fluid position-absolute"
              style={{ left: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="container Empower mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Empowering Brands with Digital Excellence</h1>
            <p>
              In today’s digital landscape, visibility is everything. At [Your
              Company Name], we empower brands with cutting-edge digital
              marketing strategies designed to captivate audiences and drive
              meaningful engagement
            </p>
          </div>
          <div className="col-lg-6">
            <img src={Map} alt="map" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 testimonial">
            <div className="stars mb-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="mb-4">
              Leehravey didn’t just deliver a website—they gave us a digital
              storefront that tells our story beautifully. Their creativity and
              attention to detail made all the difference.”
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                alt="Portrait of Sophie Hanson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/kVVadnN_dluFlv3BkSdz5SCYtHmM2Aj__U362wlx0rw.jpg"
                width="50"
              />
              <div className="ms-3 text-start">
                <p className="mb-0 fw-bold">Sophie Hanson</p>
                <p className="mb-0 text-muted">Blogger, MyThoughts</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 testimonial">
            <div className="stars mb-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="mb-4">
              Leehravey didn’t just deliver a website—they gave us a digital
              storefront that tells our story beautifully. Their creativity and
              attention to detail made all the difference.”
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                alt="Portrait of Sophie Hanson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/kVVadnN_dluFlv3BkSdz5SCYtHmM2Aj__U362wlx0rw.jpg"
                width="50"
              />
              <div className="ms-3 text-start">
                <p className="mb-0 fw-bold">Sophie Hanson</p>
                <p className="mb-0 text-muted">Blogger, MyThoughts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 testimonial">
            <div className="stars mb-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="mb-4 text-center">
              Leehravey didn’t just deliver a website—they gave us a digital
              storefront that tells our story beautifully. Their creativity and
              attention to detail made all the difference.”
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                alt="Portrait of Sophie Hanson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/kVVadnN_dluFlv3BkSdz5SCYtHmM2Aj__U362wlx0rw.jpg"
                width="50"
              />
              <div className="ms-3 text-start">
                <p className="mb-0 fw-bold">Sophie Hanson</p>
                <p className="mb-0 text-muted">Blogger, MyThoughts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 testimonial">
            <div className="stars mb-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="mb-4 text-center">
              Leehravey didn’t just deliver a website—they gave us a digital
              storefront that tells our story beautifully. Their creativity and
              attention to detail made all the difference.”
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                alt="Portrait of Sophie Hanson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/kVVadnN_dluFlv3BkSdz5SCYtHmM2Aj__U362wlx0rw.jpg"
                width="50"
              />
              <div className="ms-3 text-start">
                <p className="mb-0 fw-bold">Sophie Hanson</p>
                <p className="mb-0 text-muted">Blogger, MyThoughts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
