import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "."

describe("Component: SelcetList", () => {
  it("should return selected city details", () => {
    const data = [
      { id: 1, name: "Campinas", latitude: 123, longitude: 456 },
      { id: 2, name: "Campo Grande", latitude: 789, longitude: 123 },
    ]
    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />)

    const selectedCity = screen.getByText(/campo/i)

    fireEvent.press(selectedCity)
  })
})
