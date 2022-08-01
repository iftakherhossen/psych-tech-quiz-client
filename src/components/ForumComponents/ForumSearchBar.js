import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from 'react';
import SinglePostCard from './SinglePostCard';

const ForumSearchBar = () => {
     const [searchText, setSearchText] = useState('');
     const [posts, setPosts] = useState([]);
     const [results, setResults] = useState([]);

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.json())
               .then(data => setPosts(data));
     }, []);

     const requestSearch = (searchedValue) => {
          setSearchText(searchedValue);
          const filteredItems = posts.filter((item) => {
               return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });

          setResults(filteredItems);
     };

     const cancelSearch = () => {
          setSearchText('');
          requestSearch(searchText);
          window.location.reload();
     };

     return (
          <section className='container mx-auto'>
               <form className='flex justify-center'>
                    <SearchBar
                         value={searchText}
                         onChange={(searchedValue) => requestSearch(searchedValue)}
                         onCancelSearch={() => cancelSearch()}
                         placeholder="Let's find out your interested topic/blog"
                         autoFocus
                         className="pl-2 w-4/6 sm:w-2/3 md:w-2/4 lg:2/5 bg-slate-200 focus:outline-none border rounded-xl"
                         style={{ borderRadius: 25 }}
                    />
               </form>

               <div className="text-center mt-5">
                    {
                         results.length > 0 && <p className="text-slate-400 text-base">Result Found: <span className="font-bold">{results.length}</span></p>
                    }
                    {
                         searchText && results.length === 0 && <p className="text-red-600 dark:text-red-400 text-base">Result Not Found!</p>
                    }
               </div>

               <div className="pt-5">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                         {
                              results.map(post => <SinglePostCard key={post.id} post={post} searchText={searchText} />)
                         }
                    </div>
               </div>
          </section>
     );
};

export default ForumSearchBar;