export function resultBank (a) {
  console.log('1', a.toString())

  switch (a.toString()) {
    case 'mucho,popular,fans,equipo' :
      return {
        score: 30,
        text: 'Tenés todas las de ganar'
      }

    case 'mucho,popular,fans,sin equipo':
      return {
        score: 15,
        text: 'No necesitas crear mucho porque no tienes con qué, pero igual tranquilo porque con lo poco la gente igual te amará'
      }

    case 'mucho,popular,sin fans,equipo':
      return {
        score: 30,
        text: 'Métale acelerador a eso porque tiene todas las de ganar solo le falta salir a conseguir la gente'
      }

    case 'mucho,popular,sin fans,sin equipo':
      return {
        score: 12,
        text: 'Haga lo mínimo pero hágalo excepcional. Tiene mucho que decir y su tema es popular, exprima sus habilidades y salga a buscar esos fans'
      }

    case 'mucho,no popular,fans,equipo':
      return {
        score: 21,
        text: 'Aunque tú tema no es popular tienes todas las herramientas para crear buen contenido porque igual tienes gente que te quiere, equipo que te ayude y mucho por contar. Crea con constancia que los fans ya irán llegando'
      }

    case 'mucho,no popular,fans,sin equipo':
      return {
        score: 15,
        text: 'Haz un esfuercito más allá de lo mínimo. Reta tus capacidades para materializar todo eso que tienes por contar y entregarselo a los fans que te esperan. No necesitas desvivirte por ser popular, necesitas desvivirte por mantener a los que ya te quieren'
      }

    case 'mucho,no popular,sin fans,equipo':
      return {
        score: 24,
        text: 'Metale chancla a eso, tiene el equipo y tiene mucho por contar. genere contenido constante para conseguir fans y volverse popular'
      }

    case 'mucho,no popular,sin fans,sin equipo':
      return {
        score: 12,
        text: 'Muy lindas tus intenciones pero lo unico que tienes es tema: te falta equipo, fans y relevancia. No te quemes, trabaja de a pocos con lo que tienes'
      }

    case 'poco,popular,fans,equipo':
      return {
        score: 15,
        text: 'No necesitas quemarte las pestañas. Cuenta lo poco de la mejor manera, tienes con que'
      }

    case 'poco,popular,fans,sin equipo':
      return {
        score: 12,
        text: 'Date la pela para cumplir con lo minimo. tu tema gusta un montón y ya tienes gente allá afuera esperandote. Esfuerzate sin romperte'
      }

    case 'poco,popular,sin fans,equipo':
      return {
        score: 18,
        text: 'Metele acelerador, aunque tienes poco por contar, cuentas con un equipo que te apoye y con la ventaja de tratar un tema popular: con juicio alcanzarás grandes resultados sin necesidad de romperte el coco'
      }

    case 'poco,popular,sin fans,sin equipo':
      return {
        score: 9,
        text: 'No tienes herramientas ni gente pero tu tema gusta. haz el minímo esfuerzo e intenta hacerlo de la mejor manera'
      }

    case 'poco,no popular,fans,equipo':
      return {
        score: 18,
        text: 'Tienes poco por contar y a pesar de que tu tema no es popular, tienes fans y tienes equipo, así que busca maneras de que tu tema se vea relevante y apoyate en la gente que ya tienes para impulsar lo que haces'
      }

    case 'poco,no popular,fans,sin equipo':
      return {
        score: 12,
        text: 'Haz un poco más que el mínimo esfuerzo, a pesar de todo el viento en contra tienes fans que te esperan, así que procura mantenerlos interesados'
      }

    case 'poco,no popular,sin fans,equipo':
      return {
        score: 18,
        text: 'Esfuerzate, tienes poco por contar, pero tienes el equipo para lograr exprimir al máximo ese poco. Si creas contenido constante y juicioso los fans llegarán para hacerte popular'
      }

    case 'poco,no popular,sin fans,sin equipo':
      return {
        score: 9,
        text: 'Usted está cagado y con el agua lejos: haga el mínimo esfuerzo para flotar y sobrevivir'
      }

    default:
      return {
        score: 0,
        text: 'Error!'
      }
  }
}
