'use client'
import React, { useState } from 'react'
import Answers from './Answers'
import AnswerContextProvider from './context';

const Questions = () => {
    const [questionNum,setQuestionNum] = useState<number>(0);
    const [correctQuestionNum,setCorrectQuestionNum] = useState<number>(0);

    const questions = [
        {question:"¿Que pesa más, un kilo de plumas o de hierro?",
        answerChooseType: true,
        answers:["Plumas","Hierro","Pesan lo mismo"],
        correctAnswer:2},
        {question:"¿Qué va hacia arriba y hacia abajo pero siempre permanece en el mismo lugar?",
        answerChooseType: false},
        {question:"¿Que es lo primero que haces al despertarte?",
        answerChooseType: false},
        {question:"¿Por qué el elefante come cacahuetes?",
        answerChooseType: true,
        answers:["Porque los niños se los tiran","Porque es alérgico a lo demás","Porque tiene hambre","Porque le da la gana"],
        correctAnswer:2},
        {question:"¿Qué hace que el número 542.986.731 sea único?",
        answerChooseType: false},
      ];

      if (questionNum < questions.length) {
          return (
            <AnswerContextProvider>
              <article className=" text-green-500 px-12 py-8 flex flex-col gap-6 items-center animate-questions">
                  <h3>{(questionNum+1) +"/"+ questions.length +"-"+  questions[questionNum].question}</h3>
                  <Answers answerChooseType={questions[questionNum].answerChooseType} answers={questions[questionNum].answers} setQuestionNum={setQuestionNum} correctAnswer={questions[questionNum].correctAnswer} questionNum={questionNum} setCorrectQuestionNum={setCorrectQuestionNum} />
              </article>
            </AnswerContextProvider>
          )
      }else{
        return(
            <article className=" text-green-500 px-12 py-8 flex items-center text-[4rem]">
                {correctQuestionNum<questions.length?
                    <h1 className='text-red-500'>{correctQuestionNum}</h1>
                    :
                    <h1 className='text-green-500'>{correctQuestionNum}</h1>
                }
                <h1>/{questions.length} acertadas</h1>
             </article>
        )
      }
}

export default Questions