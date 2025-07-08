import React from "react";
import Images from "../assets/Images/Image";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ps-lg-5 pe-lg-5">
          <a className="navbar-brand" href="#">
            <img src={Images.logo} alt="logo" />
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
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Water Polo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rugby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Open Water Swimming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Swimming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wrestling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hockey
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Diving
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Triathlon
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-light me-2 border-radius-0"
                type="submit"
              >
                Login
              </button>
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
