import InputItem from "./InputItem.jsx"
import "./user-input.css"

function UserInput({ userInput, handleUserInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputItem id="initialInvestment" children="Initial Investment" inputValue={userInput.initialInvestment} onInputChange={handleUserInputChange} />
        <InputItem id="annualInvestment" children="Annual Investment" inputValue={userInput.annualInvestment} onInputChange={handleUserInputChange} />
      </div>
      <div className="input-group">
        <InputItem id="expectedReturn" children="Expected Return" inputValue={userInput.expectedReturn} onInputChange={handleUserInputChange} />
        <InputItem id="duration" children="Duration" inputValue={userInput.duration} onInputChange={handleUserInputChange} />
      </div>
    </section>
  )
}

export default UserInput
