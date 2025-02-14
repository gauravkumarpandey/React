import viteLogo from "../../assets/vite.svg"
import "./header.css"

const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <header>
      <img src={viteLogo} alt="Vite Logo" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build</p>
    </header>
  )
}

export default Header
