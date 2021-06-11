import {
	GET_RIDES,
	ADD_RIDE,
	DELETE_RIDE,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
	RIDES_ERROR,
} from "../actions/types";

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
		case ADD_RIDE:
			return {
				...state,
				rides: [action.payload, ...state.rides],
			};
		case DELETE_RIDE:
			return {
				...state,
				rides: state.rides.filter((ride) => ride._id !== action.payload),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case RIDES_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
