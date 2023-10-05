import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const [emailaddress, setemailaddress] = useState("");
  const [password, setpassword] = useState("");

  const login = async () => {
    const emailformat =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      emailaddress == undefined ||
      emailaddress == "" ||
      password == undefined ||
      password == ""
    ) {
      alert("all field are required");
    } else if (!emailformat.test(emailaddress)) {
      alert("please enter valid email");
    } else {
      axios
        .post("http://localhost:8082/emsloginvaildate", {
          // EmailAddress: emailaddress,
          // Password: password,
          
            emailaddress:emailaddress,
            password:password
        
        })
        .then((response) => {
          console.log(response.data)
          console.log(response);
        });
      redirectOnHomePage();
    }
  };
  const navigate = useNavigate();
  function redirectOnHomePage() {
    //  e.prevent.default();
    //  navigate("/home",`${emailaddress}`);  
    navigate("/home", { state: `${emailaddress}` });
  }

  const navigate1 = useNavigate();
  function signupnavigate() {
    //  e.prevent.default();
    navigate1("/signup");
  }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="card text-black mt-3">
            <div className="row d-flex justify-content-center align-items-center h-100 mb-5 mt-2">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <p className="h1 fw-bold mb-3 mx-1 mx-md-4 ">Log In</p>

                <form>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="form3Example3">
                      <b>Email Address</b>
                    </label>
                  </div>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="EmailAddress"
                    onChange={(e) => {
                      setemailaddress(e.target.value);
                      console.log(emailaddress);
                    }}
                  />

                  <div className="form-outline mt-4">
                    <label className="form-label" htmlFor="form3Example4">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      name="Password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                        console.log(password);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                      // onClick={login}
                      onClick={() => {
                        login();
                        //  redirectOnHomePage();
                      }}
                    >
                      Login
                    </button>
                    {/* <p className="small fw-bold mt-4 pt-1 mb-0">Don't have an account? <a href="#!"
                  className="link-danger">Sign Up</a></p> */}
                    <p className="small fw-bold mt-4 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        onClick={() => {
                          signupnavigate();
                        }}
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
