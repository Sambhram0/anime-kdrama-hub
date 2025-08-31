import { Home, Search, PlusSquare, Heart, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-kawaii">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AnimeKHub
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/') ? 'text-primary' : ''}`}>
                <Home className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/explore') ? 'text-primary' : ''}`}>
                <Search className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/create">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/create') ? 'text-primary' : ''}`}>
                <PlusSquare className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/messages') ? 'text-primary' : ''}`}>
                <MessageCircle className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/communities">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/communities') ? 'text-primary' : ''}`}>
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className={`hover:bg-accent/20 transition-bounce ${isActive('/profile') ? 'text-primary' : ''}`}>
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-md border-t border-border z-40">
        <div className="flex items-center justify-around py-2">
          <Link to="/" className="flex-1">
            <Button variant="ghost" size="sm" className={`w-full hover:bg-accent/20 transition-bounce ${isActive('/') ? 'text-primary' : ''}`}>
              <Home className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/explore" className="flex-1">
            <Button variant="ghost" size="sm" className={`w-full hover:bg-accent/20 transition-bounce ${isActive('/explore') ? 'text-primary' : ''}`}>
              <Search className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/create" className="flex-1">
            <Button variant="ghost" size="sm" className={`w-full hover:bg-accent/20 transition-bounce ${isActive('/create') ? 'text-primary' : ''}`}>
              <PlusSquare className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/messages" className="flex-1">
            <Button variant="ghost" size="sm" className={`w-full hover:bg-accent/20 transition-bounce ${isActive('/messages') ? 'text-primary' : ''}`}>
              <MessageCircle className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/communities" className="flex-1">
            <Button variant="ghost" size="sm" className={`w-full hover:bg-accent/20 transition-bounce ${isActive('/communities') ? 'text-primary' : ''}`}>
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;