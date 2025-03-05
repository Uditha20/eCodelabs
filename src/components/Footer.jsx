import React from 'react'
import navLogo from "../assets/navlogo.png";
function Footer() {
  return (
    <div className="container footer">
    <div className="row footer-outer d-flex justify-content-center align-items-center">
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <img src={navLogo} alt="Ecode Labs logo" className="img-fluid" />
          </div>
        </div>
        <p className="text-center">
          Fuel your brand's growth with bold creative direction, viral content
          strategies, and expert branding.
        </p>
      </div>
      <div className="col-md-3">
        <div className="section">
          <h4 className="text-center">Privacy Policy</h4>
          <p className="text-center">
            Fuel your brand's growth with bold creative direction, viral
            content strategies, and expert branding.
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="section">
          <h4 className="text-center">Quick Links</h4>
          <p className="text-center">
            Fuel your brand's growth with bold creative direction, viral
            content strategies, and expert branding.
          </p>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-items-center">
        <div className="section">
          <button className="contact-btn">Contact</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center footer-icons">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-tiktok mx-2"></i>
          <i className="bi bi-whatsapp mx-2"></i>
        </div>
        <div className="footer-bottom mt-3">
          <p>
            Fuel your brand's growth with bold creative direction, viral
            content strategies, and expert branding.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer