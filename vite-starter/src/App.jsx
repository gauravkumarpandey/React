import { useState } from "react"
import "./App.css"

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const nextColor = buttonColor === "red" ? "blue" : "red"
  const clickHandler = () => {
    setButtonColor(nextColor)
  }
  return (
    <div>
      <h1>I am gonna learn React Testing Library</h1>
      <button
        className={buttonColor}
        onClick={clickHandler}>
        {" "}
        Change to {nextColor}
      </button>
    </div>
  )
}

export default App
