import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import dataReducer from "./dataSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
	data:dataReducer,
	auth: authReducer,
});
const store = configureStore({
	
		reducer: rootReducer,

});

export default store;
