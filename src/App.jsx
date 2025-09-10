import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/boxes/table'
import Heading from './components/heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading />
      <Table />
    </div>
  )
}

export default App
