import React, { Component } from "react";
import "../../assets/styles/style.css";
export default class Home extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="container-home" style={{ width: "100vh" }}></div>
        <div
          className="card text-white bg-dark"
          style={{
            width: "300px",
            height: "400px",
            marginTop: "100px",
            opacity: "0.97",
          }}
        >
          <div
            className="card-img border border-danger"
            style={{
              borderRadius: "50%",
              height: "150px",
              width: "160px",
              overflow: "hidden",
              margin: "0 auto",
              transform: "translateY(25px)",
              transition: "all 0.3s",
            }}
          >
            <img
              className="card-img-top "
              src=""
              alt="ava"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="card-body text-center mt-3">
            <h3 className="mt-4 my-0">Nguyễn Xuân Huy</h3>
            <p className="mt-2 my-0 text-danger">CYBERSOFT_BC30</p>
            <div className="social mt-4">
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-facebook" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-youtube" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-twitter" />
              </a>
              <a href="#" style={{ margin: "25px 20px" }}>
                <i className="text-white fab fa-github" />
              </a>
            </div>
            <button className="buttonContact btn btn-dark mt-4">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}
