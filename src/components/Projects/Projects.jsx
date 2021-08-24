import React from "react";
import "./Projects.css";
import photosnap from "../../assets/images/projects/photosnap.png";
import pig_game from "../../assets/images/projects/pig-game.png";
import todo from "../../assets/images/projects/todo.png";
import casibus from "../../assets/images/projects/casibus.png";
import flydoctor from "../../assets/images/projects/flydoctor.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="projects-content">
              <h4 className="text-uppercase text-center">Project</h4>
              <br />

              <div className="card-columns">
                <div className="card">
                  <img src={photosnap} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card line</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={pig_game} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">PIG Game </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src={todo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">ToDo App </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img src={flydoctor} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">flydoctor </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={casibus} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Casibus </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in Lorem ipsum dolor sit amet. Lorem ipsum
                      dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <Link to="/portfolio">
                  <div className="card p-3 card-bg">
                    <blockquote className="blockquote mb-0 card-body ">
                      <p>If you like my work,see my full portfolio. --&gt;</p>
                    </blockquote>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
