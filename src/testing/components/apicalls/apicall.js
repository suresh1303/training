import axios from "axios";

export const BASE_URL = "https://gorest.co.in/public-api";

export const fetchUsers = async () => {
    try {
        return await axios.get(`${BASE_URL}/users?page=1`);

    } catch (e) {
        return [];
    }
};