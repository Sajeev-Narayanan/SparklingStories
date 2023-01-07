import React from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css'
import Chat from './pages/Chat';
import Login from './pages/Login';
import Profile from './pages/Profile';
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
        <Route path="profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
