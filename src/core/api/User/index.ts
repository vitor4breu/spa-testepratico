import axios from "axios";
import baseURLs from "../BaseURLs";

export const getUsers = async () => {
   return axios.get(`${baseURLs.api}/User`);
};