import { GET_RIDES, SET_LOADING, RIDES_ERROR } from "../actions/types";

const initialState = {
	rides: null,
	current: null,
	error: null,
	loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_RIDES:
			return {
				...state,
				rides: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case RIDES_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
