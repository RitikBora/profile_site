'use client'

import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kuldeep Patil",
    role: "Engineering Lead, miniOrange",
    content: `Ritik’s technical prowess as a software developer and engineer is truly exceptional. His ability to dissect complex problems and devise innovative solutions is unparalleled. His contributions were instrumental in the successful deployment of several critical apps, including the development of robust cloud applications for monday.com. His leadership skills were equally impressive. He not only led by example but also mentored junior team members, fostering a collaborative and productive team environment.

What sets Ritik apart is his extraordinary personality. He is approachable, kind, and always willing to lend a hand. His positive attitude and strong work ethic are infectious, creating a work atmosphere that is both motivating and enjoyable. Ritik's dedication to helping others and his commitment to excellence make him a true asset to any team. Working with Ritik was an enriching experience. He is not just a talented professional but also a great person to work with.

`,
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 2,
    name: "Aditya Reddy",
    role: "Team Lead(Atlassian) , miniOrange",
    content: "Intuitive and powerful. It's been a game-changer for our team.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className=' w-full flex flex-col'>
      <div {...handlers} className="relative overflow-hidden w-full  flex gap-6">
           <div className="flex items-center">
                <button  onClick={prevTestimonial} className="h-12 w-12 rounded-full flex justify-center items-center text-gray-400 hover:text-gray-100 hover:bg-gray-700" aria-label="Previous testimonial">
                    <IconChevronLeft className="h-8 w-8" />
                </button>
            </div>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className='flex-1'
          >
           
          <TestomonialCard currentIndex={currentIndex}/>
            
          </motion.div>
          <div className="flex items-center">
                <button  onClick={nextTestimonial} className="h-12 w-12 rounded-full flex justify-center items-center text-gray-400 hover:text-gray-100 hover:bg-gray-700" aria-label="Next testimonial">
                    <IconChevronRight className="h-8 w-8" />
                </button>
            </div>
        
        
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-gray-100' : 'bg-gray-600'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}


const TestomonialCard = ({currentIndex} : {currentIndex : number}) =>
{
    return(
        <Card className="bg-neutral-800 shadow-lg border-gray-700 min-h-[350px] w-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                    <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-100">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonials[currentIndex].content}"</p>
              </CardContent>
            </Card>
    )
}