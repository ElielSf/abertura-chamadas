import { useState } from 'react'
import Chamadas from './components/Chamadas.jsx'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Chamadas />
    </div>
  )
}

export default App
