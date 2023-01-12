import React from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css'
import Adminlanding from './pages/adminPages/Adminlanding';
import AdminLogin from './pages/adminPages/AdminLogin';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/providerPages/EditProfile';
import Messages from './pages/providerPages/Messages';
import ProviderChat from './pages/providerPages/ProviderChat';
import ProviderLogin from './pages/providerPages/ProviderLogin';
import ProviderProfile from './pages/providerPages/ProviderProfile';
import ProviderSignup from './pages/providerPages/ProviderSignup';
import Providers from './pages/Providers';
import Signup from './pages/Signup';
import SingleProvider from './pages/SingleProvider';
import UserLandingPage from './pages/UserLandingPage'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserLandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="providers" element={<Providers />} />
        <Route path="provider" element={<SingleProvider />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        
        <Route path="providerlogin" element={<ProviderLogin />} />
        <Route path="providersignup" element={<ProviderSignup />} />
        <Route path="providerprofile" element={<ProviderProfile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="providerchat" element={<ProviderChat />} />
        

        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="adminlanding" element={<Adminlanding />} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
