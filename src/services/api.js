import axios from "axios";

//Deploy
export const api = axios.create({
  baseURL: "https://mywallet-app.onrender.com",
});

//Locally
// export const api = axios.create({
//   baseURL: "http://localhost:5000",
// });
