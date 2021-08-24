import React from "react";
import "./Hero.css";
import me from "../../assets/images/me.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-3">
                <img src={me} alt="Thet" className="img-fluid rounded-circle" />
              </div>
              <div className="col">
                <h3 className="text-uppercase">
                  Hello ,I'm thetnaingtun, a fullstack developer.
                </h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur earum, minima beatae adipisci temporibus iste
                  error voluptas soluta. Nisi debitis ad ipsam necessitatibus!
                </p>
                <p>
                  <a
                    href="#contact"
                    className="btn btn-warning btn-lg rounded-pill"
                  >
                    Contact me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
