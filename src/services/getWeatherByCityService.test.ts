import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWheaterAPIResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("Service: getWeatherByCity", () => {
  it("should return weather api formatted data", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    await getWeatherByCityService({ latitude: 1, longitude: 1 }).then(
      (response) => {
        expect(response).toHaveProperty("today")
      }
    )
  })
})
