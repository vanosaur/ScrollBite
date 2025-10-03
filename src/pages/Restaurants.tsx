import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { RestaurantCard } from '@/components/RestaurantCard';
import { mockRestaurants, cuisineTypes, locations } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    const matchesLocation = selectedLocation === 'All' || restaurant.location === selectedLocation;
    
    return matchesSearch && matchesCuisine && matchesLocation;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Restaurants</h1>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Filters */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Cuisine Type</h3>
              <div className="flex flex-wrap gap-2">
                {cuisineTypes.map((cuisine) => (
                  <Button
                    key={cuisine}
                    variant={selectedCuisine === cuisine ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCuisine(cuisine)}
                  >
                    {cuisine}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div>
          <p className="text-muted-foreground mb-4">
            Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
          </p>
          
          {filteredRestaurants.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No restaurants found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
