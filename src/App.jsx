import { useState } from 'react'
import './App.css'
import Header from '../components/Header.jsx'
import Buttons from '../components/Buttons.jsx'
import Card from '../components/Card.jsx'
import data from '/Users/mac/Scrimba/simple-coffee-listing/data/data.js'

function App() {
  const MAX_ITEMS = 10;
  const cards = data.slice(0, MAX_ITEMS).map((item) => {
    return (
      <Card {...item} />
    )
   })

  return (
    <>
     <Header />
     <Buttons />
     {cards}
    </>
  )
}

export default App
