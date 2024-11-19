import CareerTimeline from "@/components/ui/TimeLine";

export default function Career () {

 
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-auto">
        <div className="mx-24 my-8 flex flex-col gap-12  max-w-5xl">
            <div className="text-4xl">
             <img src="/images/career_logo.png" width={"40px"} height={"40px"}/> 
             <div className="text-gray-400 font-bold">My Career</div>
            </div>
            <CareerTimeline/>
          
        </div>
      </div>
    </div>
  );
};
