"use client"
import {motion} from 'framer-motion'
import { IconBriefcase, IconCalendar, IconSchool } from '@tabler/icons-react'

interface TimelineEntry {
  title: string
  company: string
  date: string
  description: string
  type: 'work' | 'education'
}

const timelineData: TimelineEntry[] = [
  {
    title: 'Senior Software Engineer',
    company: 'miniOrange',
    date: 'Oct 2024 - Present',
    description: 'Leading development of cutting-edge web applications using React and Node.js.',
    type: 'work',
  },
  {
    title: 'Software Engineer',
    company: 'miniOrange',
    date: '2021 - 2024',
    description: 'Specialized in Artificial Intelligence and Machine Learning.',
    type: 'work',
  },
  {
    title: 'Software Developer Intern',
    company: 'Copper Cloud',
    date: '2020 - 2021',
    description: 'Developed and maintained multiple client-facing applications.',
    type: 'work',
  },
  {
    title: 'Bachelor\'s in E&TC',
    company: 'Army Institute of Technology, Pune',
    date: '2017 - 2021',
    description: 'Graduated with honors. Focused on web technologies and software architecture.',
    type: 'education',
  },
]

export default function CareerTimeline() {
   const variants = {
    hidden: { y: -20, opacity: 0 },  
    visible: { y: 0, opacity: 1 },  
  }

  return (
    <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{duration: 0.2}}
          >
    <div className="container mx-auto px-4 py-8">
      <div className="relative wrap overflow-hidden p-4 md:p-10">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border left-1/2 hidden md:block"></div>
        {timelineData.map((entry, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
          }`}>
            <div className="order-1 w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 dark:bg-neutral-800 shadow-xl w-10 h-10 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {entry.type === 'work' ? <IconBriefcase size={16} /> : <IconSchool size={16} />}
              </h1>
            </div>
            <div className="order-1 bg-white dark:bg-neutral-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-100 text-xl">{entry.title}</h3>
              <h4 className="mb-3 font-semibold text-primary dark:text-white text-md">{entry.company}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                <IconCalendar size={14} className="mr-2" /> {entry.date}
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-900 dark:text-gray-100 text-opacity-100">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  )
}