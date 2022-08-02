import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useDarkMode } from '../../hooks/useDarkMode';

const Navigation = () => {
     const { user, logOut } = useAuth();
     const [isDarkMode, toggleDarkMode] = useDarkMode();

     return (
          <nav className="sticky w-full text-gray-800">
               <div className="navbar bg-slate-200 dark:bg-[#1b222d] dark:text-white h-[70px]">
                    <div className="grow sm:px-3 lg:pl-16">
                         <Link to="/" className="text-rose-500 dark:text-white font-bold">
                              <h1 className="text-3xl">Psych! Tech-Quiz</h1>
                         </Link>
                    </div>
                    <div className="items-center flex">
                         <label className="swap swap-rotate">
                              {
                                   isDarkMode ? <input 
                                        type="checkbox" 
                                        onChange={toggleDarkMode}
                                   /> : <input 
                                        type="checkbox" 
                                        defaultChecked 
                                        onChange={toggleDarkMode}
                                   />
                              }
                              
                              <div className="tooltip tooltip-bottom" data-tip="Light Mode">
                                   <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                              </div>
                              
                              <div className="tooltip tooltip-bottom" data-tip="Dark Mode">
                                   <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                              </div>
                              
                         </label>
                    </div>
                    <div className="hidden px-2 mx-2 lg:flex">
                         <div className="flex items-center">                              
                              <Link to="/" className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2 text-base uppercase">
                                  Home
                              </Link>                           
                              <Link to="/forum" className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn text-base uppercase">
                                   Forum
                              </Link>                             
                              <Link to="/playground" className="btn hover:bg-slate-300 dark:hover:bg-slate-600 btn-ghost rounded-btn mx-2 text-base uppercase">
                                   Playground
                              </Link>
                              {
                                   !user.email && <Link to="/joinNow">
                                        <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white dark:hover:bg-slate-600 transition duration-500 mx-3 uppercase text-lg">Join Now!</button>
                                   </Link>
                              }
                         </div>
                    </div>
                    {
                         user.email && <div className="flex-none dropdown dropdown-end mx-1 sm:mx-2 my-auto lg:pr-16">
                              <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:border-purple-800">
                                   <div className="rounded-full">
                                        {
                                             user.photoURL ? <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                                  <img src={user.photoURL} alt="User Profile" width="90px" height="90px" draggable="false" />
                                             </div> :
                                             <div className="flex-none my-auto pr-2 sm:mr-3 lg:mr-12 tooltip tooltip-bottom" data-tip={user.displayName}>
                                                  <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-transparent">
                                                       <div className="rounded-full">
                                                            <FaUserCircle className="text-4xl" />
                                                       </div>
                                                  </label>
                                             </div>
                                        }
                                   </div>
                              </label>
                              <ul tabIndex="0" className="mt-6 p-2 relative top-10 shadow menu menu-compact dropdown-content -z-50 bg-slate-100 dark:bg-slate-600 rounded-box w-52">
                                   <li>
                                        <Link to={`/user/${user.email}`} className="hover:bg-rose-500 hover:text-white text-base">
                                             Profile
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/profile" className="hover:bg-rose-500 hover:text-white text-base">
                                             Dashboard
                                        </Link>
                                   </li>
                                   <li>
                                        <button className="hover:bg-rose-500 hover:text-white text-base" onClick={logOut}>Logout</button>
                                   </li>
                              </ul>
                         </div>
                    }
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                         <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                              </svg>
                         </button>
                         <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                              <li>
                                   <Link to="/profile" className="hover:bg-rose-500 hover:text-white text-base">
                                        Profile
                                   </Link>
                              </li>
                              <li>
                                   <Link to="/profile" className="hover:bg-rose-500 hover:text-white text-base">
                                        Dashboard
                                   </Link>
                              </li>
                              <li>
                                   <button className="hover:bg-rose-500 hover:text-white text-base" onClick={logOut}>Logout</button>
                              </li>

                              {
                                   !user.email && <Link to="/joinNow">
                                   <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white dark:hover:bg-slate-600 transition duration-500 mx-3 uppercase text-lg">Join Now!</button>
                              </Link>
                              }
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default Navigation;