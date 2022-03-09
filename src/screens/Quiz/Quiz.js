import React, { useState } from 'react'

import { getQuestions } from '../../quiz/getQuestions'
import { resultBank } from '../../quiz/resultBank'
import circles from '../../assets/icons/circles.svg'
import spiral from '../../assets/icons/spiral.svg'
import sunBlack from '../../assets/icons/sun-black.svg'
import beBerer from '../../assets/icons/be-berer.svg'
import eye from '../../assets/icons/eye.svg'
import arrow from '../../assets/icons/arrow.svg'
import bererCircle from '../../assets/icons/we-do-it-berer.svg'
import sun1 from '../../assets/icons/sun1.svg'
import sun2 from '../../assets/icons/sun2.svg'
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
        {question < 4 && <p className='question-num'>{'00' + (question + 1)}</p>}
        {question === 0 && <img className='spiral' src={spiral} alt='spiral' />}
        {(question === 0 || question === 2) && <img className='arrow rotateimg90' src={arrow} alt='arrow' />}
        {question === 1 &&
          <div>
            <img className='sun-black-1' src={sunBlack} alt='sun-black-1' />
            <img className='sun-black-2' src={sunBlack} alt='sun-black-2' />
            <img className='be-berer' src={beBerer} alt='be-berer' />
            <img className='eye' src={eye} alt='eye' />
          </div>}
        {question === 2 &&
          <div>
            <img className='berer-circle' src={bererCircle} alt='berer-circle' />
            <img className='sun-black-3' src={sunBlack} alt='sun-black-3' />
            <img className='sun-2' src={sun2} alt='sun-2' />
          </div>}
        {question === 3 &&
          <div>
            <img className='sun-1' src={sun1} alt='sun-1' />
            <img className='spiral2 rotateimg180' src={spiral} alt='spiral' />
            <img className='arrow-2' src={arrow} alt='arrow-2' />
          </div>}
        {question < 4
          ? (
            <div className='content'>
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
              <img className='circles' src={circles} alt='circles' />
            </div>
            )
          : (
            <div className='content2'>
              {window.innerWidth <= 1028 && <p className='top'>BE CREATIVE . BE SMART . BE BERER</p>}
              <div className='score-container'>
                <img className='sun-3' src={sun1} alt='sun-3' />
                <p className='score'>{resultBank(answer).score} <span className='underline'>VECES</span></p>
              </div>
              <div className='img-container'>
                {resultBank(answer).img}
              </div>
              <p className='score-text'>{resultBank(answer).text}</p>
              <div className='button-restart'>
                <button className='btn' type='button' name='reset' onClick={() => handleReset()}>
                  Reiniciar
                </button>
              </div>
              {window.innerWidth <= 1028 && <p className='bottom'>BERER . BERER . BERER . BERER . BERER</p>}
            </div>
            )}
      </div>
    </div>
  )
}

export default Quiz
