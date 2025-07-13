import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Content from './components/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
    <Header/>
    <Content/>
      
    </div>
  )
}

export default App
