import { useState } from "react"

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./GameOver.jsx"

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}
const deriveActivePlayer = turns => {
  let currentPlayer = "X"

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer
}

const deriveWinner = (gameBoard, players) => {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}

const deriveGameBoard = gameTurns => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]

      return updatedTurns
    })
  }

  const handleRestart = () => setGameTurns([])

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onPlayerChange={handlePlayerNameChange} />
          <Player initialName={PLAYERS.y} symbol="O" isActive={activePlayer === "O"} onPlayerChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
