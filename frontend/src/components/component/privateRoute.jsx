import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recoil/atoms/userAtoms'
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {
    const { currentUser } = useRecoilValue(userState);
  return (
    
     currentUser ? <Outlet /> : <Navigate to='/signin' />
  )
}

export default PrivateRoute