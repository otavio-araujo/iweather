import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, saveStorageCity } from "./cityStorage"

describe("Storage: cityStorage", () => {
  it("should return null when storage is empty", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should return stored city", async () => {
    const city: CityProps = {
      id: "1",
      name: "Campinas",
      latitude: 123,
      longitude: 456,
    }

    await saveStorageCity(city)

    const response = await getStorageCity()

    expect(response).toEqual(city)
  })
})
