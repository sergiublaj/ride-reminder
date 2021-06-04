import axios from "axios";
import { GET_RIDES, SET_LOADING, RIDES_ERROR } from "./types";

export const getRides = () => async (dispatch) => {
	try {
		setLoading();

		const res = await axios.get("/api/rides");
		const data = await res.data;

		dispatch({
			type: GET_RIDES,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: RIDES_ERROR,
			payload: error.response.msg,
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
