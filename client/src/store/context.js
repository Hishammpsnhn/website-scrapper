import React, { useState, createContext } from 'react';

export const UrlContext = createContext(null);

export default function Context({ children }) {

    const [insights, setInsights] = useState([])
    
    return (
        <UrlContext.Provider value={{ insights, setInsights }}>
            {children}
        </UrlContext.Provider>
    )
}