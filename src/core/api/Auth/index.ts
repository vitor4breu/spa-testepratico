import axios from "axios";
import baseURLs from "../BaseURLs";

export const postLogin = async (username: string, password: string) => {
   return axios.post(`${baseURLs.api}/Login`, { username, password });
};