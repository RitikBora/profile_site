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
      title: "Crypto Screener & Exchange Platform",
      description: "Your all-in-one hub for tracking and trading across global crypto markets.",
      imageUrl: "/images/xchange.png",
      projectLink: "https://xchange.ritikboradev.com/",
      techStack: ["Nextjs" , "Web3" , "ShadCN"]
    },
    {
      title: "MeetWise - Connect, Collaborate, Succeed",
      description: "Smart, seamless video meetings for effective collaboration",
      imageUrl: "/images/meetwise.png",
      projectLink: "https://meetwise.ritikboradev.com/",
      techStack: ["WebRTC" , "WebSockets" , "Framer motion" , "Reactjs"]
    },
      {
      title: "ChessMates - Elevate Your Chess Game",
      description: "A P2P Realtime Chess player",
      imageUrl: "/images/chess.png",
      projectLink: "https://chess.ritikboradev.com/",
      techStack: ["Reactjs", "WebSockets" , "Framer motion" ]
    },
    
    {
      title: "TokenForge - Token Creation & Airdrop Platform",
      description: "Unlock the future of Web3 with TokenForge – your gateway to effortless token creation and airdrop distribution.",
      imageUrl: "/images/token_forge.png",
      projectLink: "https://tokenforge.ritikboradev.com/",
      techStack: ["ReactJS", "Web3", "Daaps"]
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

