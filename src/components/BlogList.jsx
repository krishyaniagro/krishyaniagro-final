

import React, { useState } from 'react';
import BlogItem from './BlogItem';
import { useLanguage } from '@/app/languagecontext';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const { language } = useLanguage();
  // Static JSON data
  const blogs = [
    {
      id: '1',
      image: '/blogs/blog1_home.jpg',
      title: {
      en: 'Modern Agricultural Technologies: A Path to Higher Productivity and Profitability',
      hi: 'आधुनिक कृषि तकनीक: उच्च उत्पादकता और लाभप्रदता का मार्ग',
      mr: 'आधुनिक शेती तंत्रज्ञान: अधिक उत्पादकता आणि नफ्याचा मार्ग'
    },
      category: 'Technology',
    }
  ];

  return (
    <div className='relative top-12 p-16'>
     <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>

      <div style={{display:"flex",flexDirection:"column"}}>

      <h2 style={{fontSize:"52px",fontWeight:"700"}}>Blog Posts</h2>
      <div style={{fontSize:"26px",color:"grey"}}>Simple Stories on Farming and Agriculture</div>
      </div>
     
      <div className='flex flex-wrap gap-1 gap-y-10 mb-16'>
        {blogs.filter((item) => menu === 'All' ? true : item.category === menu).map((item, index) => {
          return <BlogItem key={index} id={item.id} image={item.image} title={item.title?.[language]}  category={item.category} />
        })}
      </div>
        </div>
    </div>
  );
}

export default BlogList;

