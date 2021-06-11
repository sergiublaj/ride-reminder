import axios from "axios";
import {
	GET_RIDES,
	ADD_RIDE,
	DELETE_RIDE,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
	RIDES_ERROR,
} from "./types";

export const getRides = () => async (dispatch) => {
	try {
		dispatch(setLoading());

		const res = await axios.get("/api/rides");
		const data = await res.data;

		dispatch({
			type: GET_RIDES,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: RIDES_ERROR,
			payload: error,
		});
	}
};

export const addRide = (ride) => async (dispatch) => {
	const config = {
		headers: {
			"Contect-Type": "application/json",
		},
	};

	try {
		const res = await axios.post("/api/rides", ride, config);
		const data = res.data;

		dispatch({
			type: ADD_RIDE,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: RIDES_ERROR,
			payload: error,
		});
	}
};

export const deleteRide = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/rides/${id}`);

		dispatch({
			type: DELETE_RIDE,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: RIDES_ERROR,
			payload: error,
		});
	}
};

export const setCurrent = (ride) => {
	return {
		type: SET_CURRENT,
		payload: ride,
	};
};

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
