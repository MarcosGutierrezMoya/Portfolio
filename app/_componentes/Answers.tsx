'use client'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type AnswersInterface = {
    answerChooseType: Boolean,
    answers?: String[],
    setQuestionNum: Dispatch<SetStateAction<number>>,
    correctAnswer?: number,
    questionNum:number,
    setCorrectQuestionNum: Dispatch<SetStateAction<number>>,
}

const Answers = ({ answerChooseType, answers, setQuestionNum, correctAnswer,questionNum,setCorrectQuestionNum }: AnswersInterface) => {
    const responseArea = useRef<any>()
    const [modalText,setModalText] = useState("")

    function textAreaAnswer(e: any) {
        e.preventDefault();
        if (e.target.res) {
            if (e.target.res.value === correctAnswer?.toString()) {
                setModalText("Respuesta correcta 👌");
                setCorrectQuestionNum(prev=>prev+1);
            }
            else {
                setModalText(`La respuesta correcta es: ${answers ? [correctAnswer ? correctAnswer : 0] : ""}`)
            }
        }
        else {
            switch (questionNum) {
                case 1:
                    if (responseArea.current.value.includes("escalera") || responseArea.current.value.includes("escaleras")) {
                        setModalText("Correcto!");
                        setCorrectQuestionNum(prev=>prev+1);
                    } else {
                        setModalText("Me temo que no es la respuesta correcta");
                    }
                    break;
                case 2:
                    if (responseArea.current.value.includes("ojos") || responseArea.current.value.includes("parpados")) {
                        setModalText("Efectivamente, lo primero es abrir los ojos");
                        setCorrectQuestionNum(prev=>prev+1);
                    } else {
                        setModalText("Me temo que no es la respuesta correcta");
                    }
                    break;
                case 4:
                    if (responseArea.current.value.includes("alfabetico") || responseArea.current.value.includes("alfabético") || responseArea.current.value.includes("alfabeticamente") || responseArea.current.value.includes("alfabéticamente")) {
                        setModalText("Eso es!! Están ordenados alfabéticamente 🥳");
                        setCorrectQuestionNum(prev=>prev+1);
                    } else {
                        setModalText("Me temo que no es la respuesta correcta");
                    }
                    break;
            
                default:
                    break;
            }
            responseArea.current.value="";
        }
    }

    return (
        <article className=" text-green-500 px-12 py-8 flex flex-col gap-6">
            <form action="" onSubmit={textAreaAnswer} className='flex flex-col gap-4 items-start justify-center'>
                {answerChooseType ?
                    answers?.map((answer, i) => {
                        return (
                            <div className='flex gap-4'>
                                <input type="radio" name={`res`} id="" value={i} />
                                <p>{answer}</p>
                            </div>
                        )
                    })
                    :
                    <textarea className='border-2 border-solid border-white bg-transparent focus:outline-none p-3 placeholder-green-400/50z ' rows={4} cols={30} placeholder='Escribe una acción' ref={responseArea} />
                }
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <input type='submit' className='bg-green-800/50 w-24 h-8 rounded-lg cursor-pointer' />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
                            <AlertDialogDescription>
                                {modalText}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                            <AlertDialogAction onClick={()=>{setQuestionNum(prev => prev + 1)}}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </form>
        </article>
    )
}

export default Answers;