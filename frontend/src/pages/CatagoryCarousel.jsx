import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const catagorys = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "Data Science",
    "Fullstack Developer",
    
]
const CatagoryCarousel = () => {
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-16">
        <CarouselPrevious className=""/>
            <CarouselContent className="ml-0">
                {
                    catagorys.map((catagory,index)=>(
                        <CarouselItem className="basis-auto md:basis-1/2 lg:basis-1/3" key={index}>
                            <Button variant="outline" className="rounded-full">{catagory}</Button>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselNext className="hidden sm:flex"/>
            
        </Carousel>

    
    </div>
  )
}

export default CatagoryCarousel