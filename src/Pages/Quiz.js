import React, { useState } from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import questions from '../assets/questions';
import quizzes from '../assets/quizzes';

const Quiz = () => {
     let params = useParams();
     let navigate = useNavigate();
     const quizCard = quizzes.filter(quiz => quiz.name.toLowerCase() === params.name);
     const [score, setScore] = useState(0);
     const [nextId, setNextId] = useState(0);
     const [progressValue, setProgressValue] = useState(0);
     const [validated, isValidated] = useState(false);
     const [optionsList, setOptionsList] = useState([]);
     const [answered, setAnswered] = useState([]);
     const [answerNo, setAnswerNo] = useState();

     const startQuiz = () => {
          const display = document.getElementById('timer');
          const twoMinutes = 30 * 5;
          startExpire(twoMinutes, display);

          const question = questions[0];
          const next = question.questionNo + 1;

          const answered = question.questionNo - 1;
          const stepTotal = question.totalQuestions;

          // get current progress bar
          const progress = (answered / stepTotal) * 100;
          setProgressValue(progress);
          const speed = progress * 20;

          if (question.isFinalQuestion !== true) {
               document.getElementById('start').style.display = 'none';
               document.getElementById('quiz').style.display = 'block';
               document.getElementById('questionText').innerText = question.questionText;

               setOptionsList(question.answerOptions);
               setNextId(next);
          }
          else validateScreen();
     }

     const nextQuestion = (questionId) => {
          document.getElementById(`${answerNo}`).checked = false;

          setOptionsList([]);
          const question = questions.find(value => value.questionNo === questionId);
          let next;

          if (question && (!question.isFinalQuestion || question.answerOptions !== null)) {
               next = question.questionNo + 1;
               document.getElementById('questionText').innerText = question.questionText;
               setOptionsList(question.answerOptions);
               setNextId(next);

               // progress here
               const answered = question.questionNo - 1;
               const totalQuestion = question.totalQuestions;
               let progress = (answered / totalQuestion) * 100;
               const speed = progress * 20;
               setProgressValue(progress);
          }
          else {
               let progress = 100;
               setProgressValue(progress);
               validateScreen();
          }
     }

     const startExpire = (duration, display) => {
          let timer = duration, minutes, seconds;
          let timeInterval = setInterval(function () {
               minutes = parseInt(timer / 60, 10);
               seconds = parseInt(timer % 60, 10);

               minutes = minutes < 10 ? '' + minutes : minutes;
               seconds = seconds < 10 ? '0' + seconds : seconds;

               display.textContent = minutes + ':' + seconds;

               if (--timer < 0) {
                    clearInterval(timeInterval);
                    startExpire(duration, display); // timer loops again
               }
          }, 1000);
     }

     const validateScreen = () => {
          isValidated(true);
          document.getElementById('questionText').style.display = 'none';

          setTimeout(() => {
               document.getElementById('timer').style.display = 'none';
          }, 1500);
          setTimeout(() => {
               navigate('result', {state: [answered, score]});
          }, 3000);
     }

     const handleScore = (isCorrect, answerText, answerNo) => {
          setAnswerNo(answerNo);
          if (isCorrect) {
               setScore(score + 1);
          }          
          setAnswered([...answered, {isCorrect, answerText, answerNo}]);
          // nextQuestion(nextId);
     }

     return (
          <div className='bg-white dark:bg-slate-800 pb-8 h-full'>
               <div className='container mx-auto py-36' id='start'>
                    <div className='bg-slate-300 w-5/6 mx-auto rounded-xl py-10 text-lg text-center'>
                         <h1 className='text-4xl mb-6'>Start <strong>{quizCard[0].name}</strong> Quiz!</h1>
                         <p className='text-lg'>{quizCard[0].description}</p>
                         <p className='mt-4'>
                              Act Fast! The timer will start running once you click the Start!  
                         </p>
                         <div className='flex justify-center items-center py-4 mt-4'>
                              <MdTimer style={{ fontSize: 28 }} className='mr-2' />
                              <p className='text-xl font-medium'><b>2:30</b> Minutes | <b>{quizCard[0].question}</b> Questions</p>
                              <BsFillQuestionSquareFill style={{ fontSize: 22 }} className='ml-2' />
                         </div>
                         <div className='flex justify-center pt-4'>
                              {
                                   questions.length === 0 && quizCard[0].isAvailable ? <p className='text-xl font-medium text-rose-500'>No quizzes available in this course!</p> : <button
                                        onClick={startQuiz}
                                        className='bg-rose-500 font-bold rounded-md text-white px-7 py-3 flex justify-center items-center'
                                   >
                                        Start Quiz Now
                                        <FaArrowRight className='ml-3' />
                                   </button>
                              }
                         </div>
                    </div>
               </div>

               <div className='container mx-auto py-20 w-5/6 md:w-4/6 relative' id='quiz' style={{ display: 'none' }}>
                    <div className='mx-auto w-3/4 sm:2-4 md:w-1/4'>
                         <div className='flex justify-center items-center py-3 mt-8 mb-4 rounded-full bg-violet-500 text-white'>
                              <MdTimer style={{ fontSize: 28 }} className='mr-2' />
                              <p className='text-xl font-medium' id='timer'>Countdown</p>
                         </div>
                    </div>


                    <progress className='progress w-full absolute progress-accent transition ease-in-out delay-150' value={progressValue} max='100' id='percentCount'></progress>
                    <div className='py-10 flex flex-col justify-center bg-slate-200 px-5 rounded-tr-md rounded-tl-md'>
                         <div className='mb-2'>
                              <h3 className='text-2xl text-center text-blue-900 font-semibold' id='questionText'>Title</h3>
                         </div>
                         <form className='w-5/6 mx-auto'>
                              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-auto' id='questionBody'>
                                   {/* questions will be appended here! */}
                                   {
                                        optionsList.map(({answerText, isCorrect, answerNo}) => <div className='flex items-center bg-slate-50 px-4 sm:px-8 py-4 rounded-xl' key={answerNo}>
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
          </div>
     );
};

export default Quiz;