import React, { useState, useEffect } from 'react';
import SinglePostCard from './SinglePostCard';

const FeaturedPosts = () => {
     const [posts, setPosts] = useState([]);
     const [refresh, setRefresh] = useState();

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.json())
               .then(data => setPosts(data));
     }, []);

     const shuffleArray = array => {
          let i = array.length - 1;
          for (i; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
          return array;
     };
  
     const shuffledPosts = shuffleArray(posts);

     const handleMorePosts = () =>{
          setRefresh({});
     };

     return (
          <section className='container mx-auto mt-16 pb-20 px-2 lg:px-4'>
               {
                    shuffledPosts.slice(0, 10).map((post) => <SinglePostCard
                         key={post.id}
                         post={post}
                    />)
               }
               {
                    posts.length > 10 &&<div className="flex justify-center">
                         <button className="btn bg-rose-500" onClick={handleMorePosts}>Load More!</button>
                    </div>
               }
        </section>
     );
};

export default FeaturedPosts;