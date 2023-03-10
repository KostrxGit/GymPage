import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.svg'
import './App.css'

function Spp() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={logo} className="logo react" alt="React logo" />
    </div>
  )
}

export default Spp
