import React, { useState } from "react";

function TextForm(props) {
  
  //UpperCase Button
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success", "#check-circle-fill", "success:");
  };
  //LowerCase Button
  const handleLowClick = () => {
    // console.log("Lowercase was clicked");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success", "#check-circle-fill", "success:");
  };
  // Clear text button
  const handleClearClick = () => {
    // console.log("Clear was clicked");
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success", "#check-circle-fill", "success:");
  };

  const handleCopy = () => {
    // let copiedText = document.getElementById("exampleFormControlTextarea1")
    // copiedText.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success", "#check-circle-fill", "success:");
  }

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed", "success", "#check-circle-fill", "success:");
  }

  const handleOnChange = (events) => {
    // console.log("on Change");
    setText(events.target.value);
  };

  const [text, setText] = useState("");
  // console.log(text.split("").length);
  return (
    <>
      <div className={`container text-${props.classTextColor}`}> 
         <h1>{props.Heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.bgColor, color: props.textColor}} placeholder="Enter your Text:" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <div className="buttons d-flex">
        <button className="btn btn-primary" disabled = {text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" disabled = {text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" disabled = {text.length===0} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary" disabled = {text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary" disabled = {text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      </div>

      <div className={`container my-3 text-${props.classTextColor}`}>
        <h2>Your text summary</h2>
        <p>{(text.split(" ").length -1)} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" "+ 1).length} Minutes to read</p>
      </div>
      <div className={`container my-3 previewText text-${props.classTextColor}`} style={{border: `1px solid ${props.borderColor}`, borderRadius: '8px', height:'250px'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something above to get a preview here"}</p>
      </div>
    </>
  );
}

export default TextForm;
