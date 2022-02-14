import React, { useState } from 'react'

import { getQuestions } from '../../quiz/getQuestions'
import { resultBank } from '../../quiz/resultBank'
import circles from '../../assets/icons/circles.svg'
import spiral from '../../assets/icons/spiral.svg'
import arrow from '../../assets/icons/arrow.svg'
// import bererCircle from '../../assets/icons/berer-circle.svg'
import './Quiz.css'

function Quiz () {
  const [answer, setAnswer] = useState([])
  const [question, setQuestion] = useState(0)
  const questionBank = getQuestions()

  function handleClick (e) {
    e.preventDefault()
    setAnswer((prevAnswer) => [...prevAnswer, e.target.value])
    setQuestion((prevQuestion) => ++prevQuestion)
  }

  function handleReset () {
    setQuestion(0)
    setAnswer([])
  }

  return (
    <div className='quiz'>
      <div className='quiz-container'>
        {question < 4 && <p>{'00' + (question + 1)}</p>}
        {question === 0 && <img className='spiral' src={spiral} alt='spiral' />}
        {question < 4
          ? (
            <div className='content'>
              {/* {(question === 0 || question === 3) && <img className='berer-circle' src={bererCircle} alt='berer-circle' />} */}
              {questionBank[question].questionText}
              <div className='buttons'>
                <button
                  className='btn'
                  type='button'
                  name='button1'
                  value={questionBank[question].questionAnswer[0]}
                  onClick={(e) => handleClick(e)}
                >
                  {(questionBank[question].questionAnswer[0]).toUpperCase()}
                </button>
                <button
                  className='btn'
                  type='button'
                  name='button2'
                  value={questionBank[question].questionAnswer[1]}
                  onClick={(e) => handleClick(e)}
                >
                  {(questionBank[question].questionAnswer[1]).toUpperCase()}
                </button>
              </div>
            </div>
            )
          : (
            <div>
              <p>{resultBank(answer).score}</p>
              <p>{resultBank(answer).text}</p>
              <button type='button' name='reset' onClick={() => handleReset()}>
                Reiniciar
              </button>
            </div>
            )}
        {question === 0 && <img className='arrow rotateimg90' src={arrow} alt='arrow' />}
        {question === 3 && <img className='spiral2 rotateimg180' src={spiral} alt='spiral' />}
        <img className='circles' src={circles} alt='circles' />
      </div>
    </div>
  )
}

export default Quiz
