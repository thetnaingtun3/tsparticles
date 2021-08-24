import React, { Component } from "react";
import emailjs, { init } from "emailjs-com";
import "./Contact.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handelChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    init("user_1VecuCmwts5VNHQHPrZLf");
  }
  handelSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    emailjs.send("service_el7jzi8", "template_83qmcxf", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4 className="text-uppercase text-center">Contact</h4>
              <p className="text-center">Want to work on a project together?</p>
              <br />
              <form onSubmit={this.handelSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName4">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName4"
                      name="name"
                      value={this.state.name}
                      onChange={this.handelChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="emailform4">Eamil</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailform4"
                      name="email"
                      value={this.state.email}
                      onChange={this.handelChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                    name="message"
                    value={this.state.message}
                    onChange={this.handelChange}
                  />
                </div>
                <button type="submit" className="btn btn-warning rounded-pill">
                  Contact Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
