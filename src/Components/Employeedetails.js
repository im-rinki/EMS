import React from "react";
import { useEffect, useState } from "react";
import {useNavigate, useLocation } from 'react-router-dom'; 
import axios from "axios";
//fetch data from mysql
function Employeedetails() {
  const  {state}  = useLocation();
  const navigate = useNavigate();
  const[getData,setGetData] = useState([
    {
      EmployeeID: "",
      EmployeeName: "",
      Department: "",
      Country: "",
      SubmissionDate: "",
      Manager: "",
      ManagerEmail:""
    },
  ]);

 
  const fetchData = async () => {
    console.log(state);
    await axios({
    url:`http://localhost:8082/fetchdata`,
    method:'POST',
    data:{
      //"EmailAddress":"asdfghjk"
      "EmailAddress":state
    },
  }).then((response) => {
          console.log(response);
          //  setGetData(response);
          console.log(response.data);
          if(response.data.length==0){
            redirectOnFillDetails()
          }else{
            console.log(response.data['0'])
            setGetData(response.data);
          }
         })
         .catch((err) => {
          console.log(err);
        });
  }
  function redirectOnHomePage() {
    navigate("/");
  }
  function redirectOnFillDetails() {
    navigate("/FillEmployeeDetails",{state});
  }
// useEffect(() => {
//     fetchData();
//   }, []);

  useEffect(() => {
    if(state == null){
      redirectOnHomePage();
    }else{
      fetchData();
    }
    }, [state]);
  
  if(state==null){
    return(
    <div>loading</div>
    )
  }
  else{
  return (
    <>
      {/* { get.map((dataObj, index) => {  */}
      <div className="container-fluid">
        <div className="header">
          <div class="p-1 text-dark" style={{ backgroundColor: "#190061" }}>
            <h3 class="text-white text-center">Expense Management System</h3>
          </div>
        </div>

        <div class="row mt-4">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Employee ID:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Employee ID"
              autoComplete="off"
              value={getData[0]['EmployeeID']}
              // onChange={(e) => {
              //   employeeIdChange(e);
              // }}
              disabled
            >
              </input>
          </div>

          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Employee Name:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Employee Name"
              autoComplete="off"
              value={getData[0]['EmployeeName']}
              // onChange={(e) => {
              //   employeeNameChange(e);
              // }}
              disabled
            ></input>
            
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Department:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Department"
              autoComplete="off"
              // onChange={(e) => {
              // departmentChange(e);
              // }}
              value={getData[0]['Department']}
              disabled
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Country:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Country"
              autoComplete="off"
              // onChange={(e) => {
              //   countryChange(e);
              // }}
              value={getData[0]['Country']}
              disabled
            ></input>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Submission Date:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="date"
              className="form-control"
              name="Submission Date"
              autoComplete="off"
              // onChange={(e) => {
              //   submissionDateChange(e);
              // }}
              value={getData[0]['SubmissionDate']}
              disabled
            ></input>
          </div>

          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Manager:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Manager"
              autoComplete="off"
              // onChange={(e) => {
              //   ManagerChange(e);
              // }}
              value={getData[0]['Manager']}
              disabled
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>ManagerEmail</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="ManagerEmail"
              autoComplete="off"
             
              value={getData[0]['ManagerEmail']}
              disabled
            ></input>
          </div>
          {/* <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Req. No:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Req. No:"
              autoComplete="off"
              // onChange={(e) => {
              //   reqNoChange(e);
              // }}
              value={getData[0]['ReqNo']}
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label>
              <b>Local Currency:</b>
            </label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Local Currency"
              autoComplete="off"
              // onChange={(e) => {
              //   localCurrencyChange(e);
              // }}
              value={getData[0]['LocalCurrency']}
            ></input>
          </div> */}
        </div>
      </div>

      {/* })}  */}
    </>
  );
}
}
export default Employeedetails;
