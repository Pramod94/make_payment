import Axios from "axios";

export const ApiCall = Axios.create({
  baseURL: "http://localhost:8000/",
});
