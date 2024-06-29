import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard.jsx';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Header from './components/component/header';
import Landing from './components/component/landing';
//import PrivateRoute from './components/component/privateRoute';

import {SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';





export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          } />
           <Route path="/landing" element={<Landing />} />
           <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </BrowserRouter>
  );
}
