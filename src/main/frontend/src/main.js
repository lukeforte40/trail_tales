import { BrowserRouter } from 'react-router';
import Routing from "./Routing";
import React from 'react';
import Nav from "./components/Nav";

export const userContext = React.createContext(null);

export default function Main() {
    const [user, setUser] = React.useState();

    return(
        <BrowserRouter>
            <userContext.Provider value={{ user, setUser }}>
                <Nav/>
                <Routing />
            </userContext.Provider>
      </BrowserRouter>
    )
}