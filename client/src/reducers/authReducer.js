import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGOUT,
	DISTANCE_FAIL,
	UPDATE_DISTANCE,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: false,
	loading: false,
	user: null,
	error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADED:
		case UPDATE_DISTANCE:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case DISTANCE_FAIL:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
				error: null,
			};
		default:
			return {
				...state,
			};
	}
};
