import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-[210px] h-[359px] rounded-lg overflow-hidden group">
    <img 
      src={image} 
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="absolute bottom-6 left-5 right-5">
      <h3 className="text-white font-bold text-sm leading-[19px] mb-5">
        {title}
      </h3>
      <div className="flex items-center text-white">
        <span className="text-xs font-semibold mr-2">Continue reading</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      title: "Top 10 best appreciating condos in Las Vegas"
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80",
      title: "The top 5 most livable Las Vegas neighborhood"
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80",
      title: "In Las Vegas home prices have doubled in the..."
    },
    {
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
      title: "Las Vegas neighborhood where it's better..."
    }
  ];

  return (
    <div className="container mx-auto py-24">
      <div className="mb-16">
        <h2 className="text-3xl font-bold">THE MOST RECENT</h2>
        <h2 className="text-3xl font-bold mt-4">LOCAL REAL ESTATE NEWS</h2>
      </div>
      
      <div className="flex justify-between">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;