import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}

  const toggleMode= ()=>
  {
    if(mode=== 'light'){
    setmode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode is enaled","success");
    }
    else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode is enaled","success");
  }
}
  return (
   <>
   {/* <Router> */}
<Navbar title="Text conversion" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-5' >
{/* 
       <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>} />
      </Routes> */}
         <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
        
</div>
{/* </Router> */}
   </>
  );
}

export default App;
