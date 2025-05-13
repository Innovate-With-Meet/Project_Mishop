import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LandingPage } from './LandingPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}> </Route>
        <Route path="/Landing" element={<LandingPage />}> </Route>
      </Routes>
      {/*  */}
    </>
  )
}

export default App
