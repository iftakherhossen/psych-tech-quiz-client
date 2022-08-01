import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Profile = () => {
     let params = useParams();

     return (
          <div className='bg-white dark:bg-slate-800'>
               <div className='drawer drawer-mobile'>
                    <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
                    <div className='drawer-content p-2 h-full'>
                         <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button lg:hidden mt-0 mb-4'>Open drawer</label>
                         <Outlet />                     
                    </div> 
                    <div className='drawer-side lg:border-r-2 lg:border-r-[#aaa]'>
                         <label htmlFor='my-drawer-2' className='drawer-overlay'></label> 
                         <ul className='menu p-10 overflow-y-auto w-80 text-base-content'>
                              <li className='text-xl font-bold text-white'><Link to={`/user/${params.email}`}>Profile</Link></li>
                              <li className='text-xl font-bold text-white'><Link to={`/user/${params.email}/quizzes`}>Quizzes</Link></li>
                              <li className='text-xl font-bold text-white'><Link to={`/user/${params.email}/solved-problems`}>Solved Problems</Link></li>
                              <li className='text-xl font-bold text-white'><Link to={`/user/${params.email}/settings`}>Settings</Link></li>
                              {/* <li className='mt-auto'>Log Out</li> */}
                         </ul>               
                    </div>
               </div>
          </div>
     );
};

export default Profile;