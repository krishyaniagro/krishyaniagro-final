import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="flex flex-wrap gap-6"> {/* Flex container to align items horizontally */}
    
      <div
        key={id}
        className="w-full sm:w-[320px] md:w-[350px] lg:w-[400px] border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <Link href={`/blogs/${id}`} className="text-blue-500 hover:underline mt-2 inline-block">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem;
