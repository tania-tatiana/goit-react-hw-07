import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6838b78d6561b8d882ae071b.mockapi.io";

export const fetchTasks = createAsyncThunk("");
