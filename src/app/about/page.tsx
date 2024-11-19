"use client"
import { LitUpButton } from "@/components/ui/LitUpButton";
import { motion} from "framer-motion";
import { div } from "framer-motion/client";
import Typewriter from 'typewriter-effect';


export default function About () {


  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="mx-36 my-8 flex flex-col gap-8 max-w-4xl">
            <div className="text-4xl">
              💬
             <div className="text-gray-400 font-bold">About Me</div>
             <TypeWriter/>
            </div>
            

            <AboutSection/>
          </div>
      </div>
    </div>
  );
};


const AboutSection = () =>
{
    const variants = {
    hidden: { y: -20, opacity: 0 },  
    visible: { y: 0, opacity: 1 },  
  }
  return(
    <div className="pt-10 flex flex-1 gap-16" >
       <motion.div
              className="w-full h-auto flex flex-col gap-12 "
              initial="hidden"        
              animate="visible"   
              variants={variants}
              transition={{ duration: 0.2 }}  
            >
              <img src="/images/about.png" alt="me" height="300px" width="300px" className="flex-initial rounded-lg rotate-3 border-4 border-black"/>
              <div className="flex gap-10 pl-3">
                <LitUpButton text="view resume" href="https://drive.google.com/file/d/10ichiHcIg3i3ybQr4GhCHIjeieKYSfMz/view"/>
                <LitUpButton text="hire me" href="mailto:ritikbora2000@gmail.com"/>
              </div>      
            </motion.div>
       <div className="text-lg pt-2 flex flex-col gap-5">
        <div>
          Hi! My name is Ritik Bora and I am Software Engineer with 3 years of experience in developing and maintaining high-performance software applications. 
        </div>
        <div>
          I'm proficient in the MERN stack, Next.js
          and Java, which allows me to build scalable solutions tailored to diverse client needs.
        </div>
        <div>
          I have led cross-functional teams to deliver impactful projects. With strong problem-solving abilities
          and excellent communication skills, I am dedicated to delivering high-quality software solutions
          that exceed expectations.
        </div>
        <div>
          I'm probably the most passionate developer you would ever get to work with.
          If you have some great projects that need some amazing skills. I'm your guy.
        </div>
      </div>
    </div>
  )
}


const TypeWriter = () =>
{
 
const quotes : string[]= [  "Play like a champion, or don’t play at all" , "No balls No Babies" , "Champions keep playing until they get it right"  ]
return(
  <div className="pt-2 text-lg text-gray-400">
    <Typewriter
    options={{
      strings: quotes,
      autoStart: true,
      loop: true,
    }}
    />
  </div>
)
}

