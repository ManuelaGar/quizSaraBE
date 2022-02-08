import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Email from './screens/Email/Email'
import Quiz from './screens/Quiz/Quiz'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/email' element={<Email />} />
        <Route exact path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
