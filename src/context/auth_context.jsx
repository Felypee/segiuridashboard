import { createContext, useContext, useState } from "react";


 const AuthContext =  createContext({
    user: null
})

export const useAuth = ()=>{
    return useContext(AuthContext)
}


export const AuthProvider = (props)=>{
    const [user, setUser] = useState(null)

    const value = {
        user,
        setUser
    }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

