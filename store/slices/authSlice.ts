import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  user: { email: string; name?: string } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; name?: string }>) {
      state.user = action.payload;
      AsyncStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      AsyncStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
