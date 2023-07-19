import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import Form from './components/Form';
import Footer from './components/Footer';
import Alert from './components/Alert';



function App(props) {

  const [Modes, setModes] = useState("light")
  const [Alerts, setAlerts] = useState("")
  

  let handleAlerts = (alertValue, alertType) => {
    setAlerts({
      alertValue: alertValue,
      alertType: alertType
    })
    setTimeout(() => {
      setAlerts(null)
    }, 5000);
  }

  let switchMode = () => {
    if (Modes === "light") {
      setModes("dark")
      document.body.style.backgroundColor = "black"
      handleAlerts("dark mode enabled", "success")
      document.title = "TextCounter - Dark mode"
    }
    else {
      setModes("light")
      document.body.style.backgroundColor = "white"
      handleAlerts("dark mode disabled", "dark")
      document.title = "TextCounter - Light mode"


    }
  }




  return (



    <>



      <BrowserRouter>
        <Navbar Modes={Modes} switchMode={switchMode}></Navbar>
        <Alert Alerts={Alerts}></Alert>
        <Routes>
          <Route path='/' element={<Form Modes={Modes} handleAlerts={handleAlerts}></Form>}></Route>
          <Route path='/About' element={<About Modes={Modes} handleAlerts={handleAlerts}/>}></Route>
        </Routes>

        <Footer></Footer>

      </BrowserRouter>
      



    </>



  );
}

export default App; 
