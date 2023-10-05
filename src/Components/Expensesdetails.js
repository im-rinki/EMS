// import React from 'react'
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
// import { format } from 'date-fns'
function Expensesdetails() {
  const  {state}  = useLocation();
  const [data, setData] = useState([
    {
      Date_of_Spend: new Date(),
      Vendor_Name: "",
      Expense_Type: "",
      Receipt_Value: "",
      Receipt_Number: "",
     
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
            // redirectOnFillDetails()
          }else{
            console.log(response.data['0']);
            // console.log(response.data['0']['0']['ManagerEmail'])
            // setGetData(response.data);
          }
         })
         .catch((err) => {
          console.log(err);
        });
  }
  // function redirectOnFillDetails() {
  //   navigate1("/FillEmployeeDetails",{state});
  // }
  useEffect(() => {
        fetchData();
       }, [state]);
       
  const [gtotal,setGrandtotal] = useState("");
  const grandTotal = (d) => {
    let result=0;
    setGrandtotal(0);
    for(let j=0;j<d.length;j++){
      result=result+(+d[j]['Receipt_Value'])
    }
    setGrandtotal(result);
  }
  const addfields = () => {
    setData([
      ...data,
      {
        Date_of_Spend: new Date(),
        Vendor_Name: "",
        Expense_Type: "",
        Receipt_Value: "",
        Receipt_Number: "",
      },
    ]);
  };

    const removefields = (index) => {
    let list = [...data];
    console.log(index);
    list.splice(index, 1);
    console.log(list);
    setData(list);
    grandTotal(list);

   }
  const dateofspendchange = (e, i) => {
    let datares = [...data];
    datares[i].Date_of_Spend = e.target.value;
    setData(datares);
  };

  const vendorNameChange = (e, i) => {
    let datares = [...data];
    datares[i].Vendor_Name = e.target.value;
    setData(datares);
  };

  const expenseTypeChange = (e, i) => {
    let datares = [...data];
    datares[i].Expense_Type = e.target.value;
    setData(datares);
  };
  const receiptValueChange = (e, i) => {
    let datares = [...data];
    datares[i].Receipt_Value = e.target.value;
    setData(datares);
    grandTotal(datares);
    // setGrandtotal( datares[i].Receipt_Value);
    
   
  };
  const receiptNumberChange = (e, i) => {
    let datares = [...data];
    datares[i].Receipt_Number = e.target.value;
    setData(datares);
  };
  
  const dataSubmit = async () => {
    const alphabetvendorname = /^[A-Za-z]+$/;
    const numeric = /^0|[1-9]\d*$/;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].Date_of_Spend === "" ||
        data[i].Date_of_Spend === undefined ||
        data[i].Vendor_Name === "" ||
        data[i].Vendor_Name === undefined ||
        data[i].Expense_Type === "" ||
        data[i].Expense_Type === undefined ||
        data[i].Receipt_Value === "" ||
        data[i].Receipt_Value === undefined ||
        data[i].Receipt_Number === "" ||
        data[i].Receipt_Number === undefined
      ) {
        alert("All Field are Required");
      } else if (
        !alphabetvendorname.test(
          data[i].Vendor_Name || !alphabetvendorname.test(data[i].Expense_Type)
        )
      ) {
        alert("only allow alphabet value");
      } else if (
        !numeric.test(data[i].Receipt_Value) ||
        !numeric.test(data[i].Receipt_Number)
      ) {
        alert("only allow numeric value");
      } else {
        await axios
          .post("http://localhost:8082/emsapplication", {
            DateOfSpend: data[i].Date_of_Spend,
            VendorName: data[i].Vendor_Name,
            ExpenseType: data[i].Expense_Type,
            ReceiptValue: data[i].Receipt_Value,
            ReceiptNumber: data[i].Receipt_Number,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    //  await axios.post("http://localhost:8082/emsapplication",{
    //   DateOfSpend:dateofspend,
    //    VendorName:vendorname,
    //    ExpenseType:expensetype,
    //    ReceiptValue:receiptvalue,
    //    ReceiptNumber:receiptnumber
    //   }).then((response)=>{
    //     console.log(response);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    console.log(data);
  };

  const navigate1 = useNavigate();
  function exit() {
    //  e.prevent.default();
    navigate1("/signup");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="section mt-4">
          <div className="row col-sm-12 mt-2 col-xs-12 col-md-12 col-lg-12 col-xxl-12"
            style={{ backgroundColor: "#240090", color: "white" }}
          >
            <div className=" mt-1 text-center form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <label className="form-label">Date of Spend</label>
            </div>
            <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <label className="form-label">Vendor Name</label>
            </div>
            <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <label className="form-label">Expense Type</label>
            </div>
            <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <label className="form-label">Receipt Value</label>
            </div>
            <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <label className="form-label">Receipt Number</label>
            </div>
            <div className="text-center mt-1  form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
              <input
                className="btn btn-outline-secondary"
                style={{ color: "white", backgroundColor: "blue" }}
                type="button"
                value="+"
                id="addbtn"
                onClick={addfields}
              />
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <div
                className="row col-sm-12 mt-2 col-xs-12 col-md-12 col-lg-12 col-xxl-12"
              >
                <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="date"
                    name="Date of Spend "
                    value={item['Date_of_Spend']}
                    onChange={(e) => {
                      dateofspendchange(e, index);
                    }}
                  />
                </div>
                <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Vendor Name"
                    value={item['Vendor_Name']}
                    onChange={(e) => {
                      vendorNameChange(e, index);
                    }}

                    // onChange={(e)=>{setVendorname(e.target.value)
                    //   console.log(vendorname)}
                    //  }
                  />
                </div>
                <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Expense Type"
                    value={item['Expense_Type']}
                    onChange={(e) => {
                      expenseTypeChange(e, index);
                    }}
                    //     onChange={(e)=>{setExpensetype(e.target.value)
                    //       console.log(expensetype)}
                    //  }
                  />
                </div>
                <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Receipt Value"
                    value={item['Receipt_Value']}
                  onChange={(e) => {
                      receiptValueChange(e, index);
                    }}
                    //     onChange={(e)=>{setReceiptvalue(e.target.value)
                    //       console.log(receiptvalue)}
                    //  }
                  />
                </div>
                <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Receipt Number"
                    value={item['Receipt_Number']}
                    onChange={(e) => {
                      receiptNumberChange(e, index);
                    }}
                    //     onChange={(e)=>{setReceiptnumber(e.target.value)
                    //       console.log(receiptnumber)}
                    //  }
                  />
                </div>
                <div className="text-center mt-1  form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                  <input
                    className="btn"
                    style={{ color: "white", backgroundColor: "red" }}
                    type="button"
                    value="-"
                    // id="addbtn"
                    onClick={()=>{
                      removefields(index);
                      //grandTotal();
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <hr className="text-info"></hr>
        <div className="row mt-3">
          <div className="form-group col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
            <label className="form-label">
              <b>Grand Total:</b>
            </label>
          </div>
          <div className="form-group col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
            <input type="text" id="grandtotal" value={gtotal} className="form-control" 
                    ></input>
          </div>
          <div className="form-group col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
            <h4>{gtotal}</h4>
            </div>
        </div>
       
        <div className="row mt-3">
          <div className="col-sm-12 mt-2 col-xs-12 col-md-2 col-lg-2 col-xxl-2">
            <button
              type="button"
              class="btn"
              style={{ color: "white", backgroundColor: "blue" }}
              // onClick={validateDetails}
              onClick={dataSubmit}
            >
              Send For Approval
            </button>
          </div>
          <div className="col-sm-12 mt-2 col-xs-12 col-md-2 col-lg-2 col-xxl-2">
            <button
              type="button"
              class="btn"
              style={{ color: "white", backgroundColor: "red", float: "left" }}
              onClick={exit}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expensesdetails;
