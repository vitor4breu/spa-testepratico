import React from "react"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from "./ui/modules/Login";
import { Menu } from "./ui/modules/Menu";

export function AppRouter(){
   return(
   <Router>
      <Routes>
            <Route index element={<Login/>} />
            <Route path="/menu" element={<Menu/>} />
      </Routes> 
   </Router>
   );
}