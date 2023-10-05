import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from 'react-router-dom'; 

function FillEmployeeDetails() {
  const  {state}  = useLocation();
 // const [newUser,setNewUser] = useState(true)
  const navigate = useNavigate();
  const [empdetails, setEmpdetails] = useState([
    {
      EmployeeID: "",
      EmployeeName: "",
      Department: "",
      EmailAddress: "",
      Country: "",
      SubmissionDate: "",
      Manager: "",
      ReqNo: "",
    },
  ]);

  const employeeIdhandlechange = (e) => {
    const item = [...empdetails];
    item[0].EmployeeID = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const employeeNamehandlechange = (e) => {
    const item = [...empdetails];
    item[0].EmployeeName = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const emailaddresshandlechange = (e) => {
    const item = [...empdetails];
    item[0].EmailAddress = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const departmenthandlechange = (e) => {
    const item = [...empdetails];
    item[0].Department = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const countryhandlechange = (e) => {
    const item = [...empdetails];
    item[0].Country = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const submissiondatehandlechange = (e) => {
    const item = [...empdetails];
    item[0].SubmissionDate = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const managerhandlechange = (e) => {
    const item = [...empdetails];
    item[0].Manager = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const reqnohandlechange = (e) => {
    const item = [...empdetails];
    item[0].ReqNo = e.target.value;
    setEmpdetails(item);
    console.log(empdetails);
  };
  const employeeDetails = async () => {
    
    await axios
      .post("http://localhost:8082/employeedetails", {
        EmployeeID: empdetails[0].EmployeeID,
        // EmployeeName: empdetails[0].EmployeeName,
        EmployeeName: state.username,
        Department: empdetails[0].Department,
        EmailAddress: state.email,
        Country: empdetails[0].Country,
        SubmissionDate: empdetails[0].SubmissionDate,
        Manager: empdetails[0].Manager,
        Req_No: empdetails[0].ReqNo,
      })
      .then((response) => {
        console.log(response);
       // setNewUser(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  function redirectOnfillemployeedetailsPage() {
    navigate("/signup");
  }
  function redirectOnHomePage() {
    navigate("/home", { state: `${state.email}` });
  }
  useEffect(() => {
    if(state.email == null){
      redirectOnfillemployeedetailsPage();
    }
    // else if(empdetails==null){
    //   redirectOnfillemployeedetailsPage();
    // }
    }, [state]);

  if(state==null){
   return(
      <div>loading</div>
    )
   
  }
 
else{
  return (
    <>
      <div className="container-fluid">
        <form>
          <div className="header" style={{ backgroundColor: "rgb(25, 0, 97)" }}>
            <h2
              style={{ textAlign: "center", marginTop: "10px", color: "white" }}
            >
              EmployeeDetails
            </h2>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="EmployeeID">
                  <b>Employee ID:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="EmployeeID"
                  onChange={employeeIdhandlechange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="EmployeeName">
                  <b>Employee Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="EmployeeName"
                  // onChange={employeeNamehandlechange}
                  value={state.username}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="EmailAddress">
                  <b>EmailAddress:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="Department"
                  // onChange={emailaddresshandlechange}
                  value={state.email}
                  disabled
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="Department">
                  <b>Department:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="Department"
                  onChange={departmenthandlechange}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Country">
                    <b>Country:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Country
"
                    placeholder=""
                    onChange={countryhandlechange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="SubmissionDate">
                    <b>Submission Date:</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="SubmissionDate"
                    placeholder=""
                    onChange={submissiondatehandlechange}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Manager">
                    <b> Manager:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Manager"
                    placeholder=""
                    onChange={managerhandlechange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Req.No:">
                    <b>Req. No:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Req.No:"
                    placeholder=""
                    onChange={reqnohandlechange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "20px", width: "150px" }}
                  onClick={(e)=>{e.preventDefault();employeeDetails();redirectOnHomePage();}}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
}
export default FillEmployeeDetails;
