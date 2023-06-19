import React from "react";
// import SpeechRecognition ,{ useSpeechRecognition } from "react-speech-recognition";
import SpeechToText from "./SpeechToText";
import { render } from "@testing-library/react";


describe("Testing SpeechToText Utility",()=>{
    it("should return a string to change button text",()=>{
        useSpeechRecognition.mockReturnValue({
            listening : 'true'
        })
        const {debug} = render(<SpeechToText Heading="Speak to convert into text:" bgColor={bgColor} classBgColor={classBgColor} classTextColor={classTextColor} textColor={textColor} borderColor={borderColor} showAlert={showAlert} />)
        debug();
})
})