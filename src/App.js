
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
	const [mode, setMode] = useState("light") 
	const [alert, setAlert] = useState(null);
	const showAlert = (message,type)=>{
		setAlert({
			msg : message,
			type : type
		})
		setTimeout(()=>{
          setAlert(null)
		},1500);
	}
	const toggleMode = ()=>{
	if(mode === "light"){
	 setMode ("dark");
	 document.body.style.backgroundColor = "grey";
	 showAlert("Dark mode has been enabled!","success");
	}
	else{
	 setMode ("light");
	 document.body.style.backgroundColor = "white";
	 showAlert("Light mode has been enabled!","success");
	}
	}
	
       return (
	
	<>
 <Router>
<Navbar title="Texters" aboutText="about" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
	 <div className="container my-3">
	
          <Routes>
            <Route
              path="/"
              element={<TextForm showAlert={showAlert} heading="Enter Your Text To Analyze Below" mode={mode} />}
            />
            <Route path="/about" element={<About mode = {mode}/>} />
          </Routes>

	 
	 </div>
	 </Router>
  </>
  );

	   }
export default App;
