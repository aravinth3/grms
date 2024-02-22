import axios from "axios";

const publicAPI = axios.create({
  baseURL: import.meta.env.VITE_GRMS_API,
});

export default publicAPI;
