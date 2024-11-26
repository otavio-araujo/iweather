import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@__tests__/utils/customRender"
import { Search } from "."
import { api } from "@services/api"
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse"

describe("Screens: Search", () => {
  it("should be rendered city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })
    render(<Search />)

    const searchInput = screen.getByTestId("search-input")
    fireEvent.changeText(searchInput, "Campinas")

    console.log(searchInput)

    // const option = await waitFor(() => screen.findByText("Campinas"))
    // expect(option).toBeTruthy()
  })
})
