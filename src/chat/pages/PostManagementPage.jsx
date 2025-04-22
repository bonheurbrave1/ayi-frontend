import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

function PostManagementPage() {
  const [newPostDescription, setNewPostDescription] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [posts, setPosts] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetchPosts();
    } else {
      console.warn("User ID not found in localStorage");
    }
  }, [userId]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      const myPosts = res.data.posts.filter(
        (post) => post.user?._id === userId
      );
      setPosts(myPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewPostImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleCreatePost = async () => {
    if (!userId) return alert("User not authenticated. Please log in.");
    if (!newPostDescription.trim()) return alert("Please enter a description");

    const formData = new FormData();
    formData.append("user", userId);
    formData.append("content", newPostDescription);
    if (newPostImage) formData.append("image", newPostImage);

    try {
      const res = await axios.post("http://localhost:5000/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPosts([res.data.post, ...posts]);
      setNewPostDescription("");
      setNewPostImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
      alert("Failed to create post.");
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error.response?.data || error.message);
      alert("Failed to delete post. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Post Management
      </h1>

      {/* Create Post Form */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-md"
          placeholder="Write a description..."
          value={newPostDescription}
          onChange={(e) => setNewPostDescription(e.target.value)}
        />
        <input
          hidden
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label
          htmlFor="file"
          className="py-2 rounded-md text-center bg-slate-300 font-bold block w-1/4 cursor-pointer"
        >
          Select File
        </label>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-64 object-cover mt-4 rounded-md"
          />
        )}
        <button
          className="bg-blue-500 w-full text-white mt-2 py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </motion.div>

      {/* Display User's Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts available. Create your first post!</p>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post._id}
              className="bg-white p-6 mb-4 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="post-content mb-4">
                <p className="text-gray-700 text-lg mb-2">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-64 object-cover rounded-md"
                  />
                )}
              </div>
              <div className="flex justify-end">
                <button
                  className="text-red-500 hover:text-red-600 flex items-center space-x-2"
                  onClick={() => handleDeletePost(post._id)}
                >
                  <FaTrashAlt />
                  <span>Delete Post</span>
                </button>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default PostManagementPage;
