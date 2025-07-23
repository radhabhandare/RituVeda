import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "The Menstrual Cycle And Nutrition" },
  { id: 2, title: "Understanding PMS And PMDD" },
  { id: 3, title: "Early Periods" },
  { id: 4, title: "What Scriptures Say About Periods?" },
  { id: 5, title: "Why Avoid Washing Hair During Periods?" },
  { id: 6, title: "How Do Rituals Affect Our Cycle?" },
  { id: 7, title: "Healthy Eating During Periods" },
  { id: 8, title: "Best Exercises For Menstrual Health" },
  { id: 9, title: "Managing Period Pain Naturally" },
];

const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-red-700 underline">Blogs</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="text-center bg-pink-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <Link to={`/blog/${blog.id}`}>
              <button className="mt-4 bg-red-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-500">
                Read More 📖
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
