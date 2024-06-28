// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Project from './pages/Project'
// import Dashboard from './pages/Dashboard.jsx'
// import SignIn from './pages/Signin'
// import SignUp from './pages/Signup'
// import  Header  from './components/component/header'
// import  Landing  from './components/component/landing'
// //import Footer from './components/component/footer'
// import PrivateRoute from './components/component/privateRoute'
// import { userState } from './recoil/atoms/userAtoms.js'
// import { useRecoilState } from 'recoil'
// import { useEffect } from 'react'


// export default function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//     <InitUser/>
//     <Routes>
//     <Route path='/' element={<Landing/>}/>
//       <Route path='/home' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/project' element={<Project/>}/>
//       <Route element={<PrivateRoute/>}>
//       <Route path='/dashboard' element={<Dashboard/>}/>
//       </Route>
//       <Route path='/signin' element={<SignIn/>}/>
//       <Route path='/signup' element={<SignUp/>}/>
//     </Routes>
    
//     </BrowserRouter> 
//    )
// }

// function InitUser(){
//   const setUser = useRecoilState(userState)
//     const init = async ()=>{
//       try {
//         const respone = await fetch('http://localhost:4000/api/auth/userself',{
//           method:'GET',
//           headers:{
//             'Authorization':`Bearer ${localStorage.getItem('access_token')}`
//           }
//         })

//         if(respone.formData.email){
//           setUser({
//             currentUser:respone.formData,
//             loading:false,
//             error:null
//           })
//         }else{
//           setUser({
//             currentUser:null,
//             loading:false,
//             error:null
//           })
//         }
//       } catch (error) {
//         setUser({
//           currentUser:null,
//           loading:false,
//           error:error.message
//         })
//       }

//       useEffect(()=>{
//         init()
//       },[])

//       return <></>

//     }
// }



import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard.jsx';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Header from './components/component/header';
import Landing from './components/component/landing';
import PrivateRoute from './components/component/privateRoute';
import { userState } from './recoil/atoms/userAtoms.js';
import { useSetRecoilState } from 'recoil';

function InitUser() {
  const setUser = useSetRecoilState(userState);

  const init = async () => {
    try {
      const response = await fetch('http://localhost:4000/user/userself', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();

      if (data.email) {
        setUser({
          currentUser: data,
          loading: false,
          error: null
        });
      } else {
        setUser({
          currentUser: null,
          loading: false,
          error: null
        });
      }
    } catch (error) {
      setUser({
        currentUser: null,
        loading: false,
        error: error.message
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <InitUser />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
