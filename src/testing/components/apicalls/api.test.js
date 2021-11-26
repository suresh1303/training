import axios from "axios";

import { BASE_URL, fetchUsers } from "./apicall";

jest.mock("axios");

describe("Get API Data", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {

      const users = [
        {
          "id": 4,
          "name": "Sarvin Verma",
          "email": "verma_sarvin@bernhard-padberg.co",
          "gender": "female",
          "status": "active"
        },
        {
          "id": 5,
          "name": "Jagmeet Panicker",
          "email": "jagmeet_panicker@graham.net",
          "gender": "female",
          "status": "active"
        }
      ];
      axios.get.mockResolvedValueOnce(users);

      const result = await fetchUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users?page=1`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {

      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users?page=1`);
      expect(result).toEqual([]);
    });
  });
});