import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Predict from './Predict'
import Header from './Header'


function App() {
  return (
    <>
      <div className="main">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictions/:code" element={<Predict />} />
        </Routes>
      </div>
    </>
  )
}

export default App
