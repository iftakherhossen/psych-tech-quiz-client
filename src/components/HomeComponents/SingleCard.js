import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({ course, problem }) => {
     const { id, name, slug, image, description, questionNo, isAvailable } = course;
     let navigate = useNavigate();

     const handleButton = () => {
          if (problem) return navigate(`problem-solving/${slug}`);
          else navigate(`quizzes/${slug}`, {state: course});
     }

     return (
          <div className="card w-full bg-base-100 shadow-xl image-full" key={id}>
               <figure>
                    <img src={image} alt="Quiz Cover" />
               </figure>
               <div className="card-body p-5">
                    <h2 className="card-title font-bold text-2xl text-secondary">{name}</h2>
                    <hr />
                    <p>{description}</p>
                    <div className="flex justify-between mt-3">
                         <div className="card-actions">
                              <h4 className="bg-rose-500 border-0 py-1 rounded-lg px-4">Question: {questionNo}</h4>
                         </div>
                         <div className="card-actions">
                              {
                                   !isAvailable === false ? <button className="btn bg-rose-500 border-0 btn-sm px-4 disabled:bg-rose-300 disabled:text-slate-500" onClick={handleButton}>
                                        {
                                             problem ? (isAvailable === false ? 'Coming Soon' : 'Solve Problems') : (isAvailable === false ? 'Coming Soon' : 'Join Quiz')
                                        }
                                   </button> : <button className="btn bg-rose-500 border-0 btn-sm px-4 disabled:bg-rose-300 disabled:text-slate-500" disabled>
                                        {
                                             problem ? (isAvailable === false ? 'Coming Soon' : 'Solve Problems') : (isAvailable === false ? 'Coming Soon' : 'Join Quiz')
                                        } 
                                   </button>
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingleCard;