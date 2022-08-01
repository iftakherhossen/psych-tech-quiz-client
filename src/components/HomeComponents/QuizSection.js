import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import quizzes from '../../assets/quizzes';
import SingleCard from './SingleCard';

const QuizSection = () => {
     const [allQuizzes, setAllQuizzes] = useState([]);
     const [showMore, setShowMore] = useState(false);
     const [category, setCategory] = useState('');

     // sort by isAvailable
     // const sortArray = allQuizzes.sort((x, y) => {
     //      return (x.isAvailable === y.isAvailable) ? 0 : x.isAvailable ? -1 : 1;
     // });

     useEffect(() => {
          setAllQuizzes(quizzes.sort());
     }, []);

     const handleShow = () => {
          setShowMore(true);

     };
     const handleHide = () => {
          setShowMore(false);
     }

     const shuffleArray = array => {
          let i = array.length - 1;

          for (i; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               const temp = array[i];
               array[i] = array[j];
               array[j] = temp;
          }

          return array;
     }

     const shuffledQuizzes = shuffleArray(allQuizzes).slice(0, 6);

     const categoryList = allQuizzes.map(({category}) => category);

     const categories = categoryList.filter((category, index) => {
          return categoryList.indexOf(category) === index;
     });
     const filterCourseByCategory = category => {
          return allQuizzes.filter(course => course.category === category);
     }

     const filteredQuizzesCalled = filterCourseByCategory(category);
     const filteredQuiz = filteredQuizzesCalled.map((course) => <SingleCard key={course.id} course={course} />);

     return (
          <div className='bg-white dark:bg-slate-800'>
               <div className="w-5/6 mx-auto sm:py-5 lg:py-10">
                    <Tabs>
                         <TabList>
                              <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>All</Tab>
                              {
                                   categories.sort().map((category, index) => <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }} key={index} onClick={() => setCategory(category)}>{category}</Tab>)
                              }
                         </TabList>

                         <TabPanel>
                              <div className="py-10">
                                   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                                        {
                                             showMore === false ? shuffledQuizzes.map(course => <SingleCard
                                                  key={course.id}
                                                  course={course}
                                             />) : allQuizzes.map(course => <SingleCard
                                                  key={course.id}
                                                  course={course}
                                             />)
                                        }
                                   </div>

                                   <div className="card-actions justify-center mt-16">
                                        {
                                             !showMore ? <button className="btn bg-rose-500 border-0" onClick={handleShow}>
                                                  Show More!
                                             </button> : <button className="btn bg-rose-500 border-0" onClick={handleHide}>
                                                  Show Less!
                                             </button>
                                        }
                                   </div>
                              </div>
                         </TabPanel>
                         {
                              categories.map(index => <TabPanel key={index}>
                                   {
                                        showMore === false ? (<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-x-5 gap-y-6">
                                             {filteredQuiz.slice(0, 6)}
                                        </div>) : (<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-x-5 gap-y-6">
                                             {filteredQuiz}
                                        </div>)
                                   }
                                   
                                   {
                                        (filteredQuiz.length > 6) === true && <div className="card-actions justify-center mt-16">
                                             {
                                                  !showMore ? <button className="btn bg-rose-500 border-0" onClick={handleShow}>
                                                       Show More!
                                                  </button> : <button className="btn bg-rose-500 border-0" onClick={handleHide}>
                                                       Show Less!
                                                  </button>
                                             }
                                        </div>
                                   }
                              </TabPanel>)
                         }
                    </Tabs>
               </div>
          </div>
     );
};

export default QuizSection;