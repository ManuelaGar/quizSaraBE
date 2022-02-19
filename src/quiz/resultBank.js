import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'
import img9 from '../assets/images/9.png'
import img10 from '../assets/images/10.png'
import img11 from '../assets/images/11.png'
import img12 from '../assets/images/12.png'
import img13 from '../assets/images/13.png'
import img14 from '../assets/images/14.png'
import img15 from '../assets/images/15.png'
import img16 from '../assets/images/16.png'

export function resultBank (a) {
  console.log('1', a.toString())

  switch (a.toString()) {
    case 'mucho,si,si,si' :
      return {
        score: 30,
        text: 'Tenés todas las de ganar',
        img: <img className='result-img' src={img1} alt='result-img' />
      }

    case 'mucho,si,si,no':
      return {
        score: 15,
        text: 'No necesitas crear mucho porque no tienes con qué, pero igual tranquilo porque con lo poco la gente igual te amará',
        img: <img className='result-img' src={img2} alt='result-img' />
      }

    case 'mucho,si,no,si':
      return {
        score: 30,
        text: 'Métale acelerador a eso porque tiene todas las de ganar solo le falta salir a conseguir la gente',
        img: <img className='result-img' src={img3} alt='result-img' />
      }

    case 'mucho,si,no,no':
      return {
        score: 12,
        text: 'Haga lo mínimo pero hágalo excepcional. Tiene mucho que decir y su tema es popular, exprima sus habilidades y salga a buscar esos fans',
        img: <img className='result-img' src={img4} alt='result-img' />
      }

    case 'mucho,no,si,si':
      return {
        score: 21,
        text: 'Aunque tú tema no es popular tienes todas las herramientas para crear buen contenido porque igual tienes gente que te quiere, equipo que te ayude y mucho por contar. Crea con constancia que los fans ya irán llegando',
        img: <img className='result-img' src={img5} alt='result-img' />
      }

    case 'mucho,no,si,no':
      return {
        score: 15,
        text: 'Haz un esfuercito más allá de lo mínimo. Reta tus capacidades para materializar todo eso que tienes por contar y entregarselo a los fans que te esperan. No necesitas desvivirte por ser popular, necesitas desvivirte por mantener a los que ya te quieren',
        img: <img className='result-img' src={img6} alt='result-img' />
      }

    case 'mucho,no,no,si':
      return {
        score: 24,
        text: 'Metale chancla a eso, tiene el equipo y tiene mucho por contar. genere contenido constante para conseguir fans y volverse popular',
        img: <img className='result-img' src={img7} alt='result-img' />
      }

    case 'mucho,no,no,no':
      return {
        score: 12,
        text: 'Muy lindas tus intenciones pero lo unico que tienes es tema: te falta equipo, fans y relevancia. No te quemes, trabaja de a pocos con lo que tienes',
        img: <img className='result-img' src={img8} alt='result-img' />
      }

    case 'poco,si,si,si':
      return {
        score: 15,
        text: 'No necesitas quemarte las pestañas. Cuenta lo poco de la mejor manera, tienes con que',
        img: <img className='result-img' src={img9} alt='result-img' />
      }

    case 'poco,si,si,no':
      return {
        score: 12,
        text: 'Date la pela para cumplir con lo minimo. tu tema gusta un montón y ya tienes gente allá afuera esperandote. Esfuerzate sin romperte',
        img: <img className='result-img' src={img10} alt='result-img' />
      }

    case 'poco,si,no,si':
      return {
        score: 18,
        text: 'Metele acelerador, aunque tienes poco por contar, cuentas con un equipo que te apoye y con la ventaja de tratar un tema popular: con juicio alcanzarás grandes resultados sin necesidad de romperte el coco',
        img: <img className='result-img' src={img11} alt='result-img' />
      }

    case 'poco,si,no,no':
      return {
        score: 9,
        text: 'No tienes herramientas ni gente pero tu tema gusta. haz el minímo esfuerzo e intenta hacerlo de la mejor manera',
        img: <img className='result-img' src={img12} alt='result-img' />
      }

    case 'poco,no,si,si':
      return {
        score: 18,
        text: 'Tienes poco por contar y a pesar de que tu tema no es popular, tienes fans y tienes equipo, así que busca maneras de que tu tema se vea relevante y apoyate en la gente que ya tienes para impulsar lo que haces',
        img: <img className='result-img' src={img13} alt='result-img' />
      }

    case 'poco,no,si,no':
      return {
        score: 12,
        text: 'Haz un poco más que el mínimo esfuerzo, a pesar de todo el viento en contra tienes fans que te esperan, así que procura mantenerlos interesados',
        img: <img className='result-img' src={img14} alt='result-img' />
      }

    case 'poco,no,no,si':
      return {
        score: 18,
        text: 'Esfuerzate, tienes poco por contar, pero tienes el equipo para lograr exprimir al máximo ese poco. Si creas contenido constante y juicioso los fans llegarán para hacerte popular',
        img: <img className='result-img' src={img15} alt='result-img' />
      }

    case 'poco,no,no,no':
      return {
        score: 9,
        text: 'Usted está cagado y con el agua lejos: haga el mínimo esfuerzo para flotar y sobrevivir',
        img: <img className='result-img' src={img16} alt='result-img' />
      }

    default:
      return {
        score: 0,
        text: 'Error!',
        img: ''
      }
  }
}
