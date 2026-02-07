'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Play, Image as ImageIcon, Film, Monitor, Smartphone, Square } from 'lucide-react'

export default function AspectRatioPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold tracking-tight">Aspect Ratio</h1>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays content within a desired ratio, maintaining consistent proportions.
          </p>
        </div>

        {/* Common Ratios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Aspect Ratios</CardTitle>
            <CardDescription>
              Standard ratios used in media and design
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 16:9 */}
              <div>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Monitor className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-medium">16:9</span>
                    </div>
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">Widescreen</p>
              </div>

              {/* 4:3 */}
              <div>
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Film className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-medium">4:3</span>
                    </div>
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">Standard</p>
              </div>

              {/* 1:1 */}
              <div>
                <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Square className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-medium">1:1</span>
                    </div>
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">Square</p>
              </div>

              {/* 9:16 */}
              <div>
                <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Smartphone className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-sm font-medium">9:16</span>
                    </div>
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">Portrait</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 16:9 with Image */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>16:9 - Video/Widescreen</CardTitle>
            <CardDescription>
              Most common ratio for videos and modern displays
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
            <p className="text-sm text-muted-foreground mt-3">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ratio=&#123;16 / 9&#125;</code> — Perfect for YouTube videos, TV screens, and modern monitors.
            </p>
          </CardContent>
        </Card>

        {/* 4:3 with Image */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4:3 - Standard/Classic</CardTitle>
            <CardDescription>
              Traditional ratio for photographs and older displays
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md">
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&dpr=2&q=80"
                  alt="Product photo"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ratio=&#123;4 / 3&#125;</code> — Classic format for photographs and presentations.
            </p>
          </CardContent>
        </Card>

        {/* 1:1 Square */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1:1 - Square</CardTitle>
            <CardDescription>
              Perfect for profile pictures and social media posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&dpr=2&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&dpr=2&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&dpr=2&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&dpr=2&q=80',
              ].map((src, i) => (
                <AspectRatio key={i} ratio={1} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src={src}
                    alt={`Profile ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ratio=&#123;1&#125;</code> — Instagram posts, avatars, and album covers.
            </p>
          </CardContent>
        </Card>

        {/* 21:9 Ultra Wide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>21:9 - Ultra Wide / Cinematic</CardTitle>
            <CardDescription>
              Cinematic aspect ratio for immersive content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={21 / 9} className="bg-muted rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&dpr=2&q=80"
                alt="Cinematic landscape"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
            <p className="text-sm text-muted-foreground mt-3">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ratio=&#123;21 / 9&#125;</code> — Movie banners, hero sections, and panoramic views.
            </p>
          </CardContent>
        </Card>

        {/* 3:2 Photography */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3:2 - Photography Standard</CardTitle>
            <CardDescription>
              Standard ratio for DSLR cameras and 35mm film
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AspectRatio ratio={3 / 2} className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&dpr=2&q=80"
                  alt="Nature photo"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 2} className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&dpr=2&q=80"
                  alt="Landscape photo"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ratio=&#123;3 / 2&#125;</code> — Professional photography and print media.
            </p>
          </CardContent>
        </Card>

        {/* Video Player Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Video Player Example</CardTitle>
            <CardDescription>
              AspectRatio used for video embeds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&dpr=2&q=80"
                  alt="Video thumbnail"
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center justify-center w-16 h-16 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <Play className="h-8 w-8 text-foreground ml-1" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-foreground text-sm">
                  <span>0:00 / 3:45</span>
                  <span>HD</span>
                </div>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        {/* Card Grid Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Card Grid with Consistent Images</CardTitle>
            <CardDescription>
              Using AspectRatio to maintain consistent card heights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Mountain Adventure', category: 'Travel', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&dpr=2&q=80' },
                { title: 'City Lights', category: 'Urban', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&dpr=2&q=80' },
                { title: 'Ocean Waves', category: 'Nature', img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&dpr=2&q=80' },
              ].map((card, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2">{card.category}</Badge>
                    <h3 className="font-semibold">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portrait Ratios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Portrait Ratios</CardTitle>
            <CardDescription>
              Vertical aspect ratios for mobile and portrait content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {/* 9:16 */}
              <div>
                <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&dpr=2&q=80"
                    alt="Portrait 1"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">9:16</p>
              </div>

              {/* 3:4 */}
              <div>
                <AspectRatio ratio={3 / 4} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&dpr=2&q=80"
                    alt="Portrait 2"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">3:4</p>
              </div>

              {/* 2:3 */}
              <div>
                <AspectRatio ratio={2 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&dpr=2&q=80"
                    alt="Portrait 3"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">2:3</p>
              </div>

              {/* 4:5 */}
              <div>
                <AspectRatio ratio={4 / 5} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&dpr=2&q=80"
                    alt="Portrait 4"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">4:5</p>
              </div>

              {/* 5:7 */}
              <div>
                <AspectRatio ratio={5 / 7} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&dpr=2&q=80"
                    alt="Portrait 5"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">5:7</p>
              </div>

              {/* A4 */}
              <div>
                <AspectRatio ratio={1 / 1.414} className="bg-muted rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <ImageIcon className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                      <span className="text-xs font-medium">A4</span>
                    </div>
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground mt-2 text-center">1:√2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loading Placeholder</CardTitle>
            <CardDescription>
              AspectRatio with skeleton loading state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden animate-pulse">
                <div className="flex items-center justify-center h-full">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </AspectRatio>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden animate-pulse">
                <div className="flex items-center justify-center h-full">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </AspectRatio>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden animate-pulse">
                <div className="flex items-center justify-center h-full">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                </div>
              </AspectRatio>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">← Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/components">View All Components →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
