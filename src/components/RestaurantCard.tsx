import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Restaurant } from '@/lib/mockData';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden hover:shadow-card-hover transition-smooth cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <Badge className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm">
            {restaurant.cuisine}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
            {restaurant.description}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-secondary">
              <Star className="h-4 w-4 fill-secondary" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <span className="text-muted-foreground">📍 {restaurant.location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
