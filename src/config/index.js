//import { connection } from "mongoose";

export const isDev = Boolean(process.env.NODE_ENV !== "production");

export default {
  // connection: process.env.VUE_APP_API_URL
  //   ? process.env.VUE_APP_API_URL
  domain: !isDev ? "*.herokuapp.com" : "localhost",
  connection: !isDev
    ? "https://faction-claims-api.herokuapp.com"
    : "http://localhost:3030"
};
