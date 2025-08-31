import { Home, Search, PlusSquare, Heart, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-kawaii">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AnimeKHub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <Home className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <PlusSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
              <User className="w-5 h-5" />
            </Button>
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around py-2">
          <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent/20 transition-bounce">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent/20 transition-bounce">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent/20 transition-bounce">
            <PlusSquare className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent/20 transition-bounce">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent/20 transition-bounce">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;