import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



function SpeechToText(props) {
  
  //UpperCase Button
  // const handleUpClick = () => {
  //   // console.log("Uppercase was clicked");
  //   const newText = text.toUpperCase();
  //   setText(newText);
  //   props.showAlert("Converted to upper case", "success", "#check-circle-fill", "success:");
  // };

  const handleOnChange = (events) => {
    // console.log("on Change");
    setText(events.target.value);
  };

  const [text, setText] = useState("");
  // console.log(text.split("").length);

  //Setting Up Speech Recognition
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    // console.log(useSpeechRecognition)
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

  const mic = listening ? 'Stop Listening': 'Start Listening'

  const startListening = SpeechRecognition.startListening({continuous:'true'})
  const toggleListening = (listening)=>{
    if(listening){
      SpeechRecognition.stopListening();
    }else{
      SpeechRecognition.startListening();
    }
  }
  console.log(transcript)

  return (
    <>
      <div className={`container text-${props.classTextColor}`}> 
         <h1>{props.Heading}</h1>
         <p>Microphone: {listening? 'ON' : 'OFF'}</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.bgColor, color: props.textColor}} placeholder="Enter your Text:" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <div className="buttons d-flex">
        <button className="btn btn-primary" onClick={() => toggleListening(listening)}>Microphone: {listening? 'ON': 'OFF'} {mic}</button>
        {/* <button className="btn btn-primary" onClick={SpeechRecognition.startListening}>Start Listening</button> */}
        {/* <button className="btn btn-primary" onClick={SpeechRecognition.stopListening}>Stop Listening</button> */}
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
        <p>{transcript}</p>
      </div>
    </>
  );
}

export default SpeechToText;
