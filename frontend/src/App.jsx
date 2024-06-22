import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard.jsx'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import  Header  from './components/component/header'
import  Landing  from './components/component/landing'
//import Footer from './components/component/footer'
import PrivateRoute from './components/component/privateRoute'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    
    </BrowserRouter> 
   )
}
