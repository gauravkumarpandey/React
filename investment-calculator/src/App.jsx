import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const handleUserInputChange = (inputIdentifier, updatedValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +updatedValue
      }
    })
  }
  const resultContent = userInput.duration >= 1 ? <Results input={userInput} /> : <p className="center"> Please enter the duration greater then zero!</p>

  return (
    <>
      <Header title="Investment Calculator" />
      <UserInput userInput={userInput} handleUserInputChange={handleUserInputChange} />
      {resultContent}
    </>
  )
}

export default App
