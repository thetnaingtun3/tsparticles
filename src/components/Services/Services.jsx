import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="services-contact text-center">
              <p>
                <i className="bi-stack"></i>
              </p>
              <h5>Design + Development</h5>
              <p>
                Clean,modern designs - optimized for performance,search engines
                and convert users to customers.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="services-contact text-center">
              <p>
                <i className="bi-cart"></i>
              </p>
              <h5>Ecommerce</h5>
              <p>
                Intergration of ecommerce platforms,payment gateway,custom
                prouduct template ,and more.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="services-contact text-center">
              <p>
                <i className="bi-card-checklist "></i>
              </p>
              <h5>Website Aduits</h5>
              <p>
                Looking to improve your website performance,SEO,or user
                experience?Request a free site audit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
