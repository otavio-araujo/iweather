import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "."
import dropIcon from "@assets/drop.svg"

describe("Component: WeatherItem", () => {
  it("should render weather item and shows title and value", () => {
    render(<WeatherItem icon={dropIcon} title="Sensação térmica" value="20%" />)

    expect(screen.getByText("Sensação térmica")).toBeTruthy()
    expect(screen.getByText("20%")).toBeTruthy()
  })
})
