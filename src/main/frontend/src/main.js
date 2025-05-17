import { BrowserRouter } from 'react-router';
import Routing from "./Routing";
import React, { useEffect } from 'react';
import Nav from "./components/Nav";
import authService from "./services/auth.service";

export const userContext = React.createContext(null);

export default function Main() {
    const [user, setUser] = React.useState(null);

    useEffect(()=>{
        if (user === null) {
            const userData =authService.getCurrentUser();
            setUser(userData);
        }
    },[])

    return(
        <BrowserRouter>
            <userContext.Provider value={{ user, setUser }}>
                <Nav/>
                <Routing />
            </userContext.Provider>
      </BrowserRouter>
    )
}