import React from 'react';
import quizzes from '../../assets/quizzes';
import SingleCard from './SingleCard';

const QuizzesSection = () => {
     // sort by isAvailable
     const sortArray = quizzes.sort((x, y) => {
          return (x.isAvailable === y.isAvailable) ? 0 : x.isAvailable ? -1 : 1;
     });

     return (
          <div className='mt-2 py-6 px-12'>
               <div>
                    <h1 className='text-3xl text-white'>Quizzes You Participated!</h1>
               </div>
               <div className='grid grid-cols-3 py-8 gap-5 h-full'>
                    {
                         sortArray.map(quiz => {
                              return <SingleCard quiz={quiz} key={quiz.id} />
                         })
                    }
               </div>
          </div>
     );
};

export default QuizzesSection;