import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        //console.log("clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>

        </div>
        <div className="container my-4">
            <h1>your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters   </p>
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
