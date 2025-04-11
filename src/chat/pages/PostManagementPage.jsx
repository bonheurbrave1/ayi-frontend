import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing React Icons for the trash icon
import { motion } from "framer-motion"; // For smooth animations

function PostManagementPage() {
  const [newPostDescription, setNewPostDescription] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: "First post description",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      description: "Second post description",
      image: "https://via.placeholder.com/150",
    },
  ]);

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
          className="block w-full mb-4"
          onChange={(e) =>
            setNewPostImage(URL.createObjectURL(e.target.files[0]))
          }
        />
        <label htmlFor="file" className=" py-2 rounded-md text-center bg-slate-300 font-bold block w-1/4" >Select File</label>
        <button className="bg-blue-500 w-full text-white mt-2 py-2 px-6 rounded-md  hover:bg-blue-600 transition duration-300">
          Create Post
        </button>
      </motion.div>

      {/* Displaying Existing Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Your Posts
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-500">
            No posts available. Create your first post!
          </p>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white p-6 mb-4 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="post-content mb-4">
                <p className="text-gray-700 text-lg mb-2">{post.description}</p>
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
                  onClick={() =>
                    setPosts(posts.filter((p) => p.id !== post.id))
                  } // Example delete functionality
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
