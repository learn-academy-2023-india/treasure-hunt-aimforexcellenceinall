import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [clickedSquares, setClickedSquares] = useState(new Set())

  const handleClick = (id) => {
    // do nothing if the square has already been clicked
    if (clickedSquares.has(id)) {
      return
    }

    // assign a random number to the treasure
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)

    // if treasure is selected
    if (treasureLocation === id) {
      board[id] = "🏖️"
    }
    // else if return the bomb
    else if (bombLocation === treasureLocation || bombLocation === id) {
      board[id] = "☄️"
    }
    // else return the default emoji
    else {
      board[id] = "🌎"
    }

    // mark the square as clicked
    setClickedSquares((prevClickedSquares) => new Set(prevClickedSquares.add(id)))
    setBoard([...board])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick} />
    </>
  )
}

export default App
