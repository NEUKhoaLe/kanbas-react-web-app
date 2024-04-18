import { createSlice } from "@reduxjs/toolkit";

interface UserStateInterface {
  user?: {
    username: string;
    first: string;
    last: string;
  };
}

const userInitialState: UserStateInterface = {
  user: undefined,
};

const userSlice = createSlice({
  name: "userReducer",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
