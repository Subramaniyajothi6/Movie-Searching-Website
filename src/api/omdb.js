import axios from "axios";

const baseURL = "https://www.omdbapi.com/";

const instance = axios.create({ 
    baseURL,
    params: {
        apikey: "d987e76f",
    },
    headers: {
        "Content-Type": "application/json",
    },
    timeout:5000
});
export default instance