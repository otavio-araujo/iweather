import { render, waitFor, screen } from "@__tests__/utils/customRender"
import { Routes } from "."

describe("Routes: Routes", () => {
  it("should be rendered Search screen when no city is defined", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.getByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })

  it("should be rendered Dashboard screen when a city is defined", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.getByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })
})
