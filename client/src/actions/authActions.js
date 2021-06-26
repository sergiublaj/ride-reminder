import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	UPDATE_DISTANCE,
	DISTANCE_FAIL,
} from "../actions/types";

// eslint-disable-next-line
export const loadUser = () => async (dispatch) => {
	setAuthToken(localStorage.token);

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
			payload: error,
		});
	}
};

// eslint-disable-next-line
export const loginUser = (formData) => async (dispatch) => {
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

		dispatch(loadUser());
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.msg,
		});
	}
};

// eslint-disable-next-line
export const registerUser = (formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const res = await axios.post("/api/users", formData, config);
		const data = await res.data;

		dispatch({
			type: REGISTER_SUCCESS,
			payload: data,
		});

		dispatch(loadUser());
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error,
		});
	}
};

// eslint-disable-next-line
export const updateDistance = (user, distance) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const updatedUser = {
			distance,
		};

		const res = await axios.put(`/api/auth/${user}`, updatedUser, config);
		const data = res.data;

		dispatch({
			type: UPDATE_DISTANCE,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DISTANCE_FAIL,
			payload: error,
		});
	}
};

// eslint-disable-next-line
export const logoutUser = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
