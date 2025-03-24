

import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  // Static JSON data
  const blogs = [
    {
      id: '1',
      image: '/images/services/agri_hero.jpg',
      title: 'Tech Innovations 2025',
      description: 'A glimpse into upcoming technological advancements.',
      category: 'Technology',
    },
    {
      id: '2',
      image: '/images/services/agri_hero.jpg',
      title: 'How to Build a Startup',
      description: 'Tips and strategies for launching your own startup.',
      category: 'Startup',
    },
    {
      id: '3',
      image: '/images/services/agri_hero.jpg',
      title: 'Healthy Living',
      description: 'Ways to maintain a balanced and healthy lifestyle.',
      category: 'Lifestyle',
    },
  ];

  return (
    <div className='relative top-12 p-16'>
     <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>

      <div style={{display:"flex",flexDirection:"column"}}>

      <h2 style={{fontSize:"52px",fontWeight:"700"}}>Blog Posts</h2>
      <div style={{fontSize:"26px",color:"grey"}}>Simple Stories on Farming and Agriculture</div>
      </div>
     
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16'>
        {blogs.filter((item) => menu === 'All' ? true : item.category === menu).map((item, index) => {
          return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
      </div>
        </div>
    </div>
  );
}

export default BlogList;

