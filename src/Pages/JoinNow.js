import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const JoinNow = () => { 
     const [registrationData, setRegistrationData] = useState({});
     const { user, registerUser, isLoading, success, authError, signInWithGoogle } = useAuth();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newRegistrationData = { ...registrationData };
          newRegistrationData[field] = value;
          setRegistrationData(newRegistrationData);
     }
     
     const handleRegister = e => {
          if (registrationData.password !== registrationData.retypePassword) {
               Swal.fire(
                    'Password Mismatch',
                    'Type same Password in both fields!',
                    'error'
               );
          }
          else {
               registerUser(registrationData.name, registrationData.email, registrationData.password);            
          }

          e.preventDefault();
     }

     user.email && success && toast.success(`Welcome, ${user.displayName}`);
     authError && toast.error({authError});

     return (
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="">
               <div className="bg-[#282c34f5] h-[100vh]">
                    <div className="h-[100vh] flex justify-center items-center">
                         <div className="grid sm:grid-cols-1 md:grid-cols-2 max-w-[60%] bg-[#eee] shadow-lg rounded-xl">
                              <div className="flex justify-center items-center">
                                   <div className="pl-8 py-12">
                                        <img 
                                             src="https://i.ibb.co/7Nh1BfQ/signin-image-removebg-preview.png" 
                                             alt="SignUp" 
                                             draggable="false" 
                                             className="w-5/6 mx-16 my-8"
                                        />
                                   </div>
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                   <div className="w-full pl-5 pr-10 py-12">
                                        <div className="flex justify-center w-full">
                                             <h3 className="text-4xl text-slate-800 font-bold mb-8">Join Now</h3>
                                        </div>
                                        <div className="w-full h-full">
                                             {
                                                  !isLoading && <form className="flex flex-col w-full items-center" onSubmit={handleRegister}>
                                                       <input 
                                                            type="text" 
                                                            placeholder="Type Name" 
                                                            name="name" 
                                                            className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5"
                                                            onBlur={handleOnBlur}
                                                            required
                                                            autoFocus
                                                       />
                                                       <input 
                                                            type="email" 
                                                            placeholder="Type Email" 
                                                            name="email" 
                                                            className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" 
                                                            onBlur={handleOnBlur}
                                                            required
                                                       />
                                                       <input 
                                                            type="password" 
                                                            placeholder="Type Password" 
                                                            name="password" 
                                                            className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" 
                                                            onBlur={handleOnBlur}
                                                            required
                                                       />
                                                       <input 
                                                            type="password" 
                                                            placeholder="Retype Password" 
                                                            name="retype-password" 
                                                            className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" 
                                                            onBlur={handleOnBlur}
                                                            required
                                                       />
                                                       <div className="flex items-center flex-start">
                                                            <input type="checkbox" defaultChecked className="checkbox checkbox-xs my-2 mr-2" required />
                                                            <span>I agree with the terms and conditions</span>
                                                       </div>
                                                       <button 
                                                            className="my-5 mx-6 btn btn-sm pt-2 pb-9 px-10 text-lg border-0" 
                                                            required 
                                                            disabled={registrationData === {} || user.email}
                                                       >Join</button>
                                                       <NavLink to="/login" className="text-lg text-blue-700 font-bold hover:underline">Already an user? Login here!</NavLink>
                                                       <GoogleButton
                                                            onClick={signInWithGoogle}
                                                            disabled={user.email}
                                                            className="mt-4"
                                                       />
                                                  </form>
                                             }

                                             <p className='text-center mt-4 text-blue-500'>Sign-up to get 50 points to start!</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>            
        </div>
     );
};

export default JoinNow;