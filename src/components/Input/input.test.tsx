import { render } from "@testing-library/react-native"

import { Input } from "@components/Input"

describe("Component: Input", () => {
  it("should render without acitvity indicator", () => {
    render(<Input />)
  })
})
