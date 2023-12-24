import React from "react"
import './App.css'
import Header from '../components/Header.jsx'
import Buttons from '../components/Buttons.jsx'
import Card from '../components/Card.jsx'
import data from '../data/data.js'

function App() {

  const [selected, setSelected] = React.useState({
    allProducts: true,
    availableNow: false
})

  const MAX_ITEMS = 10;
  const cards = data.slice(0, MAX_ITEMS).map((item) => {
    return (
      <Card {...item} selected={selected}/>
    )
   })

  return (
    <>
      <main className="main-container">
        <div className="card-over-container">
          <Header />
          <Buttons selected={selected} setSelected={setSelected} />
          <div className="card-grid-container">
          {cards}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
