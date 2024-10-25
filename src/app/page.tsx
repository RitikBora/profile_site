
import { ProjectSection } from "@/components/ui/ProjectSection";


export default function Home() {
  return (
      <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-auto">
          <HeroSection/>
          
          <div className="mx-36">
            <ProjectSection/>
          </div>
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
          <div className="text-lg text-gray-400 leading-snug">
             <div>
                I’m a full-stack developer with over 3 years of experience building scalable web applications. Currently, I work as a Senior Software Developer at <span className="cursor-pointer">miniOrange</span>, a leading product-based company in the cybersecurity domain. </div>
              <br />
             
               
          </div>
          <div className="text-gray-400 font-semibold text-lg mt-12">
            What I've been working on
          </div>
        </div>
  )
}




