"use client"
import {motion} from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export const ProjectSection = () =>
{
  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1, 
      },
    },
  };

  const childVariants = {
    hidden: { x: -100, opacity: 0 }, 
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.3 }, 
    },
  };

  return(
      
       <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-col gap-10'
       >
        <motion.div variants={childVariants}>
          <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        </motion.div>
        <motion.div variants={childVariants}>
          <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        </motion.div>
        <motion.div variants={childVariants}>
          <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        </motion.div>
        <motion.div variants={childVariants}>
          <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        </motion.div>
       </motion.div>
      
    )
  
}
