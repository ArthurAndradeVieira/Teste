import React, { createContext, useState }  from 'react'
import users from '../data/Users'

export const UsersContext = React.createContext({})

export const UsersProvider = ({children}) =>{
    const [users, setUsers] = useState("")
    return (
        <UsersContext.Provider value={ [users, setUsers] }>
            {children}
        </UsersContext.Provider>
    )
}
export default UsersProvider
