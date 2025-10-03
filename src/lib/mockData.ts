// Mock data for ScrollBite app
// This can be replaced with actual API calls in the future

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  deliveryTime: string;
  image: string;
  description: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Order {
  id: string;
  restaurantName: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: 'delivered' | 'pending' | 'cancelled';
  date: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Spice Kingdom',
    cuisine: 'Indian',
    location: 'Downtown',
    rating: 4.5,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
    description: 'Authentic Indian cuisine with traditional spices and flavors',
  },
  {
    id: '2',
    name: 'Burger Palace',
    cuisine: 'American',
    location: 'Midtown',
    rating: 4.2,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    description: 'Gourmet burgers made with fresh, quality ingredients',
  },
  {
    id: '3',
    name: 'Sushi Master',
    cuisine: 'Japanese',
    location: 'Uptown',
    rating: 4.8,
    deliveryTime: '35-45 min',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    description: 'Fresh sushi and traditional Japanese dishes',
  },
  {
    id: '4',
    name: 'Pasta Paradise',
    cuisine: 'Italian',
    location: 'West Side',
    rating: 4.6,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop',
    description: 'Homemade pasta and authentic Italian recipes',
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    location: 'East Side',
    rating: 4.4,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop',
    description: 'Delicious tacos and Mexican street food',
  },
  {
    id: '6',
    name: 'Green Bowl',
    cuisine: 'Healthy',
    location: 'Downtown',
    rating: 4.7,
    deliveryTime: '15-25 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    description: 'Fresh salads, smoothie bowls, and healthy options',
  },
];

export const mockMenuItems: MenuItem[] = [
  // Spice Kingdom menu
  {
    id: 'm1',
    restaurantId: '1',
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and butter sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    category: 'Main Course',
  },
  {
    id: 'm2',
    restaurantId: '1',
    name: 'Chicken Biryani',
    description: 'Aromatic rice with spiced chicken',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
    category: 'Main Course',
  },
  {
    id: 'm3',
    restaurantId: '1',
    name: 'Samosa (4 pcs)',
    description: 'Crispy pastry with spiced potato filling',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    category: 'Appetizer',
  },
  
  // Burger Palace menu
  {
    id: 'm4',
    restaurantId: '2',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Burgers',
  },
  {
    id: 'm5',
    restaurantId: '2',
    name: 'BBQ Bacon Burger',
    description: 'Beef patty with bacon, BBQ sauce, onion rings',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    category: 'Burgers',
  },
  {
    id: 'm6',
    restaurantId: '2',
    name: 'French Fries',
    description: 'Crispy golden fries with special seasoning',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'Sides',
  },

  // Sushi Master menu
  {
    id: 'm7',
    restaurantId: '3',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Rolls',
  },
  {
    id: 'm8',
    restaurantId: '3',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna with spicy mayo',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
    category: 'Rolls',
  },
  {
    id: 'm9',
    restaurantId: '3',
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
    category: 'Appetizer',
  },

  // Pasta Paradise menu
  {
    id: 'm10',
    restaurantId: '4',
    name: 'Spaghetti Carbonara',
    description: 'Classic pasta with bacon and cream sauce',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    category: 'Pasta',
  },
  {
    id: 'm11',
    restaurantId: '4',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, tomato sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza',
  },

  // Taco Fiesta menu
  {
    id: 'm12',
    restaurantId: '5',
    name: 'Street Tacos (3 pcs)',
    description: 'Authentic tacos with cilantro and onions',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    category: 'Tacos',
  },
  {
    id: 'm13',
    restaurantId: '5',
    name: 'Burrito Bowl',
    description: 'Rice, beans, meat, veggies, guacamole',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    category: 'Bowls',
  },

  // Green Bowl menu
  {
    id: 'm14',
    restaurantId: '6',
    name: 'Caesar Salad',
    description: 'Fresh romaine, parmesan, croutons',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'Salads',
  },
  {
    id: 'm15',
    restaurantId: '6',
    name: 'Acai Bowl',
    description: 'Acai berries with granola and fresh fruits',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    category: 'Bowls',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ord1',
    restaurantName: 'Spice Kingdom',
    items: [
      { name: 'Butter Chicken', quantity: 1, price: 14.99 },
      { name: 'Samosa (4 pcs)', quantity: 1, price: 5.99 },
    ],
    total: 20.98,
    status: 'delivered',
    date: '2025-09-28',
  },
  {
    id: 'ord2',
    restaurantName: 'Burger Palace',
    items: [
      { name: 'Classic Cheeseburger', quantity: 2, price: 10.99 },
      { name: 'French Fries', quantity: 1, price: 4.99 },
    ],
    total: 26.97,
    status: 'delivered',
    date: '2025-09-25',
  },
  {
    id: 'ord3',
    restaurantName: 'Sushi Master',
    items: [
      { name: 'California Roll', quantity: 1, price: 9.99 },
      { name: 'Spicy Tuna Roll', quantity: 1, price: 11.99 },
      { name: 'Miso Soup', quantity: 2, price: 3.99 },
    ],
    total: 29.96,
    status: 'delivered',
    date: '2025-09-20',
  },
];

export const cuisineTypes = ['All', 'Indian', 'American', 'Japanese', 'Italian', 'Mexican', 'Healthy'];
export const locations = ['All', 'Downtown', 'Midtown', 'Uptown', 'West Side', 'East Side'];
