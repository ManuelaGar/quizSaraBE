import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './screens/Quiz'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
