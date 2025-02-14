import { render, screen, fireEvent } from "@testing-library/react"
import { expect, test } from "vitest"
import { logRoles } from "@testing-library/react"
import App from "./App"

test("App contains correct heading", () => {
  const { container } = render(<App />)
  logRoles(container)

  const headingElement = screen.getByText(/learn react/i)
  expect(headingElement).toBeInTheDocument()
})

test("button click flow", () => {
  render(<App />)
  const buttonElement = screen.getByRole("button", { name: /blue/i })

  expect(buttonElement).toHaveClass("red")

  fireEvent.click(buttonElement)

  expect(buttonElement).toHaveTextContent(/red/i)

  expect(buttonElement).toHaveClass("blue")
})
