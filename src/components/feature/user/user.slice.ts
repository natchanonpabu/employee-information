import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import { User, UserRequest } from "./user.type";

interface InitialState {
  users: User[];
  user?: User;
  loading: boolean;
}

const initialState: InitialState = {
  users: [],
  user: undefined,
  loading: false,
};

const getUsers = createAsyncThunk<User[], UserRequest>(
  "users/getUsers",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get("/users", { params });
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const getUser = createAsyncThunk<User, string>(
  "users/getUser",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { clearUsers } = userSlice.actions;
export { getUsers, getUser };
export default userSlice.reducer;
