import { Quiz } from './Quiz.js'

export function getQuestions () {
  return [
    new Quiz(
      <h1 className='question'>¿Mi marca tiene <span className='rounded-txt-2'>mucho</span> por contar?</h1>,
      ['mucho', 'poco']
    ),
    new Quiz(
      <h1 className='question'>¿Mi tema es<br />popular?</h1>,
      ['si', 'no']
    ),
    new Quiz(
      <h1 className='question'>¿Ya tengo <span className='underline'>fans</span>?</h1>,
      ['si', 'no']
    ),
    new Quiz(
      <h1 className='question smaller-question'>¿Cuento con equipo<br />humano para <span className='rounded-txt'>desarrollar</span><br />el contenido?</h1>,
      ['si', 'no']
    )
  ]
}
