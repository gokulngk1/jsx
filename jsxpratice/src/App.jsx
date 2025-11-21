import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Gokul";
  const age = 22;

  return (
    // <>
    //   <h1>Hello</h1>
    // </>
    <div>
      <h1>Hello {name}</h1>
      <p>Your age is {age + 1}</p>
    </div>
  )
}

export default App
