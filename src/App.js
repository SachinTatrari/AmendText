import React, { useState } from 'react'

import "./App.css";
import Alert from './Components/Alert';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  function showAlert(message, type){
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  function toggleMode(){
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor="#031527"
      // showAlert("Dark mode has been enabled", "success")
      document.title = "TextChecker - DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      // showAlert("Light mode has been enabled", "success")
      document.title = "TextChecker - LightMode"
    }
  }
 
  
  return (
    <>
      {/* <Navbar title="TextChecker" aboutText="About TextChecker" home="HomePage"/> */}
     <Router>

      <Navbar title="AmendText" home="HomePage" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
   <div className="container my-4 ">
  
    <Switch>
          <Route exact path="/about">
            {/* react uses partial matching, it means if we have 2 components: 1- user and 2- user/Id and if you want to render userId, due to partial matching react will always lead you to component 1, i.e- user. So to avoid this, we use the word EXaCT PATH, as i have written above*/}
            
    <About mode={mode} heading="About Us"/>
          </Route>
         
          <Route exact path="/">
           <TextForm showAlert={showAlert} mode={mode}  heading="Enter the Text Below:"/>
           
          </Route>
     </Switch>
   </div>
     </Router>
    </>
  );
}

export default App;
