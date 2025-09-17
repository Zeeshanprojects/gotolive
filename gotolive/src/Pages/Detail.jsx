import React from "react";
import Images from "../assets/Images/Image";

export default function Detail() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center  rounded shadow-lg p-4">
          {/* Text Section */}
          <div className="col-lg-6 text-white mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">
              18U Girls D1 Game 18UGD1 121 - White: Legacy vs. Dark: Long Beach
            </h5>
            <p className="mb-2">2025 | 57min | Past Events 2025, Water Polo</p>
            <p className="mb-4">
              May 10, 2025, 8:00 AM. 1 Group Play. White: Legacy (12) vs. Dark:
              Long Beach (5). Hosted by CMAC at Estancia High School. C Bracket
            </p>

            {/* Buttons */}
            <div>
              <button className="btn btn-danger me-3">Watch Now</button>
              <button className="btn btn-outline-light">Share</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">
            <img
              src={Images.randompic}
              alt="picture"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
