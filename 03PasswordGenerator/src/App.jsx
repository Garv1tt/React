import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*()_|?"

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])
  const CopyToClipboard=useCallback(() => {
    PasswordRef.current?.select()
    // PasswordRef.current?.setSelectionRange(0, 5); jus for knowledge
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-15 text-orange-500 bg-gray-500 text-center p-10'>
        <h1 className='text-white text-4xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white my-3'>
              <input 
              type="text"
              placeholder='Password'
              value={password}
              className='outline-none w-full py-1 px-3'
              readOnly
              ref={PasswordRef} />
              <button className='outline-none px-3 py-0.5 shrink-0 text-white bg-blue-400'
              onClick={CopyToClipboard}>COPY</button>
              
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label >Length: {length}</label>
          </div>
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id='NumInput'
          onChange={() => {
            setNumAllowed((prev) => (!prev))
          }} />
          <label htmlFor="NumInput">Numbers</label>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='CharInput'
          onChange={() => {
            setCharAllowed((prev) => (!prev))
          }} />
          <label htmlFor="CharInput">Character</label>
        </div>
        
        
      </div>
    </>
  )
}

export default App  