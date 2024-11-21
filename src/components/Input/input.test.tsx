import { render, screen } from "@testing-library/react-native"

import { Input } from "@components/Input"

describe("Component: Input", () => {
  it("should render without acitvity indicator when isLoading is false or undefined", () => {
    render(<Input />)

    const activityIndicator = screen.queryByTestId("activity-indicator")

    expect(activityIndicator).toBeNull()
  })
})
