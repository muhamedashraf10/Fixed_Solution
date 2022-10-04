import axios from "axios";

export const INSTANCE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
