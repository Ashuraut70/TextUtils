import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm.js';
import React, { useState } from 'react';
import Alert from './Components/Alert.js';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleStyle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "Success");
      document.title = ("TextUtils-dark mode")
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "Success");
      document.title = ("TextUtils-lightMode")
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/home" element={}> */}
              < TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
