import React from 'react'
import { createContext } from 'react'
export const authDataContext = createContext()
function AuthContext({children}){
    const serverUrl = "http://localhost:8000"
    let [loading,setLoading] = React.useState(false)
    let value = {serverUrl,loading,setLoading}
    return(
        <div>
            <authDataContext.Provider value = {value}>
                {children}
            </authDataContext.Provider>
        </div>
    )
}

export default AuthContext