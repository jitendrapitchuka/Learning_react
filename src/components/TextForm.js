import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const handleLoClick=()=>{
        //console.log("clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className='container' style={{color:props.mode=== 'dark' ? 'white': 'black'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark' ? 'light': 'light'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>Convert to Lowercase</button>


        </div>
        <div className="container my-4" style={{color:props.mode=== 'dark' ? 'white': 'black'}}>
            <h1>your text summary</h1>
            <p> {text.split(" ").length-1} words and {text.length} characters   </p>
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0? text:"Enter your text to preview"}</p>
        </div>
        </>
    )
}
