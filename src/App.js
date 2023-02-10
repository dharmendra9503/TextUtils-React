import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] =useState("light");
  const [alert, setAlertState] = useState(null);

  const setAlert = (message, type) =>{
    setAlertState({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlertState(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4e5355';
      setAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        {/* <div className="container my-3">
          <Route exact path="/">
          <TextForm heading="Enter text to analyze" mode={mode} />
          </Route>
          
          <Route path="/login">
          <About />
          </Route>
        </div> */}


        <Navbar name="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>



        <div className="container my-3">
          <Routes>  
            <Route exact path='/' element={<TextForm heading="TextUtils - Word Counter, Character Counter" mode={mode} setAlert={setAlert} />} />
            <Route exact path='/about' element={<About mode={mode} />} />

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
