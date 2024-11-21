import { CityProps } from "@services/getCityByNameService"
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage"

describe("Storage: cityStorage", () => {
  const city: CityProps = {
    id: "1",
    name: "Campinas",
    latitude: 123,
    longitude: 456,
  }

  it("should return null when storage is empty", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should return stored city", async () => {
    await saveStorageCity(city)

    const response = await getStorageCity()

    expect(response).toEqual(city)
  })

  it("should remove stored city", async () => {
    await saveStorageCity(city)
    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
