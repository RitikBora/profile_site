
import { ProjectSection } from "@/components/ui/ProjectSection";


export default function Home() {
  return (
      <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-auto">
          <div className="max-w-6xl">
            <HeroSection/>
          
            <div className="mx-36">
              <ProjectSection/>
            </div>
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
          <div className="text-lg  leading-loose">
             <div>
                I’m a <span className="bg-neutral-700 rounded-lg px-2">full-stack developer</span> with over 3 years of experience building scalable web applications. Currently, I work as a <span className="bg-neutral-700 rounded-lg px-2">Senior Software Developer</span> at <a className="cursor-pointer text-blue-500">miniOrange</a>, a leading product-based company in the <span className="bg-neutral-700 rounded-lg px-2">cybersecurity</span>  domain.</div>
              <br />
             
               
          </div>
          <div className="text-gray-400 font-semibold text-lg mt-6">
            What I've been working on
          </div>
        </div>
  )
}




