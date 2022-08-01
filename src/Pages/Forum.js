import React from 'react';
import FeaturedPosts from '../components/ForumComponents/FeaturedPosts';
import ForumSearchBar from '../components/ForumComponents/ForumSearchBar';

const Forum = () => {
     return (
          <div className="bg-white dark:bg-slate-800">
               <div className='container mx-auto bg-white dark:bg-slate-800'>
                    <h1 className='text-5xl font-bold text-center pt-20 pb-12 text-violet-800 px-4 dark:text-violet-400'>
                         Welcome to our forum
                    </h1>
               </div>
               <ForumSearchBar />
               <FeaturedPosts />
          </div>
     );
};

export default Forum;