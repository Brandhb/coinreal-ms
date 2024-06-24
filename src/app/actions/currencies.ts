import axios from "axios";

export const getCurrenciesFromDS = async () => {
    const response = await axios.get("/api/currencies/browse-trending");
    return response.data;
}
