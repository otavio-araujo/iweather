import { render } from "@testing-library/react-native"
import { Routes } from "."

describe("Routes: Routes", () => {
  it("should be rendered Search screen when no city is defined", () => {
    render(<Routes />)
  })
})
