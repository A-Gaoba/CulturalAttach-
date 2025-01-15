import axios from "axios";

export const BASE_URL = import.meta.env.DEV ? "http://localhost:5000/api" : "https://moulhaqia.vercel.app/api";

const myAxios = axios.create({
	baseURL: BASE_URL,
});

// Request interceptor to add the token to the headers
myAxios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		console.log(token)
		if (token) {
			const modifiedToken = token.slice(1, -1);
			config.headers.Authorization = `Bearer ${modifiedToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default myAxios;
