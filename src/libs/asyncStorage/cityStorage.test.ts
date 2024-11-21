import { getStorageCity } from "./cityStorage"

describe("Storage: cityStorage", () => {
  it("should return null when storage is empty", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
