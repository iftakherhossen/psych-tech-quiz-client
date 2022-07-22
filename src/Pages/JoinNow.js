import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleButton from 'react-google-button';
import useAuth from '../hooks/useAuth';

const JoinNow = () => { 
     const [registrationData, setRegistrationData] = useState({});
     const { user, registerUser, isLoading, success, authError, signInWithGoogle } = useAuth();
     const [checked, setChecked] = useState(true);

     // const handleChange = e => {
     //      setChecked(e.target.checked);
     // }

     // const handleOnBlur = e => {
     //      const field = e.target.name;
     //      const value = e.target.value;
     //      const newRegistrationData = { ...registrationData };
     //      newRegistrationData[field] = value;
     //      setRegistrationData(newRegistrationData);
     // }
     
     // const handleRegister = e => {
     //      if (registrationData.password !== registrationData.retypePassword) {
     //           Swal.fire(
     //                'Password Mismatch',
     //                'Type same Password in both fields!',
     //                'error'
     //           );
     //      }
     //      else {
     //           registerUser(registrationData.name, registrationData.email, registrationData.password);            
     //      }

     //      e.preventDefault();
     // }

     // user.email && success && toast.success(`Welcome, ${user.displayName}`);
     // authError && toast.error({authError});

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
                                             <form className="flex flex-col w-full items-center ">
                                                  <input type="text" placeholder="Type Name" name="name" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <input type="email" placeholder="Type Email" name="email" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <input type="password" placeholder="Type Password" name="password" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <input type="password" placeholder="Retype Password" name="retype-password" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <div className="flex items-center flex-start">
                                                       <input type="checkbox" defaultChecked className="checkbox checkbox-xs my-2 mr-2" />
                                                       <span>I agree with the terms and conditions</span>
                                                  </div>
                                                  <button className="my-5 mx-6 btn btn-sm pt-2 pb-9 px-10 text-lg border-0">Join</button>
                                                  <NavLink to="/login"><a className="text-lg text-blue-700 font-bold hover:underline">Already an user? Login here!</a></NavLink>
                                                  <GoogleButton
                                                       onClick={signInWithGoogle}
                                                       // disabled={user.email}
                                                       className="mt-4"
                                                  />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
                    {/*
                    
                         <Grid item xs={12} md={6} sx={{ my: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <Toolbar />
                              <Box>
                                   <Box sx={{display: 'flex', justifyContent: 'center', maxWidth: '70%' }}>
                                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Macondo, cursive' }}>Sign in</Typography>
                                   </Box>

                                   <Box sx={{ height: '100%', maxWidth: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {!isLoading && <form onSubmit={handleRegister}>
                                        <TextField 
                                             variant='standard'
                                             label='Name'
                                             required
                                             name="name"
                                             type="name"
                                             onBlur={handleOnBlur}
                                             sx={{ width: 1, mb: 1, color: 'white' }}
                                        />
                                        <TextField 
                                             variant='standard'
                                             label='Email'
                                             required
                                             name="email"
                                             type="email"
                                             onBlur={handleOnBlur}
                                             sx={{ width: 1, mb: 1, color: 'white' }}
                                        />
                                        <TextField 
                                             variant='standard'
                                             label='Designation'
                                             required
                                             type="text"
                                             name="designation"
                                             onBlur={handleOnBlur}
                                             sx={{ width: 1, mb: 1, color: 'white' }}
                                        />
                                        <TextField 
                                             variant='standard'
                                             label='Password'
                                             required
                                             name="password"
                                             onBlur={handleOnBlur}
                                             type="password"
                                             sx={{ width: 1, mb: 1 }}
                                        />
                                        <TextField 
                                             variant='standard'
                                             label='Retype Password'
                                             required
                                             name="retypePassword"
                                             onBlur={handleOnBlur}
                                             type="password"
                                             sx={{ width: 1, mb: 1 }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 3, ml: 0 }}>
                                             <Checkbox defaultChecked onChange={handleChange} size="small" />
                                             <Typography variant="body1" sx={{ fontFamily: 'Macondo, cursive' }}>I agree with the terms and conditions</Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                             <Button type="submit" variant="contained" sx={{ px: 3, fontFamily: 'Macondo, cursive', fontWeight: 'bold' }} className="customBgColor registerBtn"  disabled={!checked}>Register</Button>
                                        </Box>
                                        </form>}
                                        {isLoading && <Box sx={{ display: 'flex' }}>
                                        <CircularProgress color="inherit" />
                                        </Box>}
                                        <NavLink to="/login" style={{ textDecoration: 'none' }} className="customColor"><Typography sx={{ mt: 3, mb: 1, fontSize: 18, fontWeight: 600, fontFamily: 'Macondo, cursive' }}>Already User? Login Now!</Typography></NavLink>
                                        <GoogleButton
                                        onClick={signInWithGoogle}
                                        disabled={user.email}
                                        />
                                   </Box>
                              </Box>
                              <Toolbar />                            
                         </Grid>
                    </Grid>
                    </Box> */}
               </div>            
        </div>
     );
};

export default JoinNow;