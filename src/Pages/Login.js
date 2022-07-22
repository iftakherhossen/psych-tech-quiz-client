import React from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleButton from 'react-google-button';

const Login = () => { 
     // const [loginData, setLoginData] = useState({});
     // const { user, loginUser, isLoading, success, authError, signInWithGoogle } = useAuth();

     // const location = useLocation();
     // let navigate = useNavigate();

     // const handleOnBlur = e => {
     //      const field = e.target.name;
     //      const value = e.target.value;
     //      const newLoginData = { ...loginData };
     //      newLoginData[field] = value;
     //      setLoginData(newLoginData);
     // }
     // const handleLogin = e => {
     //      loginUser(loginData.email, loginData.password, location, navigate);
     //      e.preventDefault();
     // }

     // user.email && success === true && toast.success(`Welcome, ${user.displayName}`);
     // authError && toast.error({authError});

     return (
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="">
               <div className="bg-[#282c34f5] h-[100vh]">
                    <div className="h-[100vh] flex justify-center items-center">
                         <div className="grid sm:grid-cols-1 md:grid-cols-2 max-w-[60%] bg-[#eee] shadow-lg rounded-xl">
                              <div className="flex justify-center items-center">
                                   <div className="pl-8 py-12">
                                        <img 
                                             src="https://i.ibb.co/wRtj5wn/signup-image-removebg-preview.png" 
                                             alt="SignIn" 
                                             draggable="false" 
                                             className="w-5/6 mx-16 my-8"
                                        />
                                   </div>
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                   <div className="w-full pl-5 pr-10 py-12">
                                        <div className="flex justify-center w-full">
                                             <h3 className="text-4xl text-slate-800 font-bold mb-8">Login to Psych!</h3>
                                        </div>
                                        <div className="w-full h-full">
                                             <form className="flex flex-col w-full items-center ">                                                  
                                                  <input type="email" placeholder="Type Email" name="email" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <input type="password" placeholder="Type Password" name="password" className="input w-full max-w-xs my-2 text-base focus:outline-none input-sm py-5" />
                                                  <div className="flex items-center flex-start">
                                                       <input type="checkbox" checked="checked" className="checkbox checkbox-xs my-2 mr-2" />
                                                       <span>Remember me</span>
                                                  </div>
                                                  <button className="my-5 mx-6 btn btn-sm pt-2 pb-9 px-10 text-lg border-0">Login</button>
                                                  <NavLink to="/join-now"><a className="text-lg text-blue-700 font-bold hover:underline">New to Psych? Join Now!</a></NavLink>
                                                  <GoogleButton
                                                       // onClick={signInWithGoogle}
                                                       // disabled={user.email}
                                                       className="mt-4"
                                                  />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>                    
               </div>            
        </div>
     );
};

export default Login;