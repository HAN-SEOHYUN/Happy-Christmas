import axios from "axios";

const axiosInst = axios.create({
  baseURL: "http://52.7.156.49:4000/api",
});

export default axiosInst;
