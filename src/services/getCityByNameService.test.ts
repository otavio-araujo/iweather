import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe("API: getCityByName ", () => {
  it("should return city details", async () => {
    const data = {
      id: "1",
      name: "São Paulo",
      coord: {
        lon: 123,
        lat: 456,
      },
      sys: {
        country: "BR",
      },
    }
    jest.spyOn(api, "get").mockResolvedValue({ data })

    const response = await getCityByNameService("São Paulo")
    expect(response.length).toBeGreaterThan(0)
  })
})
