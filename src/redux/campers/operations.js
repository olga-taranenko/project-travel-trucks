import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/campers");
      return data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
