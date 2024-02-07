import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


// add  darkMode:"class", in tailwindConfig file

function App() {

  return (
    <UserContextProvider>
      <h1>react mini context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
