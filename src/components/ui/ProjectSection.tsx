"use client"
import {motion} from 'framer-motion';
import { ProjectCard } from './ProjectCard';



type Project = {
  title: string,
  description: string,
  imageUrl: string,
  projectLink: string
  techStack: string[],
}


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


  const projects : Project[]= [
    {
      title: "Cat 1",
      description: "A chat application inspired by discord with chat/audio/video call functionality",
      imageUrl: "/images/cat.jpg",
      projectLink: "/",
      techStack: ["Nextjs" , "Tailwind" , "WebRTC"]
    },
    {
      title: "Cat 1",
      description: "A chat application inspired by discord with chat/audio/video call functionality",
      imageUrl: "/images/cat.jpg",
      projectLink: "/",
      techStack: ["Nextjs" , "Tailwind" , "WebRTC"]

    },
    {
      title: "Cat 1",
      description: "A chat application inspired by discord with chat/audio/video call functionality",
      imageUrl: "/images/cat.jpg",
      projectLink: "/",
      techStack: ["Nextjs" , "Tailwind" , "WebRTC"]

    },
    {
      title: "Cat 1",
      description: "A chat application inspired by discord with chat/audio/video call functionality",
      imageUrl: "/images/cat.jpg",
      projectLink: "/",
      techStack: ["Nextjs" , "Tailwind" , "WebRTC"]

    }
  ]
export const ProjectSection = () =>
{
  

  return(
      
       <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-col gap-10'
       >
       {
        projects.map((project , index) => {
          return(
            <motion.div variants={childVariants} key={index}>
              <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} projectLink={project.projectLink} techStack={project.techStack}/>
            </motion.div>
          )
        })
       }
       </motion.div>
      
    )
  
}

