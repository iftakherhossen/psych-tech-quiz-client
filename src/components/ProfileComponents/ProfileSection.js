import React from 'react';
import { GrTrophy } from 'react-icons/gr';
import useAuth from '../../hooks/useAuth';

const ProfileSection = () => {
     const { user } = useAuth();
     const userScore = 11;

     console.log(userScore > 10 && userScore <= 20 && 'big');

     return (
          <div className='mt-2 py-6 px-12 -z-100'>
               <div>
                    <div className='flex justify-between items-center'>
                         <div className='flex items-start p-2'>
                              <div>
                                   <img src={user.photoURL} alt="User Profile" width="100px" height="100px" draggable="false" className='rounded-full' />
                              </div>
                              <div className='py-2 px-5'>
                                   <h1 className='text-3xl text-black dark:text-white font-bold'>{user.displayName}</h1>
                                   <p className='text-black dark:text-white'>About Text</p>
                              </div>
                         </div>
                         <div>
                              {
                                   userScore <= 1000 && <div className="badge badge-outline text-white border-white px-6 py-5 text-lg">Bronze - {userScore} pt</div>
                              }
                              {
                                   userScore > 1000 && userScore <= 2000 && <div class="badge badge-outline text-white border-white px-6 py-5 text-lg">Silver - {userScore}</div>
                              }
                              {
                                   userScore > 2000 && userScore <= 3000 && <div class="badge badge-secondary badge-outline px-6 py-5 text-lg">Gold - {userScore}</div>
                              }
                              {
                                   userScore > 3000 && userScore <= 4000 && <div class="badge badge-primary badge-outline px-6 py-5 text-lg">Diamond - {userScore}</div>  
                              }
                              {
                                   userScore > 4000 && userScore <= 5000 && <div class="badge badge-accent badge-outline px-6 py-5 text-lg">Platinum - {userScore}</div>
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileSection;