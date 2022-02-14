import { useNavigate } from 'react-router-dom'

import sun from '../../assets/icons/sun2.svg'
import webBg from '../../assets/images/web-bg.png'
import mobileBg from '../../assets/images/mobile-bg.png'
import './Home.css'

function Home () {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <div className='home-container'>
        <img className='berer-bg' src={window.innerWidth > 1028 ? webBg : mobileBg} alt='berer-bg' />
        <img className='sun' src={sun} alt='sun' />
        {window.innerWidth <= 1028 && <p className='top'>BERER QUESTIONS . BERER ANSWERS</p>}
        <h1>Bienvenido al <span className='rounded-txt'>oráculo</span> de publicaciones</h1>
        <div className='center-container'>
          <div className='home-btn-container'>
            <button className='home-btn' onClick={() => navigate('/email')}>EMPEZAR</button>
          </div>
        </div>
        {window.innerWidth <= 1028 && <p className='bottom'>BERER . BERER . BERER . BERER . BERER</p>}
      </div>
    </div>
  )
}

export default Home
