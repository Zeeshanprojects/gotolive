import React from "react";
import "./header.css";
import Images from "../assets/Images/Image";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
        <div className="container-fluid ps-lg-5 pe-lg-5">
          <a className="navbar-brand" href="#">
            <img src={Images.logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  LIVE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  PODCAST
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-danger " type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
