import style from "./Login.module.css"
import React, { useEffect } from "react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ExecuteLogin } from "../../../core/service/AuthService";
import { VerificarAutenticacao } from "../../../helpers/AuthHelper";
import { useDispatch } from "react-redux";

export function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() =>{
      if (VerificarAutenticacao()) {
      navigate("/menu");
   }});

   const [loginError, setLoginError] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");


   const loginHandler = async (event: FormEvent) => {
      event.preventDefault();

      const response = await ExecuteLogin(username, password);
      if(!response.contemErro) {
         navigate("/menu")
      } else {
         setLoginError(true);
      }
   };


   const erroHandler = (): JSX.Element => {
      return ( 
         <div className={style.errorAlert}>
            <legend className={style.errorText}>
               <strong>ERROR!</strong>
            </legend>
         </div>
      );
   };

   return (
      <div className={style.background}>
         <div className={style.formBackground}>
            <form onSubmit={loginHandler} className={style.form}>
               <legend className={style.legend}>
                     <strong>Please, </strong>enter your credential:
               </legend>
               {loginError && erroHandler()}
               <input 
                  className={style.input} 
                  type="text" 
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
               <input 
                  className={style.input} 
                  type="text" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
               <button className={style.submit_button} type="submit"> Login </button>
            </form>

         </div>
      </div>

   );
}

