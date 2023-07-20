import { createContext, useState } from "react";


export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{
            darkMode,
            toggleDarkMode
        }}>
            <div className={darkMode ? "dark-mode" : ''}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}