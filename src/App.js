import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar"; 
import TextForm from "./Components/TextForm";
import React, {useState} from "react";
import Alert from "./Components/Alert";
import SpeechToText from "./Components/SpeechToText";
import ThapaSpeechRecognition from "./Components/ThapaSpeechRecognition"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  /*Dark Mode State Variable */
  const [mode, setMode] = useState('light'); // whether  dark mode is enabled or not...

  /*Color Variables */
  let bgColor = mode==='light'?'white':'#141414';
  let classBgColor = mode ==='light'?'light':'dark';
  let textColor = mode ==='light'?'black':'white';
  let classTextColor = mode==='light'?'dark':'light';
  let borderColor = mode==='light'?'#e2e9ed':'white';


  /*Dark Mode Button */
  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#141414';
      showAlert("Dark mode has been Enabled", "success", "#check-circle-fill", "success:"); 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been Disabled", "success", "#check-circle-fill", "success");
    }
    // darkModeColor();
  }

  // const darkModeColor = () => {
  //   let black = document.getElementById("flexSwitchCheckDefault");
  //   let red = document.getElementById("flexSwitchCheckRed");
  //   if(black.getAttribute('checked')=== 'true'){
  //     red.setAttribute('checked', 'false');
  //   }
  //   else if(red.getAttribute('checked')=== 'true'){
  //     black.setAttribute('checked', 'false');

  //   }
  // }


  /*Alert State Variable*/
  const [alert, setAlert] = useState(null);
  /*Alert show method */
  const showAlert = (message, type, icon, iconType) => {
    setAlert({
      msg: message,
      type: type,
      icon: icon, /* use "#info-fill" ,"check-circle-fill" for success, "#exclamation-triangle-fill" for warning alert, "#exclamation-triangle-fill" for danger,  */
      iconType: iconType 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  /* Main DOM */
  return (
    <>
    <Router>
      <Navbar navbarBrand='TextUtils' aboutText='About US' speechtotext='Speech To Text Converter' mode={mode} toggleMode={toggleMode} bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} />
      <Alert alert={alert} /> 
      <div className='container my-3'>
        <Routes>
            <Route path='about' element={<About bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} borderColor={borderColor} showAlert={showAlert}/> } />
              

            <Route path='/' element={<TextForm Heading="Enter the text to analyze:" bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} borderColor={borderColor} showAlert={showAlert}/>} />
            <Route path='SpeechToText' element={<SpeechToText Heading="Speak to convert into text:" bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} borderColor={borderColor} showAlert={showAlert}/>} />
            <Route path='SpeechToText' element={<ThapaSpeechRecognition />} />
          </Routes>
          {/* <TextForm Heading="Enter the text to analyze:" bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} borderColor={borderColor} showAlert={showAlert}/> */}
      </div>
    </Router>
</>
  );
}

export default App;
