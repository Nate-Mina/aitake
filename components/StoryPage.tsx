
import React from 'react';

interface StoryPageProps {
  title: string;
  image: string;
  text: string;
}

export const StoryPage: React.FC<StoryPageProps> = ({ title, image, text }) => {
  return (
    <div className="page border border-green-400 p-6 mb-10 bg-gray-900/50 rounded-lg shadow-lg shadow-green-400/10 transition-all duration-300 hover:shadow-green-400/20 hover:border-green-300">
      <h2 className="text-2xl text-center mb-4 text-green-300">{title}</h2>
      <div className="flex justify-center my-4">
        <img 
          src={image} 
          alt={`Illustration for ${title}`} 
          className="w-full max-w-sm h-auto object-cover rounded-md border-2 border-green-500/50 shadow-lg shadow-green-400/10"
          aria-label={`Illustration for ${title}`}
        />
      </div>
      <p className="leading-relaxed text-justify text-green-400/90">{text}</p>
    </div>
  );
};
