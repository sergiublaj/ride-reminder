import axios from "axios";
import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from "../actions/types";

export const loadUser = async () => {
	if (localStorage.token) {
		setAuthToken;
	}
};
