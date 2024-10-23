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
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Designer, CreativeCo",
    content: "Intuitive and powerful. It's been a game-changer for our team.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Marketing Manager, BrandInc",
    content: "The support team is fantastic. They've been incredibly helpful throughout our onboarding.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
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
    <div className="w-3/4 ">
      <div {...handlers} className="relative overflow-hidden ">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className='flex gap-6'
          >
            <div className="flex items-center">
                <button  onClick={prevTestimonial} className="h-12 w-12 rounded-full flex justify-center items-center text-gray-400 hover:text-gray-100 hover:bg-gray-700" aria-label="Previous testimonial">
                    <IconChevronLeft className="h-8 w-8" />
                </button>
            </div>
            <TestomonialCard currentIndex={currentIndex}/>
            <div className="flex items-center">
                <button  onClick={nextTestimonial} className="h-12 w-12 rounded-full flex justify-center items-center text-gray-400 hover:text-gray-100 hover:bg-gray-700" aria-label="Next testimonial">
                    <IconChevronRight className="h-8 w-8" />
                </button>
                </div>
          </motion.div>
        
        
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
        <Card className="bg-neutral-800 shadow-lg border-gray-700 min-h-[250px]">
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