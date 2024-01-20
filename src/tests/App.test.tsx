import { render, screen } from "@testing-library/react"
import App from "../App"

it("should have hello world", () => {
  render(<App />)
  const message = screen.queryByText(/Vite React TypeScript Starter Pack/i)
  expect(message).toBeVisible()
})
