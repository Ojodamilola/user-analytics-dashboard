import React from "react";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import Sidebar from "./Components/Sidebar/Sidebar";
import UserInfoRoutes from "./Components/UserInfo/UserInfoRoutes";
import UserTable from "./Components/UserTable/UserTable";
import Login from './Components/Signup&Login/Login'
import Signup from './Components/Signup&Login/Signup'
import Roles from "./Components/Roles/Roles";
import ForgotPassword from "./Components/Signup&Login/ForgotPassword";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/userInfo/*" element={<UserInfoRoutes />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/** <Route path="/signup" element={<Signup />} />
           * 
          
                
                <Route path="/forgot-password" element={<ForgotPassword />} />
                */}
        </Routes>
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
