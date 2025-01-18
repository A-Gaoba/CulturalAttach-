import axios from "axios";

export const BASE_URL = import.meta.env.DEV ? "http://localhost:5000/api" : "https://moulhaqia.vercel.app/api";

const myAxios = axios.create({
	baseURL: BASE_URL,
});

export default myAxios;
