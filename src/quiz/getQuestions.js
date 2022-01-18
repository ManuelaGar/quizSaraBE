import { Quiz } from './Quiz.js'

export function getQuestions () {
  return [
    new Quiz(
      '¿Mi marca tiene mucho por contar? (¿fue fácil o difícil responder Etnaveler?)',
      ['mucho', 'poco']
    ),
    new Quiz(
      '¿Mi tema es popular? (¿es un tema del que muchos hablan o del que muchos gustan?)',
      ['popular', 'no popular']
    ),
    new Quiz(
      '¿Ya tengo fans? (¿tengo una comunidad ya en instagram. Mis seguidores interactúan conmigo?)',
      ['fans', 'sin fans']
    ),
    new Quiz(
      '¿Cuento con equipo humano para desarrollar el contenido? (¿tengo gente con habilidades de diseño, storytelling y estrategia digital?) ',
      ['equipo', 'sin equipo']
    )
  ]
}
