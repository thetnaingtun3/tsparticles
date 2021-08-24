import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>&copy;ItSolutions 2021</p>
          </div>
          <div className="col">
            <ul className="footer-link">
              <li>
                <a href="#">
                  <span className="bi-linkedin"></span> LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi-twitter"></span> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="bi-github"></span> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
