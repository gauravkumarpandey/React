import React from "react"
import { calculateInvestmentResults, formatter } from "../util/investment.js"

function Results({ input }) {
  const investmentResultData = calculateInvestmentResults(input)
  const initialInvestment = investmentResultData[0].valueEndOfYear - investmentResultData[0].interest - investmentResultData[0].annualInvestment
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResultData.map(yearData => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results
