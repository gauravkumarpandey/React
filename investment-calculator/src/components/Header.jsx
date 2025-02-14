import React from "react"
import InvestmentImage from "../assets/investment-calculator-logo.png"
import "./header.css"

function Header({ title }) {
  return (
    <header id="header">
      <img src={InvestmentImage} alt={title}></img>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
