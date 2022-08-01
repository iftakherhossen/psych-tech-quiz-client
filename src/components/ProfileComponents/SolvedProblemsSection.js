import React from 'react';
import problems from '../../assets/problems';
import SingleCard from './SingleCard';

const SolvedProblemsSection = () => {
     // sort by isAvailable
     const sortArray = problems.sort((x, y) => {
          return (x.isAvailable === y.isAvailable) ? 0 : x.isAvailable ? -1 : 1;
     });

     return (
          <div className='mt-2 py-6 px-12'>
               <div>
                    <h1 className='text-3xl text-white'>Problems You Solved!</h1>
               </div>
               <div className='grid grid-cols-3 py-8 gap-5 h-full'>
                    {
                         sortArray.map(quiz => {
                              return <SingleCard quiz={quiz} key={quiz.id} problems={true} />
                         })
                    }
               </div>
          </div>
     );
};

export default SolvedProblemsSection;