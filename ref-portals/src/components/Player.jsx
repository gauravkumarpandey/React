import { useState, useRef } from "react"

export default function Player() {
  const playerName = useRef()
  const [enteredName, setEntertedName] = useState("")

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button
          onClick={() => {
            setEntertedName(playerName.current.value)
          }}>
          Set Name
        </button>
      </p>
    </section>
  )
}
