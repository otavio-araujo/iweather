import { render, screen } from "@testing-library/react-native"
import { Day } from "."
import ClearDay from "@assets/clear_day.svg"

describe("Component: Day", () => {
  test("should render day details", () => {
    render(
      <Day
        data={{
          day: "21/11",
          min: "20",
          max: "30",
          icon: ClearDay,
          weather: "Céu limpo",
        }}
      />
    )

    expect(screen.getByText("21/11")).toBeTruthy()
  })
})
