import { render, screen } from "@testing-library/react-native"
import { NextDays } from "."
import ClearDay from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
  it("should render next five days", () => {
    const data = [
      {
        day: "21/11",
        min: "20",
        max: "30",
        icon: ClearDay,
        weather: "Céu limpo",
      },
      {
        day: "22/11",
        min: "20",
        max: "30",
        icon: ClearDay,
        weather: "Céu limpo",
      },
      {
        day: "23/11",
        min: "20",
        max: "30",
        icon: ClearDay,
        weather: "Céu limpo",
      },
      {
        day: "24/11",
        min: "20",
        max: "30",
        icon: ClearDay,
        weather: "Céu limpo",
      },
      {
        day: "25/11",
        min: "20",
        max: "30",
        icon: ClearDay,
        weather: "Céu limpo",
      },
    ]

    render(<NextDays data={data} />)

    expect(screen.getByText("21/11")).toBeTruthy()
  })
})
