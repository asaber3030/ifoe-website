"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

import { FranchiseImage } from "@/types"

type Props = {
  images: FranchiseImage[]
}

export const FranchiseImagesCard = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Card className='w-full relative overflow-hidden mt-5'>
      <div className='relative h-[400px]'>
        {images.map((img, index) => (
          <div
            key={img.image_url}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.image_url}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}

        <Button
          variant='outline'
          size='icon'
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90'
          onClick={prevSlide}
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>

        <Button
          variant='outline'
          size='icon'
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90'
          onClick={nextSlide}
        >
          <ChevronRight className='h-4 w-4' />
        </Button>

        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
