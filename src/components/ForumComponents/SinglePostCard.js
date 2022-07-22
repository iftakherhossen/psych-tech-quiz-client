import React, { useEffect, useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaComment, FaHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SinglePostCard = ({ post, searchText }) => {
     const { id, userId, title, body } = post;
     const [comments, setComments] = useState([]);
     const [user, setUser] = useState([]);

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
               .then(res => res.json())
               .then(data => setComments(data));
     }, [id]);

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
               .then(res => res.json())
               .then(data => setUser(data));
     }, [userId]);


     const handleReact = id => {
          // const loading = toast.loading('Please wait ...');
          // let liked = false;

          // const alreadyLiked = addToStorage(id, liked);

          // if (alreadyLiked) {
          //     toast.dismiss(loading);
          //     toast("You've already liked it!", {
          //         icon: '🥳',
          //     });
          // } else {
          //     dispatch(topicReact(forum));
          //     document.getElementById(`icon-heart-${id}`).classList.add('text-rose-500');
          //     setReacts(reacts + 1);
          //     toast.dismiss(loading);
          //     toast.success("You've liked the post!");
          // }
     }

     const Highlighted = () => {
          if (!searchText.trim()) {
               return <span>{title}</span>;
          }
          const regex = new RegExp(`(${searchText})`, "gi");
          const parts = title.split(regex);

          return (
               <h1 className="text-2xl mb-2 post-content">
                    {
                         parts.filter(String).map((part, i) => {
                              return regex.test(part) ? (
                                   <span className="text-2xl font-bold post-content text-rose-500 dark:text-yellow-300 " key={i}>{part}</span>
                              ) : (
                                   <span className="text-2xl font-bold text-violet-800 mb-2 dark:text-violet-400 post-content " key={i}>{part}</span>
                              );
                         })
                    }
               </h1>
          );
     }

     const reactGenerator = Math.floor(Math.random() * 999 + 10);

     const username = user.name.replace(/ /g,"_"); 

     return (
          <Link to={`/forum/${username}/${id}`}>
               <div className="my-5 mx-5 bg-slate-100 rounded-md shadow-md pt-5 dark:bg-slate-700">
                    <div className="px-4 sm:px-8">
                         <div className="flex items-center">
                              <div className="avatar">
                                   <div className="w-12 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" alt="User" />
                                   </div>
                              </div>
                              <div className="ml-3 text-slate-600 dark:text-slate-200">
                                   <Link to="/profile/username"><h2 className="text-lg mb-0.5 font-bold">{user.name}</h2></Link>
                                   <h6 className="text-sm flex items-center"><FaClock className="mr-1 text-sm" /> 22/07/2022, &nbsp; <FaMapMarkerAlt className="mr-1 text-sm" /> {user.address?.city}</h6>
                              </div>
                         </div>
                         <div className="divider mt-1 mb-2"></div>
                         <div>
                              {
                                   searchText && <Highlighted>
                                        <h1 className="text-2xl font-bold text-violet-800 mb-2 dark:text-violet-400 post-content">{title}</h1>
                                   </Highlighted>
                              }
                              <p className="text-slate-500 dark:text-slate-200 post-content">{body}.</p>
                         </div>
                         <div className="flex justify-end py-3 mb-1 mt-auto">
                              <p className="flex items-center font-semibold mr-5 text-lg dark:text-slate-200 mx-1">
                                   {/* <span className="my-auto mr-1 cursor-pointer text-slate-600 dark:text-slate-500" onClick={() => handleReact(id)}>
                                        <i className="fa fa-heart" id={`icon-heart-${id}`}></i>
                                   </span> {reacts} */}
                                   <span className="my-auto mr-2"><FaHeart /></span> {reactGenerator}
                              </p>
                              <p className="flex items-center font-semibold mr-5 text-lg dark:text-slate-200 mx-1">
                                   <span className="my-auto mr-2"><FaComment /></span> {comments.length}
                              </p>
                              <p className="flex items-center font-semibold mr-5 text-lg dark:text-slate-200 mx-1">
                                   <span className="my-auto mr-2"><FaShare /></span>
                              </p>
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default SinglePostCard;