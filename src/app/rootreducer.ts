import { combineReducers } from '@reduxjs/toolkit';
import currentUserReducer from "./features/userSlice";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    // other: otherReducer,
    // Add other slices as needed
  });

  export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
