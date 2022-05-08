import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import { CartProvider } from './Context/Cartprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <CartProvider>

      <Navbar/>

  {/* how do we access soeminformation which is inside the file */}
     <Body/>
      </CartProvider>

    </div>
  )
}

export default App
