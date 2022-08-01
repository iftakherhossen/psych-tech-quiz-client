import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import problems from '../../assets/problems';
import SingleCard from './SingleCard';

const ProblemSolvingSection = () => {
     const [allProblems, setAllProblems] = useState([]);
     const [showMore, setShowMore] = useState(false);

     useEffect(() => {
          setAllProblems(problems.sort());
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

     const shuffledProblems = shuffleArray(allProblems).slice(0, 6);

     return (
          <div className='bg-white dark:bg-slate-800'>
               <div className="w-5/6 mx-auto sm:py-5 lg:py-10">
                    <Tabs>
                         <TabList>
                              <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>All</Tab>
                         </TabList>

                         <TabPanel>
                              <div className="py-10">
                                   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                                        {
                                             showMore === false ? shuffledProblems.map(course => <SingleCard
                                                  key={course.id}
                                                  course={course}
                                                  problem={true}
                                             />) : allProblems.map(course => <SingleCard
                                                  key={course.id}
                                                  course={course}
                                                  problem={true}
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
                    </Tabs>
               </div>
          </div>
     );
};

export default ProblemSolvingSection;