import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuItemCard } from '@/components/MenuItemCard';
import { mockRestaurants, mockMenuItems } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

export const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const restaurant = mockRestaurants.find((r) => r.id === id);
  const menuItems = mockMenuItems.filter((item) => item.restaurantId === id);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Restaurant not found</h2>
          <Button onClick={() => navigate('/restaurants')}>
            Back to Restaurants
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast({
      title: 'Added to cart',
      description: `${item.name} has been added to your cart`,
    });
  };

  // Group menu items by category
  const categories = Array.from(new Set(menuItems.map((item) => item.category)));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm hover:bg-card"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Restaurant Info */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-muted-foreground mb-4">{restaurant.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1 text-secondary">
              <Star className="h-4 w-4 fill-secondary" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
            </div>
            
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
              {restaurant.cuisine}
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          
          {categories.map((category) => {
            const categoryItems = menuItems.filter((item) => item.category === category);
            
            return (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="space-y-4">
                  {categoryItems.map((item) => (
                    <MenuItemCard 
                      key={item.id} 
                      item={item} 
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
