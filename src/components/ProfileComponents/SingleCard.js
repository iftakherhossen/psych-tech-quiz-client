import React from 'react';

const SingleCard = ({ quiz, problems }) => {
     const quizScore = 20;
     const problemsScore = 50;

     return (
          <div>
               {
                    quiz.isAvailable === true && <div className="card bg-slate-300 shadow-xl w-full h-full">
                         <div className="card-body">
                              <div className='flex justify-between px-1'>
                                   <span>✔️</span>
                                   <h2 className="card-title text-[1.4em] font-bold">{quiz.name}</h2>                                   
                              </div>
                              {/* <p>{quiz.description}</p> */}
                              <div className='flex justify-between border-t-2 border-slate-400 px-2'>
                                   <h3 className='text-xl mt-2 font-bold'>{problems ? `Problems: ${quiz.problems}`: `Question: ${quiz.length}`}</h3>
                                   <h3 className='text-xl mt-2 font-bold'>Score: {problems === true ? problemsScore : quizScore}</h3>
                              </div>
                         </div>
                    </div>
               }
          </div>
     );
};

export default SingleCard;