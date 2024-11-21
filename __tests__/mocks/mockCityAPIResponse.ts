import { CityAPIResponse } from "@services/getCityByNameService"

export const mockCityAPIResponse: CityAPIResponse = {
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
