import React, { useState } from 'react'
import { getQuestions } from '../quiz/getQuestions'
import { capitalizeFirstLetter } from '../helpers/style_string'
import { resultBank } from '../quiz/resultBank'

function Quiz() {
  const [answer, setAnswer] = useState([])
  const [question, setQuestion] = useState(0)
  const questionBank = getQuestions()

  function handleClick(e) {
    e.preventDefault()
    setAnswer((prevAnswer) => [...prevAnswer, e.target.value])
    setQuestion((prevQuestion) => ++prevQuestion)
  }

  function handleReset() {
    setQuestion(0)
    setAnswer([])
  }

  return (
    <div className="quiz-container">
      {question < 4 ? (
        <div>
          <h1 className="question">{questionBank[question].questionText}</h1>
          <button
            type="button"
            name="button1"
            value={questionBank[question].questionAnswer[0]}
            onClick={(e) => handleClick(e)}
          >
            {capitalizeFirstLetter(questionBank[question].questionAnswer[0])}
          </button>
          <button
            type="button"
            name="button2"
            value={questionBank[question].questionAnswer[1]}
            onClick={(e) => handleClick(e)}
          >
            {capitalizeFirstLetter(questionBank[question].questionAnswer[1])}
          </button>
        </div>
      ) : (
        <div>
          <p>{resultBank(answer).score}</p>
          <p>{resultBank(answer).text}</p>
          <button type="button" name="reset" onClick={() => handleReset()}>
            Reiniciar
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
