import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Upercase was clicked");
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Text  is been converted to upperCase");
  }
  const handleDownClick = ()=>{
    // console.log("lowercase was clicked");
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Text  is been converted to lowerCase");
  }
  const handleRepeatClick = ()=>{
    // console.log("repeat it was clicked");
    let newText =text.repeat(2);
    setText(newText);
    props.showAlert("Text  is been Repeated");
  }
  const handleClearClick = ()=>{
    // console.log("clear it was clicked");
    let newText ='';
    setText(newText);
    props.showAlert("Text  is been Cleared");
  }
  const handleOnChange = (event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}-</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleRepeatClick}>Repeat Text</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Numbers and Words Counter</h3>
      <p> {text.split(" ").length} Words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2><b>Preview</b></h2>
      <p> {text.length>0?text:'Enter the text to preview it here'}</p>
    </div>
    </>
  )
}
