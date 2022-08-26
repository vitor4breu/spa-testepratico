import axios from "axios";
import { postLogin } from "../api/Auth";
import { RetornoApi } from "./IRetornoApi";

export async function ExecuteLogin(usuario: string, senha: string): Promise<RetornoApi<string>> {
   return await postLogin(usuario, senha)
      .then(response => {
         const token = response.data.retorno;

         sessionStorage.setItem("Token", token);

         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
         return response.data as RetornoApi<string>;
      })
      .catch((error) => {
         return error.response.data as RetornoApi<string>;
      });
}