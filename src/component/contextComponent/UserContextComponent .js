import React from 'react'

export const UserContext = React.createContext();

const UserContextComponent = ({ users,setUsers,children }) => {


  return <UserContext.Provider value={{ users, setUsers }}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent 