import React from "react"

function InputItem({ children, inputValue, onInputChange, id }) {
  const handleChange = event => {
    onInputChange(id, event.target.value)
  }

  return (
    <p>
      <label>{children}</label>
      <input type="number" required value={inputValue} onChange={handleChange} />
    </p>
  )
}

export default InputItem
