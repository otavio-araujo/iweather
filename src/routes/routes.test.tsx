import { render, waitFor, screen, act } from "@__tests__/utils/customRender"
import { Routes } from "."
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWheaterAPIResponse"
import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"

describe("Routes: Routes", () => {
  it("should be rendered Search screen when no city is defined", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.getByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })

  it("should be rendered Dashboard screen when a city is defined", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    const city = {
      id: "1",
      name: "Campinas",
      latitude: 123,
      longitude: 456,
    }

    await saveStorageCity(city)

    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(city.name)
    expect(title).toBeTruthy()
  })
})
