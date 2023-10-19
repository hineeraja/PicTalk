import React from "react";
import { Outlet} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext'
import NavMenu from './components/NavMenu'
import logo from "/img/logo.png"




export default function App() {
    return(
     <>
     <AuthContextProvider>
     <img src={logo} width={80} height={80}/>
     < NavMenu /> 
      <main className="mx-3">
        <Outlet />
      </main>
     </AuthContextProvider>
     </>
      
    )

}


