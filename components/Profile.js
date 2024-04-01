import React from "react";
import Image from "next/image";
import Link from 'next/link';
import profilePic from "../public/profile-pic.jpg";
import LinkedInIcon from "../public/linkedin.png";
import GitHubIcon from "../public/github.png";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <Image
          src={profilePic}
          alt="Jeffrey Chee profile headshot"
          className="about-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I&apos;m</p>
        <h1 className="title">Jeffrey Chee</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1uWgql4Jm_D21CcZAgydPs3xW-0jB7kr3/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            Download CV
          </a>
          <Link href="#contact">
            <button className="btn btn-color-1">
              Contact Info
            </button>
          </Link>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/jeffchee86/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedInIcon}
              alt="My LinkedIn"
              className="LinkedInIcon"
            />
          </a>
          <a
            href="https://github.com/chee86j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitHubIcon}
              alt="My Github"
              className="GithubIcon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
