// import React, { useState } from "react";

// function Contact() {
//   const data=[
//     {
//       state: "rj",
//       name: "a",
//     },
//     {
//       state: "mp",
//       name: "b",
//     },
//     {
//       state: "up",
//       name: "c",
//     },
//     {
//       state: "bihar",
//       name: "d",
//     },
//     {
//       state: "hr",
//       name: "e",
//     },
//   ];
// const [stateselected,setStateselected]=useState();
// const handleState = (e) =>{
//   setStateselected(e.target.value);
//     // console.log(state);
// }


//   return (
//     <div class="row mt-4">
//       <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
//         <label>
//           <b>State</b>
//         </label>
//       </div>
//       <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
       
//         <select class="form-select" onChange={handleState} value={stateselected}>
          
//         {data.map((option) => (
//               <option value={option.state}>{option.state}</option>
              
//             ))}
//         </select>
      
//       </div>

//       <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
//         <label>
//           <b>Employee Name:</b>
//         </label>

//      <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-12 col-xs-12">
//       <label>Employee Email</label>
//       <input type="text" class="frm-control" id="employeetext"></input>
//       <input type="text" class="form-control" id="employeeemail"></input>
//      </div>
//     </div>
//       <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
//         <select class="form-select" >
//         {data.filter((item)=>item.state==stateselected).map((option) => (
//               <option value={option.name}>{option.name}</option>
//             ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React ,{useState} from 'react'

function Contact() {
  const[poamnt,setPoamnt]=useState("");

  const handleTotalpoamount =(e)=>{
    setPoamnt(e.target.value);
    data[0].poamount=e.target.value;
    console.log(poamnt);
  }
  const[data,setData]=useState([
    {
    poamount:"",
    invoiceamount:""
  }
])

  const invoiceamounthandleChange = (e,i)=>{
    const datares=[...data];

    datares[i].invoiceamount=e.target.value;
    if(i!==datares.length-1){
      let a= datares[i].poamount-datares[i].invoiceamount;
      datares[i+1].poamount=a;
      console.log(a);
    }
    setData(datares);

  }
  const addfields1 = () => {
    setData([
      ...data,
      {
       poamount:"",
       invoiceamount:""
      },
    ]);
    
    console.log(data);
  };
  const removefields = (index) => {
    let list = [...data];
    console.log(index);
    list.splice(index, 5);
    console.log(list);
    setData(list);
   }
   const datasubmit =()=>{
    console.log(data);
   }
  return (
     <>
     <div class="row mt-3">
     <div className=" mt-1 text-center form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <label className="form-label"> Total PO Amount</label>
      </div>
      <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
          <input
            className="form-control"
            type="text"
            name="Total po amount"
           onChange={handleTotalpoamount}
            />
        </div>
     </div>
     <div className="row mt-5">
      <div className=" mt-1 text-center form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <label className="form-label"> Remaining PO Amount</label>
      </div>
      <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <label className="form-label">Invoice Amount</label>
      </div>
      <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <input
          className="btn btn-outline-secondary"
          style={{ color: "white", backgroundColor: "blue" }}
          type="button"
          value="+"
          id="addbtn1"
         onClick={addfields1} 
          />
      </div>
    </div>
 {data.map((item,index)=>{
  return( 
    <div className="row">
        <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
          <input
            className="form-control"
            type="text"
            name="po amount"
            value={item['poamount']}
            disabled
            // value={poamnt}
            // onChange={(e) => {
            //   poamounthandleChange(e, index);
            // } } 

            />
        </div>
        
       
        <div className="form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
          <input
            className="form-control"
            type="text"
            name="invoice amount"
           value={item['invoiceamount']}
            onChange={(e) => {
              invoiceamounthandleChange(e, index);
            } } 
            />
        </div>
        <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <input
          className="btn btn-outline-secondary"
          style={{ color: "white", backgroundColor: "red" }}
          type="button"
          value="-"
          id="removefield" 
            // id="addbtn"
            onClick={()=>{
              removefields(index);
              //grandTotal();
            }}/>
      </div>
        </div>
   )
        })} 
        <div className='row'>
        <div className="text-center mt-1 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
        <input
          className="btn btn-outline-secondary"
          style={{ color: "white", backgroundColor: "green" }}
          type="button"
          value="submit"
          id="submitdata" 
          onClick={datasubmit}
            />
      </div>
        </div>
        </>
        )
        }

        export default Contact
     
