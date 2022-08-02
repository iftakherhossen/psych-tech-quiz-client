import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();
     let location = useLocation();

     if (isLoading) { 
          return <TailSpin />
     }
     if (user.email) {
          return children;
     }

     return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;