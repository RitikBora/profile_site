import React, { createContext, useContext, useEffect, ReactNode } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Set the default theme to dark
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
