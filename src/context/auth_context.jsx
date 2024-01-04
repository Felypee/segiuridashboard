import { createContext } from "react";


export const AuthContext =  createContext({
    user: null
})


export const login = (userData)=>{
    return {
        user: userData
    }
}

export const logout = ()=>{
    return {
        user: null
    }
}