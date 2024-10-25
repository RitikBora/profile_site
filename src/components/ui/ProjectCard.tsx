"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { RoundedInfo } from './RoundedInfo';



export const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  techStack
}: {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string,
  techStack: string[]
}) => {

  return (
    <div
      className="flex flex-1 cursor-pointer" 
      onClick={() => {
        window.open("https://www.linkedin.com/in/ritikbora" , '_blank');
      }}    
    >
      <img
        src={imageUrl}
        alt="Project"
        height={'100px'}
        width={'180px'}
        className="rounded-lg border-4 border-gray-400"
      />
      <div className="ml-8">
        <div className="text-lg font-semibold text-gray-400">{title}</div>
        <div className="text-sm mt-2">{description}</div>
        <div className="flex gap-2 mt-5">
          {techStack.map((tech , index) => {
            return(
              <RoundedInfo innerText={tech} key={index}/>
            )
          })}

        </div>
      </div>
    </div>
  );
};
