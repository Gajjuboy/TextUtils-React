import React from 'react';
// import "./style.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from "react-use-clipboard";
import {useState} from "react";


const ThapaSpeechRecognition = () => {
    const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //     successDuration:1000
    // });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>
                    <p>It's compatible with modern browsers and Internet Explorer 11.</p>
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button >{/*onClick={setCopied}*/}
                        {/* {isCopied ? 'Copied!' :*/ 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default ThapaSpeechRecognition;