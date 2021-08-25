import React, {useState} from 'react'
import Navbar from './Component/Navbar'
import FromText from './Component/FromText'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Alert from './Component/Alert'
// import About from './Component/About'


 function App() {
   
   const [mode, setMode] = useState("light")
   
   // For alert
   const [alert, setAlert] = useState(null)

   const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
   }



   const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      showAlert("Dark mode has Enable", "success");
    }
    else{
      setMode("light")
      showAlert("light mode has Enable", "success"); 

    }
  }
   
  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <FromText heading="Enter text to analyze" showAlert={showAlert}/> 
        {/* showAlert here for when someone convert text of text box to upper or lower case mssg will be shown */}
      </div>
    </div>
  )
}
export default App;
