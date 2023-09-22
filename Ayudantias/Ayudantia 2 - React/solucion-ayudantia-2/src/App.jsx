import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  const [showABC, setShowABC] = useState("a")
  const [abcID, setAbcID] = useState(0)

  const handleShowABC = () => {
    const abc = "abcdefghikklmnopqrstuvwxyz"
    
    setShowABC(abc.charAt(abcID + 1))
    if (abcID === 24) {
      setAbcID(-1)
    } else {
      setAbcID(abcID + 1)
    }
  }

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='v-container'>
      <div className='h-container'>
        <Card kind="Nº" value={count} buttonFunction={ () => handleCount()} />
        <Card kind="ABC" value={showABC} buttonFunction={ () => handleShowABC()} />
      </div>
    </div>
  )
}

export default App
