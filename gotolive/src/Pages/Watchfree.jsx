import React from "react";
import "./Watchfree.css";

export default function Watchfree() {
  return (
    <div className="watchfree-container">
      <div className="row g-0">
        {/* Left Side - Video Section */}
        <div className="col-12 col-lg-8 video-section">
          <div className="video-wrapper">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              muted
            ></video>

            {/* Score Overlay */}
            <div className="score-overlay d-flex justify-content-between align-items-center px-3">
              <span className="team legacy">LEGACY <b>6</b></span>
              <span className="team longbeach">LONG BEACH <b>1</b></span>
              <span className="period">2ND</span>
            </div>
          </div>
        </div>

        {/* Right Side - Chat Section */}
        <div className="col-12 col-lg-4 chat-section">
          <div className="chat-header">Live Chat</div>
          <div className="chat-body">
            <p className="text-muted">No messages yet...</p>
          </div>
          <div className="chat-input d-flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="form-control"
            />
            <button className="btn btn-danger ms-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
