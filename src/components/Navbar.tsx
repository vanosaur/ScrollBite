import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Utensils } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface NavbarProps {
  cartItemCount?: number;
}

export const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
          <div className='w-10 h-10 items-center justify-center flex rounded-full'>
          <img src='/image copy.png'></img>
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            ScrollBite
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-smooth ${
              isActive('/') 
                ? 'text-primary' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/restaurants" 
            className={`text-sm font-medium transition-smooth ${
              isActive('/restaurants') 
                ? 'text-primary' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Restaurants
          </Link>
          <Link 
            to="/reels" 
            className={`text-sm font-medium transition-smooth ${
              isActive('/reels') 
                ? 'text-primary' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Reels
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Link to="/auth">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
