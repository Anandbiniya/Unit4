import { useState } from 'react'
import Res from './Res'
import './App.css'

function App() {
 
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Res/>
    </div>
  )
}

export default App
