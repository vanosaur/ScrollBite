import { Link } from 'react-router-dom';
import { Search, ChefHat, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RestaurantCard } from '@/components/RestaurantCard';
import { mockRestaurants } from '@/lib/mockData';
import heroImage from '@/assets/hero-food.jpg';

export const Home = () => {
  const featuredRestaurants = mockRestaurants.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hungry? Order from
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              ScrollBite
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing restaurants and get your favorite meals delivered to your doorstep
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/restaurants">
              <Button size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Browse Restaurants
              </Button>
            </Link>
            <Link to="/reels">
              <Button size="lg" variant="secondary" className="gap-2">
                Explore Reels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-muted-foreground">
                Order from the best restaurants in your area
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your food delivered hot and fresh in minutes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">
                Contactless delivery and secure payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Restaurants
            </h2>
            <p className="text-muted-foreground">
              Popular choices in your area
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/restaurants">
              <Button size="lg" variant="outline">
                View All Restaurants
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
