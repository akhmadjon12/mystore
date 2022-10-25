

import React, { useState, createContext } from 'react';


export const ActiveLink = createContext();

export const ActiveLinkProvider = ({children}) => {
    const [ activeLink, setActiveLink ] = useState('home')

    return (
        <ActiveLink.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </ActiveLink.Provider>
    )
}