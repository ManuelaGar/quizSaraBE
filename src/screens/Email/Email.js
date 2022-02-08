import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import eye from '../../assets/icons/eye.svg'
import spiral from '../../assets/icons/spiral.svg'
import './Email.css'

function Email () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  function handleChange (event) {
    const { value } = event.target
    setEmail(value)
    // TODO: save in db?
  }

  return (
    <div className='home-container email-container'>
      <img className='eye' src={eye} alt='eye' />
      <img className='spiral' src={spiral} alt='spiral' />
      {window.innerWidth <= 1028 && <p className='top'>BERER QUESTIONS . BERER ANSWERS</p>}
      <form>
        <h2>Deja tu correo:</h2>
        <input
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required
        />
        <p className='bold-txt'>Y empieza a descubrir cuántas veces deberías <span className='rounded-txt'>publicar</span> al mes</p>
        <p className='email-txt'>¿Preparado?<br />en sus marcas, listos...</p>
        <div className='center-container'>
          <div className='home-btn-container'>
            <button className='home-btn' onClick={() => navigate('/quiz')}>EMPEZAR</button>
          </div>
        </div>
      </form>
      {window.innerWidth <= 1028 && <p className='bottom'>BERER . BERER . BERER . BERER . BERER</p>}
    </div>
  )
}

export default Email
