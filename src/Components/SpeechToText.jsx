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

  // const [notice, setNotice] = useState(notice)
  // const recordMsg = (message, type, icon, iconType) => {
  //   setNotice({
  //     msg: message,
  //     type: type,
  //     icon: icon, /* use "#info-fill" ,"check-circle-fill" for success, "#exclamation-triangle-fill" for warning alert, "#exclamation-triangle-fill" for danger,  */
  //     iconType: iconType 
  //   })
  //   setTimeout(() => {
  //     setNotice(null)
  //   },1500);
  // }


  // function Alert(notice) {

  //   const capatalize = (word) => {
  //     const lower = word.toLowerCase();
  //     // console.log((lower.charAt(0).toUpperCase() + lower.slice(1)));
  //     return lower.charAt(0).toUpperCase() + lower.slice(1)
  //   }
  //   return (
  //     <div style={{height:'50px'}}>
  //      {notice &&<div className={`alert alert-${notice.type} d-flex align-items-center`} style={{height: "50px"}} role="alert">
  //         <svg className="bi flex-shrink-0 me-2" style={{width: "2rem", height: "50px"}} role="img" aria-label={`${notice.iconType}`}><use href={`${notice.icon}`}/></svg> {/**/}
  //         <div>
  //             <strong>{capatalize(notice.type)}</strong>: {notice.msg}
  //         </div>
  //     </div>}
  //     </div>
  //   ) 
  // }

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

  const startListening =  () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const toggleListening = (listening)=>{
    if(listening){
      props.showAlert("Recording Stopped", 'success', 'check-circle-fill', 'success:')
      SpeechRecognition.stopListening();
    }else{
      props.showAlert("Recording Started", "success", "check-circle-fill", "success:")
      resetTranscript();
      startListening();
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
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.bgColor, color: props.textColor, fontSize:"3em"}} placeholder="Enter your Text:" value={transcript} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <div className="buttons d-flex">
        <button className="btn btn-primary" onClick={() => toggleListening(listening)}>Microphone: {listening? 'ON': 'OFF'} {mic}</button>
        {/* <button className="btn btn-primary" onClick={()=>{props.callback(toggleListening)}}>Microphone: {listening? 'ON': 'OFF'} {mic}</button> */}
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
        {/* <p>{text.length>0?text:"Enter Something above to get a preview here"}</p> */}
        <p>{transcript.length>0?transcript: "Please Speak or Enter Something to preview here"}</p>
      </div>
    </>
  );
}

export default SpeechToText;
