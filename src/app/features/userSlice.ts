import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    id:'',
    name: "",
    year: '',
    username: "",
    email: "",
    enrollmentNo: "",
    role: "n",
    enabled: true,
    image: "",
  },
  reducers:{
    setUserData:(state,action)=>{
      state.id=action.payload.id
      state.name=action.payload.name;
       state.year = action.payload.year;
       state.username = action.payload.username;
       state.email = action.payload.email;
       state.enrollmentNo = action.payload.enrollmentNo;
       state.role = action.payload.role;
      //  state.enabled = action.payload.enabled;
       state.image = action.payload.profile_pic;
    }
  }
});

export const {setUserData}=currentUserSlice.actions;
export default currentUserSlice.reducer;
// In Redux Toolkit, createSlice automatically generates action
//  creators based on the names of the reducers you provide 
//  in the reducers object. In this case, the setUserData action
//   creator is generated based on the setUserData reducer.             `   