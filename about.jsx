"use client";
import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        I am a driven senior with a deep passion for cybersecurity. Proficient
        in tools like Wireshark, Linux, Nmap, and GitHub. Skilled in both
        team-based and independent roles, and available full-time as of April.
      </p>
      <div className="image-placeholder">
        {/* Placeholder for your image */}
        <div style={{ width: "200px", height: "200px", background: "#f0f0f0" }} />
      </div>
    </div>
  );
};

export default About;
