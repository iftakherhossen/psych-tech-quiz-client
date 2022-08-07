import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdQuiz } from 'react-icons/md';
import database from '../../assets/database.json';

const Stats = () => {
     const quizzes = Object.keys(database.quizzes).length;
     const problems = Object.keys(database.problemsSolvingCategory).length;

     return (
          <div className="bg-white dark:bg-slate-800 flex justify-center pt-5 pb-16">
               <div className="stats shadow bg-white dark:bg-slate-800 w-4/6 py-5 flex flex-col md:flex-row">
                    <div className="stat">
                         <div className="stat-figure text-secondary">
                              <MdQuiz className="text-4xl" />
                         </div>                         
                         <div className="stat-value text-secondary">{quizzes}+ & {problems}+</div>
                         <div className="stat-title text-secondary text-xl opacity-100">Quiz & Problem Solving</div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="stat">
                         <div className="stat-figure text-primary">
                              <FiUsers className="text-4xl" />
                         </div>
                         <div className="stat-value text-primary">2.6M+</div>
                         <div className="stat-title text-primary text-xl opacity-100">Users</div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="stat">
                         <div className="stat-figure text-secondary">
                              <FaUserGraduate className="text-4xl" />
                         </div>
                         <div className="stat-value text-secondary">86%</div>  
                         <div className="stat-title text-secondary text-xl opacity-100">Are Best</div>                       
                    </div>
               </div>
          </div>
     );
};

export default Stats;