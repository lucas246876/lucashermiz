"use client";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Lucas Hermiz's Portfolio</h1>
      <p>
        Explore the different sections of my portfolio to learn more about my
        skills, experience, and projects.
      </p>
      <nav className="nav-links">
        <ul>
          <li><Link href="/summary">Summary</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
