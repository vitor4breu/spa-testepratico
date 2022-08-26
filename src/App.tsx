import React from "react"
import { Provider } from "react-redux";
import style from "./App.module.css";
import { AppRouter } from "./AppRouter";
import { Store } from "./store/store";

export function App(){
   return(
      <div className={style.background}>
         <Provider store={Store}>
            <AppRouter/>
         </Provider>
      </div>
   );
}