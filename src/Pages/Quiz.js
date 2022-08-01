import React, { useState } from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import questions from '../assets/questions';
import quizzes from '../assets/quizzes';
import QuizSection from '../components/QuizPageComponents/QuizSection';

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

                   <QuizSection
                         nextId={nextId}
                         progressValue={progressValue}
                         validated={validated}
                         optionsList={optionsList}
                         nextQuestion={nextQuestion}
                         handleScore={handleScore}
                   />
               </div>
          </div>
     );
};

export default Quiz;