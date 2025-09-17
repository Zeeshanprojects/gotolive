import React from "react";
import "./Watchfree.css";

export default function Watchfree() {
  return (
    <div className="watchfree-container">
      <div className="row g-0">
        {/* Left Side - Video Section */}
        <div className="col-sm-12 col-lg-8 video-section">
          <div className="video-wrapper">
            <video src=""></video>

            {/* Score Overlay */}
            <div className="score-overlay d-flex justify-content-between align-items-center px-3 py-2">
              <div className="team legacy">
                LEGACY <span className="score">6</span>
              </div>
              <div className="period">VS</div>
              <div className="team longbeach">
                LONG BEACH <span className="score">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Chat Section */}
        <div className="col-sm-12 col-lg-4 chat-section">
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
            <button className="btn  ms-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
