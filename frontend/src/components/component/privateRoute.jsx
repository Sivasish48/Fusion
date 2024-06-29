import React from 'react';
import { useRecoilValue } from 'recoil';
import { Outlet, Navigate } from 'react-router-dom';
import { userState } from '@/recoil/atoms/userAtoms';

function PrivateRoute() {
  const { currentUser, isLoading } = useRecoilValue(userState);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return currentUser ? <Outlet /> : <Navigate to='/signin' />;
}

export default PrivateRoute;
