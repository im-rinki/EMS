import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MapModal } from "./MapModal";
//import { Modal } from "./Modal";
import ReCAPTCHA from "react-google-recaptcha";
function SignUp() {
  
  const onChange = (value) =>{
     console.log("Captcha value:", value);
  }
  const [modalIsOpen,setIsOpen] = useState(false);
  
  const [username, setusername] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const openFromParent = () => {
    setIsOpen(true);
  }

  
function handleCloseModal() {
    setIsOpen(false);
  }
  function redirectOnfillemployeedetailsPage() {
    //  e.prevent.default();
    //  navigate("/home",`${emailaddress}`);
    navigate("/fillemployeedetails", { state: {email:`${emailaddress}`,username:`${username}`} });
  }

  const signupfun = async () => {
   
    // redirectOnHomePage();
    const emailformat =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(username=="" ||emailaddress==""|| password=="" ||repeatpassword==""||check==false){
        alert("All field are required ")
}

   else if (!emailformat.test(emailaddress)) {
      alert("please enter valid email");
    }
   else if(password.length<8){
    alert("invalid password")
   }
   else if(repeatpassword!==password){
    alert("password does not match")
   }
   
    else {
      
      await axios
      .post("http://localhost:8082/signupalreadyemail", {
        EmailAddress: emailaddress,
       })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.length);
        if(response.data.length>0){
          alert("email is already present");
        }
        else{
          axios
        .post("http://localhost:8082/postdatasignup", {
          UserName: username,
          EmailAddress: emailaddress,
          Password: password,
        })
        .then((response) => {
          console.log(response)});
          redirectOnfillemployeedetailsPage();
          axios.post("http://localhost:8082/sendemail", {
            email:emailaddress,
            username:username
          }).then((response)=>{
            alert("email sent successfully")
          })
          // redirectOnfillemployeedetailsPage();
        // });
        }
         });
    }
  };

  return (
    <>

    <MapModal
       //data={[1,2,3,4,56]}
       IsModalOpened={modalIsOpen}
       onCloseModal={handleCloseModal}
      //  onAfterOpen={handleAfterOpen}

       />

     <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black ">
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-4 ">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">
                              <b> UserName</b>
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e) => {
                                setusername(e.target.value);
                                // console.log(username);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              <b>EmailAddress</b>
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => {
                                setEmailaddress(e.target.value);
                                // console.log(emailaddress);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">
                              <b>Password</b>
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={(e) => {
                                setPassword(e.target.value);
                                // console.log(password);
                              }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">
                              <b>Repeat your password</b>
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              onChange={(e) => {
                                setRepeatpassword(e.target.value);
                                // console.log(repeatpassword);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-3">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            onChange={(e)=>setCheck(!check)}
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in
                            <a href="#" onClick={openFromParent}>Terms of service</a>
                          </label>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-3">
                       
                        <ReCAPTCHA
                          sitekey="6LdgZ_klAAAAAIZ7r3b7IG-QItCsyLXMApGAE50F"
                          onChange={onChange}
                        />
                          </div>
                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={signupfun}
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
