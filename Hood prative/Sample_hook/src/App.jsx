import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Useeffect from './Component/Useeffect'
import Counter from './Component/Counter'
import Componet1 from './Component/Componet1'
import UseState from './Component/UseState'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Useeffect /> */}
      {/* <Counter /> */}
      {/* <Componet1 /> */}
      <UseState />
        
    </>
  )
}

export default App
