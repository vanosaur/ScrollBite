import { Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MenuItem } from '@/lib/mockData';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card-hover transition-smooth">
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-primary">
              ${item.price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              onClick={() => onAddToCart(item)}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
};
