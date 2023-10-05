process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require("express");
const {sendmail} = require("./sendmail.js");

// const userRouter = require('./routes/user')
const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());
// app.use('/api/users',userRouter)
let mysql = require("mysql2/promise");
let con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rinki.111",
});

//data submit of employee in mysql
app.post("/employeedetails", (req, res) => {
  const employeeid = req.body.EmployeeID;
  const employeename = req.body.EmployeeName;
  const department = req.body.Department;
  const emailaddress=req.body.EmailAddress;
  const country = req.body.Country;
  const submissiondate = req.body.SubmissionDate;
  const Manager = req.body.Manager;
  const reqno = req.body.Req_No;
 

  con.query(
    "insert into emsapplication.employee_details(EmployeeID,EmployeeName,Department,EmailAddress,Country,SubmissionDate,Manager,Req_No)values(?,?,?,?,?,?,?,?)",
    [
      employeeid,
      employeename,
      department,
      emailaddress,
      country,
      submissiondate,
      Manager,
      reqno,
      
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);  
      }
      res.status(200).send("data submiiteed successfully");
    }
  );
});

//data submit of expensedetails in mysql
app.post("/emsapplication", (req, res) => {
 
  console.log(req.body);

  const dateofspend = req.body.DateOfSpend;
  const vendorname = req.body.VendorName;
  const expensetype = req.body.ExpenseType;
  const receiptvalue = req.body.ReceiptValue;
  const receiptnumber = req.body.ReceiptNumber;

  con.query(
    "insert into emsapplication.expenseadd(DateOfSpend,VendorName,ExpenseType,ReceiptValue,ReceiptNumber) values(?,?,?,?,?)",
    [dateofspend, vendorname, expensetype, receiptvalue, receiptnumber],
    (err, result) => {
      //   console.log(err);
      if (err) {
        console.log(err);
      }

      res.status(200).send("data submiiteed successfully");
    }
  );
  res.status(200).send("data submiiteed successfully");
});
//loginpage data submit in mysql

// app.post("/emslogin", (req, res) => {
//   const emailaddress = req.body.EmailAddress;
//   const password = req.body.Password;

//   con.query(
//     "insert into emslogin.emslogintable (EmailAddress,Password) values(?,?)",
//     [emailaddress, password],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.status(200).send("data submiiteed successfully");
//     }
//   );
// });

const emsloginvaildate1 = async (emaliaddress, password) => {
  try {
    const [rows, fields] = await con.query(
      `SELECT * FROM emsapplication.emssignup  where EmailAddress="${emaliaddress}" and Password="${password}";`
    );
    return rows;
  } catch (error) {
    throw error;
  }
};
app.get("/emsloginvaildate", async (req, res) => {
  const r1 = req.body.emailaddress;
  const r2 = req.body.password;
  await emsloginvaildate1(r1, r2)
    .then((data) => {
      
      res.status(200).send(data);
    })
    .catch((data) => {
      res.status(500).send("error");
    });

  // res.status(200).send(res1)
});
//check email is already present or not duration signup 
const signupalreadyemail = async (emailaddress) => {
  try {
    const [rows, fields] = await con.query(
      `SELECT * FROM emsapplication.emssignup  where EmailAddress="${emailaddress}";`
    );
    return rows;
  } catch (error) {
    throw error;
  }
};
app.post("/signupalreadyemail", async (req, res) => {
  const r1 = req.body.EmailAddress;
 
  await signupalreadyemail(r1)
    .then((data) => {
      
      res.status(200).send(data);
    })
    .catch((data) => {
      res.status(500).send("error");
    });

  // res.status(200).send(res1)
});

//sign up data submit in mysql
app.post("/postdatasignup", (req, res) => {
  const username = req.body.UserName;
  const emailaddress = req.body.EmailAddress;
  const password = req.body.Password;

  con.query(
    "insert into emsapplication.emssignup (UserName,EmailAddress,Password) values(?,?,?)",
    [username, emailaddress, password]
  ),
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send("data submiiteed successfully");
    };
});

const fetchdatafun = async (emailaddress) => {
  try {
    const [rows, fields] = await con.query(
      // `SELECT * FROM emsapplication.employee_details where EmailAddress="${emailaddress}"`
      `SELECT * FROM emsapplication.employee_details
       join emsapplication.manageremail using(EmployeeID) 
       where EmailAddress="${emailaddress}";`
    );
    return rows;
  } catch (error) {
    throw error;
  }
};
app.post("/fetchdata", async (req, res) => {
 let d1= req.body.EmailAddress
  await fetchdatafun(d1)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((data) => {
      res.status(500).send("error");
    });

  // res.status(200).send(a);
});

//sendmail on signup
app.post("/sendemail",(req,res)=>{
   
  sendmail(req.body.email,req.body.username);
 
})

app.listen(8082, () => {
  console.log("running server");
});
