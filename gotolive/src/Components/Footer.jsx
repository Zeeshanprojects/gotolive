import React from "react";
import Images from "../assets/Images/Image";
import "./Footer.css";

export default function Footer() {
  return (
    <>
    <hr className="text-white"/>
      <footer className="footer  text-light">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-sm-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <img
                src={Images.logo}
                alt="footerlogo"
                className="footerlogo mb-3"
              />
              <p className="small  mb-0">
                © {new Date().getFullYear()} ZIMSPORTS. All Rights Reserved.
              </p>
            </div>

            {/* Social Section */}
            <div className="col-sm-12 col-lg-6 text-center text-lg-end">
              <h5 className="mb-3">Get Social</h5>
              <div className="d-flex justify-content-center justify-content-lg-end gap-3">
                <a href="#" className="text-light fs-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-light fs-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-light fs-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-light fs-4">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
