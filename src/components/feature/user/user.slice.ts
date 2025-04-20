import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import { User, UserRequest } from "./user.type";
import { Alert } from "@/components/ui";

interface InitialState {
  users: User[];
  user?: User;
  formOpen: boolean;
  getUsersLoading: boolean;
  formLoading: boolean;
  deleteLoading: boolean;
  deleteOpen: boolean;
  deleteId?: string;
}

const initialState: InitialState = {
  users: [],
  user: undefined,
  formOpen: false,
  getUsersLoading: false,
  formLoading: false,
  deleteLoading: false,
  deleteOpen: false,
  deleteId: undefined,
};

const getUsers = createAsyncThunk<User[], UserRequest>(
  "users/getUsers",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get("/users", { params });
      return response.data;
    } catch (error: unknown) {
      Alert({ type: "error" });
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
      Alert({ type: "error" });
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const postUser = createAsyncThunk<User, User>(
  "users/postUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users", user);
      Alert({ type: "success" });
      return response.data;
    } catch (error: unknown) {
      Alert({ type: "error" });
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const patchUser = createAsyncThunk<User, User>(
  "users/patchUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/${user.id}`, user);
      Alert({ type: "success" });
      return response.data;
    } catch (error: unknown) {
      Alert({ type: "error" });
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const deleteUser = createAsyncThunk<User, string>(
  "users/deleteUser",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/users/${id}`);
      Alert({ type: "success" });
      return response.data.user;
    } catch (error: unknown) {
      Alert({ type: "error" });
      if (isAxiosError(error)) {
        const message =
          error.response?.data?.message || error.message || "Axios error";
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

const formOpen = (state: InitialState, action: PayloadAction<boolean>) => {
  if (!action.payload) state.user = undefined;

  state.formOpen = action.payload;
};

const deleteOpen = (state: InitialState, action: PayloadAction<boolean>) => {
  if (!action.payload) state.deleteId = undefined;

  state.deleteOpen = action.payload;
};

const deleteId = (state: InitialState, action: PayloadAction<string>) => {
  state.deleteId = action.payload;
};

export const reducers = () => {
  return { formOpen, deleteOpen, deleteId };
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.getUsersLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.getUsersLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.getUsersLoading = false;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.formOpen = true;
      state.user = action.payload;
    });

    builder.addCase(postUser.pending, (state) => {
      state.formLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.formLoading = false;
      state.formOpen = false;
      state.users.push(action.payload);
    });
    builder.addCase(postUser.rejected, (state) => {
      state.formLoading = false;
    });

    builder.addCase(patchUser.pending, (state) => {
      state.formLoading = true;
    });
    builder.addCase(patchUser.fulfilled, (state, action) => {
      state.formLoading = false;
      state.formOpen = false;
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      state.user = undefined;
    });
    builder.addCase(patchUser.rejected, (state) => {
      state.formLoading = false;
      state.user = undefined;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.deleteLoading = false;
      state.deleteOpen = false;
      state.deleteId = undefined;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.deleteLoading = false;
      state.deleteOpen = false;
      state.deleteId = undefined;
    });
  },
});

export const {
  formOpen: formOpenAction,
  deleteOpen: deleteOpenAction,
  deleteId: deleteIdAction,
} = slice.actions;
export { getUsers, getUser, postUser, patchUser, deleteUser };
export default slice.reducer;
