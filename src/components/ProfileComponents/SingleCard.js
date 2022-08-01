import React from 'react';

const SingleCard = ({ quiz, problems }) => {
     const quizScore = 20;
     const problemsScore = 50;
     console.log(quiz)

     return (
          <div>
               {
                    quiz.isAvailable === true && <div className="card bg-slate-300 shadow-xl w-full">
                         <div className="card-body">
                              <h2 className="card-title font-bold">{quiz.name}</h2>
                              <p>{quiz.description}</p>
                              <div className='flex justify-between'>
                                   <h3 className='text-xl mt-2 font-bold text-right'>{problems ? `Problems: ${quiz.problems}`: `Question: ${quiz.question}`}</h3>
                                   <h3 className='text-xl mt-2 font-bold text-right'>Score: {problems === true ? problemsScore : quizScore}</h3>
                              </div>
                         </div>
                    </div>
               }
          </div>
     );
};

export default SingleCard;