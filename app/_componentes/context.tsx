'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export type AnswersContextType = {
    answerNumber:number,
    setAnswerNumber:Dispatch<SetStateAction<number>>,
    videoGamesSection: string,
    setVideoGamesSection:Dispatch<SetStateAction<string>>,
}

export const AnswerContext = createContext({});

function AnswerContextProvider({children}:{children:React.ReactNode}) {
    const [answerNumber,setAnswerNumber] = useState(0);
    const [videoGamesSection, setVideoGamesSection] = useState("");


    return(
        <AnswerContext.Provider value={{answerNumber,setAnswerNumber, videoGamesSection, setVideoGamesSection}}>
            {children}
        </AnswerContext.Provider>
    )
}

export const useGeneralContext = () => { return useContext(AnswerContext) as AnswersContextType}

export default AnswerContextProvider;