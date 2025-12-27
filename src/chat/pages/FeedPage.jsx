import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaEye
} from 'react-icons/fa';
import axios from 'axios';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});
  const [bookmarked, setBookmarked] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://ayi-backend.onrender.com/api/posts");
      setPosts(res.data.posts);
      res.data.posts.forEach((post) => incrementView(post._id));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const incrementView = async (postId) => {
    try {
      await axios.put(`https://ayi-backend.onrender.com/api/posts/${postId}/view`);
    } catch (error) {
      console.error("Error updating view count:", error.message);
    }
  };

  const toggleLike = async (postId) => {
    try {
      const res = await axios.post(`https://ayi-backend.onrender.com/api/posts/${postId}/like`, { userId });
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, likes: res.data.likes } : post
        )
      );
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    }
  };

  const toggleBookmark = (postId) => {
    setBookmarked((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const handleRepost = async (post) => {
    if (post.user?._id === userId) {
      alert("You cannot repost your own post.");
      return;
    }
  
    try {
      const res = await axios.post(`https://ayi-backend.onrender.com/api/posts/${post._id}/repost`, {
        userId, // ✅ CORRECT
      });
      setPosts((prev) => [res.data.post, ...prev]);
    } catch (error) {
      alert(error.response?.data?.error || "Error reposting post.");
      console.error("Error reposting:", error.message);
    }
  };
  
  const postComment = async (postId) => {
    const text = commentInputs[postId];
    if (!text) return;

    try {
      const res = await axios.post(`https://ayi-backend.onrender.com/api/posts/${postId}/comment`, {
        userId,
        text,
      });

      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, comments: res.data.comments } : post
        )
      );
      setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <motion.div
        className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Community Feed</h2>

        <div className="flex items-center justify-between border-b-4 border-b-blue-700 py-2 mb-4">
          <h1 className="font-bold text-lg">For you</h1>
          <button
            onClick={() => window.location.href = '/ayi-sphere/community/posts'}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-semibold shadow hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>

        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="bg-white p-5 mb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Repost indicator */}
            {post.originalPost && (
              <p className="text-sm italic text-gray-500 mb-2">🔁 Reposted</p>
            )}

            {/* User Info */}
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {post.user?.names?.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{post.user?.names}</h3>
                <p className="text-sm text-gray-500">
                  {post.timestamp && new Date(post.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-800 text-lg">{post.content}</p>

            {/* Image */}
            {post.image && (
              <div className="mt-4">
                <img src={post.image} alt="Post Media" className="w-full h-auto rounded-lg" />
              </div>
            )}

            {/* Interaction Buttons */}
            <div className="flex space-x-6 mt-4 text-gray-600 flex-wrap">
              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-600"
                onClick={() => toggleLike(post._id)}
              >
                <FaThumbsUp size={20} />
                <span className="text-sm">{post.likes?.length || 0}</span>
              </div>

              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                <FaComment size={20} />
                <span className="text-sm">{post.comments?.length || 0}</span>
              </div>

              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-green-600"
                onClick={() => handleRepost(post)}
              >
                <FaShare size={20} />
                <span className="text-sm">Repost</span>
              </div>

              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-yellow-500"
                onClick={() => toggleBookmark(post._id)}
              >
                {bookmarked.includes(post._id) ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
                <span className="text-sm">Bookmark</span>
              </div>

              <div className="flex items-center space-x-1">
                <FaEye size={20} />
                <span className="text-sm">{post.views || 1}</span>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-4 space-y-2">
              {post.comments.map((comment, index) => (
                <div key={index} className="text-sm text-gray-700 border-l-4 border-blue-200 pl-3">
                  <strong>{comment.user?.names || 'User'}:</strong> {comment.text}
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="w-full py-4 space-x-3 flex mt-2">
              <input
                type="text"
                value={commentInputs[post._id] || ""}
                onChange={(e) =>
                  setCommentInputs((prev) => ({
                    ...prev,
                    [post._id]: e.target.value,
                  }))
                }
                className="flex-1 border-2 border-slate-200 rounded-md outline-none py-1 px-3"
                placeholder="Add comment..."
              />
              <button
                onClick={() => postComment(post._id)}
                className="bg-blue-500 py-1 px-3 text-white font-semibold rounded-md"
              >
                Comment
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeedPage;
