import { createContext, useContext } from "react";

export const AppContext = createContext({})

export const useAppContextHome = () => {
    return useContext(AppContext)
}

export const AppContextHome = ({children}) => {

    const AppContextValue = {
        message: 'Work',
    }

    return <AppContext.Provider value={AppContextValue} >{children}</AppContext.Provider>
}
