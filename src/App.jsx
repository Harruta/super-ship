import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Stack from './components/Stack'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Body/>
      <Stack/>
    </div>
  )
}

export default App
