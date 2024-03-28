
import React,{useState}from 'react'

export default function TextForm(props) {
	const [text, setText] = useState('');
	const handleUpClick = () => {
		  console.log("Upper Case Button Was Clicked!" + text);
		  let newText = text.toUpperCase();
		  setText(newText);
		  props.showAlert("Converted To Upper Case!","success")
	}
	const handleOnChange= (event) => {
		console.log("On Change!");
		setText(event.target.value);
  }
  const handleLowClick = () => {
	console.log("lower Case Button Was Clicked!" + text);
	let newText = text.toLowerCase();
	setText(newText);
	props.showAlert("Converted To Lower Case!","success");
}
const handleClearClick = () => {
   // console.log("lower Case Button Was Clicked!" + text);
	let newText = "";
	setText(newText);
	props.showAlert("Text was cleared!","success")
}

const handleInverseClick = () => {
	//console.log("lower Case Button Was Clicked!" + text);
	let newText1 = text.split("");
	let newText2 = newText1.reverse();
	let newText = newText2.join("");
	setText(newText);
	props.showAlert("Text has been inverted!","success")
}

const handleCopy = ()=>{
	var text = document.getElementById ("myBox");
	text.select();
	navigator.clipboard.writeText(text.value);
	props.showAlert("Your Text Has Been Copied!","success")
}
   
  return (
	<>
	<div className='container' style={{color : props.mode==="dark"? "white": "black"}}>
		<h1>{props.heading} </h1>
		<div className="mb-3">
		   <textarea className="form-control" value={text}  onChange = {handleOnChange} style={{backgroundColor : props.mode==="dark"? "grey": "white", color :  props.mode==="dark"? "white": "black"}} id="myBox" rows="8"></textarea>
	   </div>
		   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert To UpperCase</button>
		   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Covert To LowerCase</button>
		   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Reverse Text</button>
		   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
		   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
	</div>
	<div className="container my-3"style={{color : props.mode==="dark"? "white": "black"}} >
		<h3>Your Text Summary</h3>
		<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
		<p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
	   <h5><p>Preview</p></h5>
	   <h6><p>{text.length>0? text : "Enter Your Text For The Preview"}</p></h6>
    
	</div>
	</>
  )
}