// import React from 'react'

// function Blogs() {
//   return (
//     <div className='relative top-12 p-16'>
//     </div>
//   )
// }

// export default Blogs

import React from "react";
import Link from "next/link";

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Start with React",
      description: "A beginner-friendly guide to getting started with React.",
      image: "images/services/agri_hero.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Understanding Next.js",
      description: "Learn how Next.js makes server-side rendering easy.",
      image: "images/services/agri_hero.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Best UI Libraries for React",
      description: "A list of the top UI libraries to use with React in 2024.",
      image: "images/services/agri_hero.jpg",
      link: "#",
    },
  ];

  return (
    <div className="relative top-12 p-16">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              {/* <a href={post.link} className="text-blue-500 hover:underline mt-2 inline-block">
                Read More →
              </a> */}
             <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Read More →
              </Link>
              {console.log(post.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
