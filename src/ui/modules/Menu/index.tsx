import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { User } from "../../../core/Models/UserType";
import { fetchUsers } from "../../../core/service/UserService";
import { VerificarAutenticacao } from "../../../helpers/AuthHelper";
import style from "./Menu.module.css";

export function Menu(){
   const navigate = useNavigate();

   const [usernames, setUsernames] = useState([] as User[])

   const logoutHandler = () => {
      Axios.defaults.headers.common["Authorization"] = "";
      sessionStorage.removeItem("User");
      sessionStorage.removeItem("Token");
      navigate("/");
   }

   useEffect(() =>{
      if (!VerificarAutenticacao()) navigate("/");

      const busca = async () => 
         {
         var retorno = await fetchUsers();
         setUsernames(retorno.retorno);
         }
      busca();
   },[]);

   return(
      <div className={style.background_menu}>
         <div className={style.background_list}>
         <h1 className={style.title_list}>User's List</h1>
         <ul className={style.list}>
               {usernames.map((user) => 
                  <li key={user.id} className={style.item_list}>{user.username}</li>
               )}
         </ul>
         <button className={style.logout_button} onClick={logoutHandler}>
            Logout
         </button>
         </div>
      </div>
   );
}