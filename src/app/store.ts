import { configureStore } from "@reduxjs/toolkit";
// import { CurrentUser } from "../components/currentUser";
import currentUserReducer from "./features/userSlice";
import rootReducer from "./rootreducer";



export const store = configureStore({
  reducer: rootReducer
});

export default store;