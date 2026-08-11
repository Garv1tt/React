import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name: "Garvit",
    age: 17
  }
  let myArr =[1,2,3]
  return (
    <>
      <h1 className='bg-red-600 p-5 rounded-xl text-green-500'>Tailwind Test</h1>
      <Card name="Garvit" Price= "12" SomeObj={myObj} SomeArr={myArr}/>
    </>
  )
}

export default App
// we direct cannot add array or object through props but we can declarre them outside and then use them