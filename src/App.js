import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Quiz from './screens/Quiz/Quiz'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
