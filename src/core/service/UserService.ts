import { RetornoApi } from "./IRetornoApi";
import { getUsers } from "../api/User";
import { User } from "../Models/UserType";

export async function fetchUsers(): Promise<RetornoApi<User[]>> {
   return await getUsers()
      .then(response => {
         return response.data as RetornoApi<User[]>;
      })
      .catch((error) => {
         return error.response.data as RetornoApi<User[]>;
      });
}