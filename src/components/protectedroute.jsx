import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute= ({ children }) => {
  const user= useSelector((state) => state.auth.user);
  console.log(user);
  

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectRoute;
