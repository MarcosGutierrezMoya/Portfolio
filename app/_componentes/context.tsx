import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

export type AnswersContextType = {
    answerNumber:number,
    setAnswerNumber:Dispatch<SetStateAction<number>>,
}

export const AnswerContext = createContext({});

function AnswerContextProvider({children}:{children:React.ReactNode}) {
    const [answerNumber,setAnswerNumber] = useState(0);

    return(
        <AnswerContext.Provider value={{answerNumber,setAnswerNumber}}>
            {children}
        </AnswerContext.Provider>
    )
}

export const useAnswerNumber = () => useContext(AnswerContext) as AnswersContextType



export default AnswerContextProvider;