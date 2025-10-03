import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Reels = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Food Reels
          </h1>
          <p className="text-muted-foreground">
            Coming Soon! Discover delicious food videos
          </p>
        </div>

        <Card className="bg-gradient-card">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="h-10 w-10 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-3">
              Short Food Videos Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're working on an exciting new feature that will let you discover restaurants 
              through engaging short-form video content. Stay tuned!
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Feature in development
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for future reels layout */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-30">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="aspect-[9/16] bg-muted rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
