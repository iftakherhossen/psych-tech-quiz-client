import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ course, problem }) => {
     const { id, name, image, description, question, isAvailable } = course;

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
                              <h4 className="bg-rose-500 border-0 py-1 rounded-lg px-4">Question: {question}</h4>
                         </div>
                         <div className="card-actions">
                              {
                                   !isAvailable === false ? <Link to={`/quiz/${name === 'C#' ? 'csharp' : name.toLowerCase().replace(/\s/g, '')}`}>
                                        <button className="btn bg-rose-500 border-0 btn-sm px-4 disabled:bg-rose-300 disabled:text-slate-500">
                                             {
                                                  problem ? (isAvailable === false ? 'Coming Soon' : 'Solve Problems') : (isAvailable === false ? 'Coming Soon' : 'Join Quiz')
                                             }
                                        </button>
                                   </Link> : <button className="btn bg-rose-500 border-0 btn-sm px-4 disabled:bg-rose-300 disabled:text-slate-500" disabled>
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