import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Buttons from './components/Buttons.jsx'
import Card from './components/Card.jsx'
import data from './data/data.js'

function App() {


  return (
    <>
     <Header />
     <Buttons />
     <Card {...data} />
    </>
  )
}

export default App
