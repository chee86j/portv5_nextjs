import React from "react";
import Link from "next/link";
import Image from "next/image";
import emailIcon from "/public/email.png";
import LinkedInIcon from "/public/linkedin.png";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <Image
            src={emailIcon}
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <Link href="mailto:JeffreyChee86@gmail.com">JeffreyChee86@gmail.com</Link>
          </p>
        </div>
        <div className="contact-info-container">
          <Image
            src={LinkedInIcon}
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <Link href="https://www.linkedin.com/in/jeffchee86/">LinkedIn</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
