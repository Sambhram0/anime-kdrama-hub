import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StoryCircleProps {
  user?: {
    name: string;
    avatar?: string;
    handle: string;
  };
  isAddStory?: boolean;
  hasNewStory?: boolean;
}

const StoryCircle = ({ user, isAddStory = false, hasNewStory = false }: StoryCircleProps) => {
  if (isAddStory) {
    return (
      <div className="flex flex-col items-center space-y-1 cursor-pointer group">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center shadow-soft group-hover:shadow-kawaii transition-all duration-300 group-hover:scale-105">
            <Plus className="w-6 h-6 text-secondary-foreground" />
          </div>
        </div>
        <span className="text-xs text-center text-muted-foreground max-w-[70px] truncate">
          Your Story
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer group">
      <div className="relative">
        <div className={`w-16 h-16 rounded-full p-0.5 ${
          hasNewStory ? 'bg-gradient-primary' : 'bg-border'
        } group-hover:scale-105 transition-transform duration-300`}>
          <Avatar className="w-full h-full border-2 border-background">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-gradient-accent text-accent-foreground">
              {user?.name?.slice(0, 2).toUpperCase() || 'AN'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs text-center text-foreground max-w-[70px] truncate">
        {user?.name || 'User'}
      </span>
    </div>
  );
};

export default StoryCircle;