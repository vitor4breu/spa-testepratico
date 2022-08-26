import axios from "axios";

export function VerificarAutenticacao(): boolean {

   const recoveredToken = sessionStorage.getItem("Token");

   if (recoveredToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${recoveredToken}`;
      return true;
   } else {
      return false;
   }
}