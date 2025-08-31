import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  user: {
    name: string;
    avatar?: string;
    handle: string;
  };
  content: {
    image: string;
    caption: string;
    tags: string[];
  };
  stats: {
    likes: number;
    comments: number;
    isLiked?: boolean;
    isSaved?: boolean;
  };
}

const PostCard = ({ user, content, stats }: PostCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-card border-border shadow-soft hover:shadow-kawaii transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10 border-2 border-gradient-primary">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">@{user.handle}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="hover:bg-accent/20">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={content.image}
          alt="Post content"
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`hover:bg-accent/20 transition-bounce ${stats.isLiked ? 'text-red-500' : ''}`}
          >
            <Heart className={`w-5 h-5 ${stats.isLiked ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-bounce">
            <Share className="w-5 h-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`hover:bg-accent/20 transition-bounce ${stats.isSaved ? 'text-primary' : ''}`}
        >
          <Bookmark className={`w-5 h-5 ${stats.isSaved ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Stats and Caption */}
      <div className="px-4 pb-4">
        <p className="font-semibold text-sm mb-2">{stats.likes} likes</p>
        <div className="text-sm">
          <span className="font-semibold">{user.handle}</span>{" "}
          <span className="text-foreground">{content.caption}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {content.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-primary hover:text-accent cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
        {stats.comments > 0 && (
          <p className="text-sm text-muted-foreground mt-2 cursor-pointer hover:text-foreground transition-colors">
            View all {stats.comments} comments
          </p>
        )}
      </div>
    </Card>
  );
};

export default PostCard;