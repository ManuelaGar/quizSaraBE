import eye from '../../assets/icons/eye.svg'
import spiral from '../../assets/icons/spiral.svg'
import Subscription from '../../components/Subscription/Subscription'
import './Email.css'

function Email () {
  return (
    <div className='home-container email-container'>
      <img className='eye' src={eye} alt='eye' />
      <img className='spiral' src={spiral} alt='spiral' />
      {window.innerWidth <= 1028 && <p className='top'>BERER QUESTIONS . BERER ANSWERS</p>}
      <Subscription />
      {window.innerWidth <= 1028 && <p className='bottom'>BERER . BERER . BERER . BERER . BERER</p>}
    </div>
  )
}

export default Email
