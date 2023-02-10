import React, { useState } from 'react';

function TextForm(props) {


    const[text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.setAlert("Text Cleared!", "success");
    }

    const handleCopyText = ()=>{
        // var text = document.getElementById("textArea");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.setAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlert("Extra spaces removed!", "success");
    }

    return (
        <>
        <div className="container">
             <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textArea" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3d3a3a':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div> 

            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").filter((element)=>{return element.length !== 0}).length)} Minute to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    );
}

export default TextForm;