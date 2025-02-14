import { useState } from "react"

function Player({ initialName, symbol, isActive, onPlayerChange }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = event => setPlayerName(event.target.value)

  const playerNameContent = isEditing ? <input value={playerName} onChange={handleChange} /> : <span className="player-name">{[playerName]}</span>

  const handleEditClick = () => {
    setIsEditing(editing => !editing)
    if (isEditing) {
      onPlayerChange(symbol, playerName)
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player
