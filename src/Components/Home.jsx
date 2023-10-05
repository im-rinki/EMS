import React from 'react'
import Employeedetails from "./Employeedetails";
 import Expensesdetails from "./Expensesdetails";
function Home() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 mt-2 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
        <Employeedetails />
      </div>
      <div className="col-sm-12 mt-2 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
        <Expensesdetails />
      </div>
    </div>
  </div>
  </>
  )
}

export default Home