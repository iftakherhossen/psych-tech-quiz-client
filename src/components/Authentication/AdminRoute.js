import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
     const { user, admin, isLoading } = useAuth();
     const location = useLocation();

     if (isLoading) { 
          return <TailSpin />
     }
     else if (user.email && admin) {
          return children;
     }
     
     return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;