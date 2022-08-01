import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';

const QuizSection = ({ nextId, progressValue, validated, optionsList, nextQuestion, handleScore }) => {
     return (
          <div>
               <progress className='progress w-full absolute progress-accent transition ease-in-out delay-150' value={progressValue} max='100' id='percentCount'></progress>
               <div className='py-10 flex flex-col justify-center bg-slate-200 px-5 rounded-tr-md rounded-tl-md'>
                    <div className='mb-2'>
                         <h3 className='text-2xl text-center text-blue-900 font-semibold' id='questionText'>Title</h3>
                    </div>
                    <form className='w-5/6 mx-auto'>
                         <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto' id='questionBody'>
                              {/* questions will be appended here! */}
                              {
                                   optionsList.map(({ answerText, isCorrect, answerNo }) => <div className='flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl' key={answerNo}>
                                        <input
                                             type='radio'
                                             id={answerNo}
                                             name='option'
                                             className='radio radio-sm mr-2 checked:bg-blue-900'
                                             value={answerNo}
                                             onChange={() => handleScore(isCorrect, answerText, answerNo)}
                                        />
                                        <p className='text-lg font-bold'>{answerText}</p>
                                   </div>)
                              }
                         </div>
                         {
                              validated && <div className='loading flex justify-center items-center m-auto'>
                                   <TailSpin color='grey' />
                              </div>
                         }
                    </form>
               </div>

               <div className='mx-auto w-3/4 sm:2/4 md:w-1/4'>
                    {
                         <button className='flex justify-center items-center py-3 px-8 mt-8 mb-4 rounded-full bg-rose-500 text-white mx-auto disabled:bg-slate-300 disabled:cursor-not-allowed' onClick={() => nextQuestion(nextId)}>
                              <p className='text-xl font-medium'>Next</p>
                              <FaArrowRight style={{ fontSize: 15 }} className='ml-2' />
                         </button>
                    }
               </div>
          </div>
     );
};

export default QuizSection;