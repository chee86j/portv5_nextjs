import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <p>
        Version 5.0 with Next.js 14 - Copyright &#169; 2024 Jeffrey Chee. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
