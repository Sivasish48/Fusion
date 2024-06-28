import React from 'react'
import { useRecoilValue } from 'recoil'
//import { userState } from '@/recoil/atoms/userAtoms'
import { Outlet, Navigate } from 'react-router-dom';
import { userEmailState } from "@/recoil/selectors/userEmail.js";

function PrivateRoute() {
  
    const userEmail = useRecoilValue(userEmailState);
  return (
    
     userEmail ? <Outlet /> : <Navigate to='/signin' />
  )
}

export default PrivateRoute