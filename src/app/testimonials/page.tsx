import TestimonialCarousel from "@/components/ui/Testimonials";

export default function About () {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="mx-36 my-8 flex flex-col gap-28">
            <div className="text-4xl">
              💬
              <div className="text-gray-400 font-bold">Testimonials</div>
            </div>
            <div className="">
              <TestimonialCarousel/>
            </div>
        </div> 
      </div>
    </div>
  );
};

