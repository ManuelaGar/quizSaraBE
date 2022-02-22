import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewsletterForm ({ status, message, onValidated }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  useEffect(() => {
    let isActive = true

    if (isActive && status === 'success') {
      navigate('/quiz')
    }

    return function cleanup () {
      isActive = false
    }
  }, [status])

  function handleChange (event) {
    const { value } = event.target
    setEmail(value)
  }

  function handleClick (event) {
    event.preventDefault()
    return onValidated({ EMAIL: email })
  }

  return (
    <div>
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
          <button className='home-btn' onClick={handleClick}>EMPEZAR</button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
