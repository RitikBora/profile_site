import { ProjectCard } from "@/components/ui/ProjectCard";
import { RoundedInfo } from "@/components/ui/RoundedInfo";
import { div } from "framer-motion/client";

export default function Home() {
  return (
      <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-auto">
          <HeroSection/>
          <ProjectSection/>
      </div>
    </div>

  );
}


const HeroSection = () =>
{
  return(
    <div className="mx-36 my-8">
          <div className="text-4xl">
            👋
            <div className="text-gray-400 font-bold">Hello there! I'm Ritik</div>
          </div>
          <br />
          <div className="text-lg leading-snug">
             <div>
                I'm a full-stack developer that loves building products and web apps that can impact millions of lives
              </div>
              <br />
              <div>
              I have been building scalable web apps that are performance-optimized and stunningly designed <br /> for more than 2 years now.
              </div>
              <br />
               <div>
                I am working as a Software Developer Fellow at 0x.day from July 2024,<br />
                  and as a Software Engineer Intern at Devkit from August 2024.
              </div>
          </div>
          <div className="text-gray-400 font-semibold text-lg mt-12">
            What I've been working on
          </div>
        </div>
  )
}

const ProjectSection = () =>
{
  return(
      <div className="mx-36 flex flex-col gap-10">
        <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
        <ProjectCard title="Cat 1" description="A chat application inspired by discord with chat/audio/video call functionality" imageUrl="/images/cat.jpg"/>
      </div>
    )
  
}



