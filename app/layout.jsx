"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              Chhaya's Photography
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/interests">
                    Interests
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-dark text-light text-center py-3">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Chhaya's Photography. All Rights
              Reserved.
            </p>
            <div className="social-links">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                className="mx-2"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="mx-2"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="mx-2"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
