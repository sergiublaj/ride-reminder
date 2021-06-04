import axios from "axios";
import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from "../actions/types";

export const loadUser = async () => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");
		const data = res.data;

		dispatch({
			type: USER_LOADED,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

export const loginUser = async (formData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const res = await axios.post("/api/auth", formData, config);
		const data = res.data;

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});

		loadUser();
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.msg,
		});
	}
};
