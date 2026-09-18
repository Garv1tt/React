import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Login from './assets/Components/Login'
import Profile from './assets/Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello, Wassup!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
