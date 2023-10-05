import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import FillEmployeeDetails from "./Components/FillEmployeeDetails"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"

function App() {
  return (
    <>
    <Header></Header>
    <div className="App">
      <Routes>
      <Route path="/" element={ <LogIn/> } />
      <Route path="signup" element={ <SignUp/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="fillemployeedetails" element={ <FillEmployeeDetails/> } />
        <Route path="contact" element={ <Contact/> } />
         
      </Routes>
    </div>
    </>
  )
}

export default App
