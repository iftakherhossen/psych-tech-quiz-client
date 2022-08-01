import React from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {
     const { user } = useAuth();

     return (
          <div>
               <div>
                    <h1>{user.displayName}</h1>
               </div>
          </div>
     );
};

export default Profile;