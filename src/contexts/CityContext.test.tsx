import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "./CityContext"
import { CityProps } from "@services/getCityByNameService"

describe("Context: City", () => {
  it("should be changed selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Campinas",
          latitude: 123,
          longitude: 456,
        } as CityProps)
      )
    )

    expect(result.current.city?.name).toBe("Campinas")
  })
})
