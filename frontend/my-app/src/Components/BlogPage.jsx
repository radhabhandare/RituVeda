import React from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";

const blogs = [
  { id: 1, title: "The Menstrual Cycle And Nutrition", image: "/nutri.png" },
  { id: 2, title: "Understanding PMS And PMDD", image: "/pms.png" },
  { id: 3, title: "Early Periods", image: "/early.png" },
  { id: 4, title: "What Scriptures Say About Periods?", image: "/say.png" },
  { id: 5, title: "Why Avoid Washing Hair During Periods?", image: "/hair.png" },
  { id: 6, title: "How Do Rituals Affect Our Cycle?", image: "/affect.png" },
  { id: 7, title: "Healthy Eating During Periods", image: "/eating.png" },
  { id: 8, title: "Best Exercises For Menstrual Health", image: "/exercise.png" },
  { id: 9, title: "Managing Period Pain Naturally", image: "/pain.png" },
];

const BlogPage = () => {
  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-red-700 underline">BLOGS</h1>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="text-center bg-pink-100 p-6 rounded-lg shadow-lg">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-4">{blog.title}</h2>
              <Link to={`/blog/${blog.id}`}>
                <button className="mt-4 bg-red-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-500">
                  Read More 📖
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
