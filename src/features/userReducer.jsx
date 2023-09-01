import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../userList";

export const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, detail, title, gender, number } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        uu.detail = detail;
        uu.title = title;
        uu.gender = gender;
        uu.number = number;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
