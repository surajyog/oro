"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer M.",
    comment: "The best dental experience I've ever had. Dr. Johnson was so gentle and explained everything thoroughly.",
    rating: 5,
  },
  {
    name: "Robert K.",
    comment: "I was nervous about getting an implant, but the team made me feel completely at ease. The results are amazing!",
    rating: 5,
  },
  {
    name: "Amanda L.",
    comment: "Great atmosphere and friendly staff. My kids actually look forward to their dental visits now.",
    rating: 5,
  },
  {
    name: "David P.",
    comment: "Professional, clean, and high-tech. I highly recommend Oro Dental to anyone looking for quality care.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    comment: "Emergency service was a lifesaver when I chipped my tooth. They got me in immediately.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Patient Stories</h2>
          <p className="max-w-[700px] mx-auto text-slate-500 md:text-xl">
            Don't just take our word for it. Here's what our patients have to say about their experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between p-6 h-[250px]">
                        <div>
                            <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            </div>
                            <p className="text-slate-600 mb-4">"{testimonial.comment}"</p>
                        </div>
                        <p className="font-semibold text-slate-900">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
