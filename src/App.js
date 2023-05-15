import './App.css';
import React,{useState} from 'react';
import Slidbar from './component/Slidbar';
import Dashboard from './component/Dashboard';
import AddUser from './component/AddUser';
import { EditUser } from './component/EditUser';
import NestedExample from './component/NestedExample';
import Account from './component/nestedComponents/Account';
import Profile from './component/nestedComponents/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserContextComponent from './component/contextComponent/UserContextComponent ';
import DashboardContextComponent from './component/contextComponent/DashboardContextComponent';


function App() {
  let [users, setUsers] = useState([
    {
      name: "Ajay",
      email: 'ajay@gmail.com',
      mobile: "9809099890",
      batch: "B46 WD",
      timings: '08amto10am'
    },
    {
      name: "Ajith",
      email: 'ajith@gmail.com',
      mobile: "9878877670",
      batch: "B46WD",
      timings: '10amto12pm'
    },
    {
      name: "Mani",
      email: 'mani@gmail.com',
      mobile: "9234567800",
      batch: "B46WD",
      timings: '12pmto2pm'
    }])
  return (
    <div id='wrapper'>
      <BrowserRouter>
        <Slidbar />
        <Routes>
          <Route path='/dashboard' element={
            <DashboardContextComponent>
              <UserContextComponent users={users} setUsers={setUsers}>
                <Dashboard />
              </UserContextComponent>
            </DashboardContextComponent>} />

          <Route path='/add-user' element={
            <UserContextComponent users={users} setUsers={setUsers}>
              <AddUser />
            </UserContextComponent>} />


          <Route path='/edit-user/:id' element={
            <UserContextComponent users={users} setUsers={setUsers}>
              <EditUser />
            </UserContextComponent>} />

          <Route path='nested-example' element={<NestedExample />} >
            <Route path='account' element={<Account />} />
            <Route path='profile' element={< Profile />} />
          </Route>

          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>

      </BrowserRouter>





    </div >
  );
}

export default App;
