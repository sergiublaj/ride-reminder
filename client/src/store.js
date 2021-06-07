import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const persistReduxReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistReduxReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
