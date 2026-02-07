'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Autoplay from 'embla-carousel-autoplay'
import {
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  Quote,
  Star,
  Package
} from 'lucide-react'

export default function CarouselShowcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useState(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  })

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A carousel with motion and swipe support built using Embla.
          </p>
        </div>

        {/* Basic Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Carousel</CardTitle>
            <CardDescription>
              Simple carousel with navigation arrows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Multiple Items Per View */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Multiple Items Per View</CardTitle>
            <CardDescription>
              Show multiple slides at once using basis classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* With Current Slide Indicator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Slide Counter</CardTitle>
            <CardDescription>
              Display current slide number
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </CardContent>
        </Card>

        {/* Vertical Orientation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vertical Orientation</CardTitle>
            <CardDescription>
              Carousel with vertical scrolling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="w-full max-w-xs mx-auto"
            >
              <CarouselContent className="-mt-1 h-[300px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Autoplay */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Autoplay Carousel</CardTitle>
            <CardDescription>
              Automatically cycles through slides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full max-w-xs mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-primary/20 to-primary/5">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Auto-plays every 2 seconds
            </p>
          </CardContent>
        </Card>

        {/* Product Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Product Carousel</CardTitle>
            <CardDescription>
              E-commerce product showcase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { name: 'Product 1', price: '$99', rating: 4.5 },
                  { name: 'Product 2', price: '$149', rating: 5.0 },
                  { name: 'Product 3', price: '$79', rating: 4.8 },
                  { name: 'Product 4', price: '$199', rating: 4.6 },
                  { name: 'Product 5', price: '$129', rating: 4.9 },
                ].map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-0">
                          <div className="aspect-square bg-muted flex items-center justify-center rounded-t-xl relative">
                            <Package className="h-12 w-12 text-muted-foreground" />
                            <Badge className="absolute top-2 right-2">New</Badge>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-lg font-bold">{product.price}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">{product.rating}</span>
                              </div>
                            </div>
                            <Button className="w-full mt-3" size="sm">
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Testimonial Carousel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Testimonial Carousel</CardTitle>
            <CardDescription>
              Customer reviews and testimonials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'CEO, TechCorp',
                    quote: 'This product has completely transformed how we work. Highly recommended!',
                    avatar: 'SJ',
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Designer, Creative Studio',
                    quote: 'Incredible attention to detail. The best investment we made this year.',
                    avatar: 'MC',
                  },
                  {
                    name: 'Emily Rodriguez',
                    role: 'Developer, StartupXYZ',
                    quote: 'Outstanding quality and support. Our team loves using it every day.',
                    avatar: 'ER',
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-8">
                          <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                          <p className="text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                          <Avatar className="h-12 w-12 mb-3">
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <div className="flex gap-1 mt-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Image Gallery */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Gallery Carousel</CardTitle>
            <CardDescription>
              Photo gallery with placeholder images
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                          <div className="text-center">
                            <ImageIcon className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Image {index + 1}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Centered Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Centered Slides</CardTitle>
            <CardDescription>
              Center aligned carousel with partial views
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 7 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-4/5 md:basis-2/3 lg:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* With Dots Indicator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>With Dot Indicators</CardTitle>
            <CardDescription>
              Carousel with dot navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    current === index + 1 ? 'bg-primary w-4' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Different Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Different Slide Sizes</CardTitle>
            <CardDescription>
              Mix of different basis sizes per slide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-blue-500/10">
                      <span className="text-2xl font-semibold">Full Width</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-green-500/10">
                      <span className="text-2xl font-semibold">Half</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-orange-500/10">
                      <span className="text-2xl font-semibold">Half</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-purple-500/10">
                      <span className="text-2xl font-semibold">Third</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-pink-500/10">
                      <span className="text-2xl font-semibold">Third</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-yellow-500/10">
                      <span className="text-2xl font-semibold">Third</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components">
              View All Components
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
