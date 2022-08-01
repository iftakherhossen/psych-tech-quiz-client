import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import questions from '../assets/questions';
import useAuth from '../hooks/useAuth';

const QuizResult = () => {
     let navigate = useNavigate();
     const location = useLocation();
     const quizScore = location.state[1];
     const { user } = useAuth();

     const handleClear = () => {
          navigate(`/user/${user.email}`);
     }

     quizScore && toast(() => (
          <span>
               🎉 You scored <b>{quizScore}</b> out of <b>{questions.length}</b>
          </span>
     ));

     console.log(location.state[0]);

     return (
          <div className='bg-white dark:bg-slate-800'>
               <h3 className='text-4xl font-bold text-center pt-[5rem] pb-8 text-rose-900 dark:text-rose-400'>Your Score: {quizScore}/{questions.length}</h3>
               <div className='container mx-auto pb-20'>                    
                    {
                         questions.map(quiz => (
                              <div className='pt-10 pb-6 flex flex-col justify-center px-5 bg-slate-300' key={quiz.questionNo}>
                                   <div className='mb-2'>
                                        <h2 className='text-2xl text-center text-blue-900 font-semibold'>
                                             {quiz.questionText}
                                        </h2>
                                   </div>
                                   <form className='w-5/6 mx-auto'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto'>
                                             {
                                                  quiz.answerOptions.map((answer, index) => {
                                                       const userAnswerNo = location.state[0].map(userAnswer => userAnswer.answerNo);
                                                       const userAnswerText = location.state[0].map(userAnswer => userAnswer.answerText);

                                                       if (quiz.correctAnswer.answerNo === index+1 && userAnswerNo.includes(index+1) && userAnswerText.includes(quiz.correctAnswer.answerText)) {
                                                            return (
                                                                 <div className='flex items-center bg-green-100 px-4 sm:px-8 py-4 rounded-xl w-full text-2xl' key={answer.answerNo}>
                                                                      <p className='text-lg font-bold'>{index+1}. &nbsp; {answer.answerText}</p>
                                                                 </div>
                                                            )
                                                       }
                                                       else if (userAnswerText.includes(answer.answerText)) {
                                                            return (
                                                                 <div className='flex items-center bg-red-100 px-4 sm:px-8 py-4 rounded-xl w-full' key={answer.answerNo}>
                                                                      <p className='text-lg font-bold'>{index+1}. &nbsp; {answer.answerText}</p>
                                                                 </div>
                                                            )
                                                       }
                                                       else {
                                                            return (
                                                                 <div className='flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl w-full' key={answer.answerNo}>
                                                                      <p className='text-lg font-bold'>{index+1}. &nbsp; {answer.answerText}</p>
                                                                 </div>
                                                            )
                                                       }    
                                                  })
                                             }
                                        </div>
                                   </form>
                                   {
                                        <div className='text-center mt-5'>
                                             <h4 className='text-xl'>Correct Answer: <strong>{quiz.correctAnswer.answerText}</strong></h4>
                                        </div>
                                   }
                              </div>
                         ))
                    }

                    <div className='mx-auto w-3/4 sm:2/4 md:w-1/4'>
                         <button className='flex justify-center items-center py-2 px-8 mt-8 rounded-full bg-rose-500 text-white mx-auto' onClick={() => handleClear()}>
                              <p className='text-xl font-medium'>Profile</p>
                         </button>
                    </div>
               </div>

               <Toaster 
                    position="bottom-center"
                    reverseOrder={false} 
               />
          </div>
     );
};

export default QuizResult;