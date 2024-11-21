import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "."
import { CityProps } from "@services/getCityByNameService"

describe("Component: SelcetList", () => {
  it("should return selected city details", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 123 },
    ]

    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)
    const selectedCity = screen.getByText("Campinas")

    fireEvent.press(selectedCity)
    expect(onPress).toHaveBeenCalled()
    expect(onPress).toHaveBeenCalledWith(data[0])
  })

  it("should not return option when data is empty", () => {
    const data = [] as CityProps[]

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />)

    const options = screen.queryByTestId("select-list-options")

    expect(options.children).toHaveLength(0)
  })
})
