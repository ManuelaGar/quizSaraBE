import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return <div className='home'>
  <div className='home-container'>
    <h1>Bienvenido al oráculo de publicaciones</h1>
    <div className='home-btn-container'>
      <button className='home-btn' onClick={() => navigate('/quiz')}>EMPEZAR</button>
    </div>
    </div>
  </div>
}

export default Home