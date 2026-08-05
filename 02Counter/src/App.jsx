import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)   /* very important*/
    const AddValue = function(){
        if(counter<20){
              setCounter(counter + 1);
        }
        else;
    }
    const RemoveValue = function(){
      if(counter > 0){
        setCounter(counter - 1); 
      }
      else;
    }

  return (
<>
    <h1>Project-1</h1>
    <h3>Counter Value: {counter}</h3>
    <button
    onClick={AddValue}>Add Value {counter}</button>
    <br />
    <button
    onClick={RemoveValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
</>
  )
}

export default App
