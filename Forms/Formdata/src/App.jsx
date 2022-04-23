import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Many from './Components/Forms/Many'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Many/>
         </div>
  )
}

export default App
