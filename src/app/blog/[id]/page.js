"use client"
import { useParams } from "next/navigation";

const blogPosts = [
  {
    id: "1",
    title: "How to Start with React",
    content: "This is a detailed guide on how to start with React...",
    image: "/images/services/agri_hero.jpg",
  },
  {
    id: "2",
    title: "Understanding Next.js",
    content: "Next.js is a React framework that enables server-side rendering...",
    image: "/images/services/agri_hero.jpg",
  },
  {
    id: "3",
    title: "Best UI Libraries for React",
    content: "Material-UI, Ant Design, and Chakra UI are among the best...",
    image: "/images/services/agri_hero.jpg",
  },
];

export default function BlogDetail() {
//   const router = useRouter();
  const { id } = useParams;
console.log(id)
console.log(blogPosts.find((post) => post.id))
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return <h2 className="text-center text-2xl mt-10">Blog Not Found</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
}
