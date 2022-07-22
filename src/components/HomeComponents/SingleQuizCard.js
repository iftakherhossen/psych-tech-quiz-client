import React from 'react';

const SingleQuizCard = ({ course }) => {
     const { id, name, image, description, question, isCompleted } = course;

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
                              <button className="btn bg-rose-500 border-0 btn-sm px-4 disabled:bg-rose-300 disabled:text-slate-500" disabled={isCompleted === false}>
                                   {
                                        isCompleted === false ? 'Coming Soon' : 'Join Quiz'
                                   }
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingleQuizCard;