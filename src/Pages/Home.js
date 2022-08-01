import React, { useState } from 'react';
import ProblemSolvingSection from '../components/HomeComponents/ProblemSolvingSection';
import QuizSection from '../components/HomeComponents/QuizSection';
import Stats from '../components/HomeComponents/Stats';

const Home = () => {
     const [showQuizzes, setShowQuizzes] = useState(true);
     const [showProblemSolving, setShowProblemSolving] = useState(false);
     const [quizActive, setQuizActive] = useState(true);
     const [problemsActive, setProblemsActive] = useState(false);
     
     const handleShowQuizzes = () => {
          setShowQuizzes(true);
          setShowProblemSolving(false);
          setQuizActive(true);
          setProblemsActive(false);
     }
     const handleProblemSolving = () => {
          setShowProblemSolving(true);
          setShowQuizzes(false);
          setQuizActive(false);
          setProblemsActive(true);
     }

     return (
          <div className='bg-white dark:bg-slate-800'>
               <div className='pt-10 flex justify-center'>
                    <div className=''>
                         <button className={`btn mx-2 ${quizActive === true && 'bg-rose-500' }`} onClick={handleShowQuizzes}>Quizzes</button>
                         <button className={`btn mx-2 ${problemsActive === true && 'bg-rose-500' }`} onClick={handleProblemSolving}>Problem Solving</button>
                    </div>
               </div>
               {showQuizzes === true && <QuizSection />}
               {showProblemSolving === true && <ProblemSolvingSection />}
               <Stats />
          </div>
     );
};

export default Home;