import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import StoryCircle from "@/components/StoryCircle";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, Star } from "lucide-react";

const Index = () => {
  // Sample data
  const samplePosts = [
    {
      user: { name: "AnimeQueen", handle: "animequeen", avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face" },
      content: {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
        caption: "Just finished watching the latest episode of Attack on Titan! My heart can't take this anymore 😭",
        tags: ["AttackOnTitan", "AOT", "AnimeFeels", "ShingekinoKyojin"]
      },
      stats: { likes: 324, comments: 45, isLiked: true, isSaved: false }
    },
    {
      user: { name: "KDramaAddict", handle: "kdramalife", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
      content: {
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        caption: "The cinematography in this K-drama is absolutely stunning! Every frame is a work of art ✨",
        tags: ["KDrama", "Cinematography", "Korean", "Beautiful", "Drama"]
      },
      stats: { likes: 156, comments: 23, isLiked: false, isSaved: true }
    }
  ];

  const sampleStories = [
    { name: "Naruto_Fan", handle: "narutofan", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", hasNewStory: true },
    { name: "Sakura_Chan", handle: "sakurachan", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face", hasNewStory: true },
    { name: "OnePiece_King", handle: "opking", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", hasNewStory: false },
    { name: "Studio_Ghibli", handle: "ghibli", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", hasNewStory: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Feed */}
          <div className="lg:col-span-2 lg:col-start-2">
            {/* Stories Section */}
            <Card className="p-4 mb-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                <StoryCircle isAddStory />
                {sampleStories.map((story, index) => (
                  <StoryCircle
                    key={index}
                    user={story}
                    hasNewStory={story.hasNewStory}
                  />
                ))}
              </div>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {samplePosts.map((post, index) => (
                <PostCard
                  key={index}
                  user={post.user}
                  content={post.content}
                  stats={post.stats}
                />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block space-y-6">
            {/* Trending Section */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Trending Now</h3>
              </div>
              <div className="space-y-3">
                <div className="cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors">
                  <p className="font-medium text-sm">#JujutsuKaisen</p>
                  <p className="text-xs text-muted-foreground">1.2K posts</p>
                </div>
                <div className="cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors">
                  <p className="font-medium text-sm">#SquidGame</p>
                  <p className="text-xs text-muted-foreground">856 posts</p>
                </div>
                <div className="cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors">
                  <p className="font-medium text-sm">#DemonSlayer</p>
                  <p className="text-xs text-muted-foreground">634 posts</p>
                </div>
              </div>
            </Card>

            {/* Community Highlights */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Communities</h3>
              </div>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start p-2 h-auto hover:bg-accent/10">
                  <div className="text-left">
                    <p className="font-medium text-sm">Shoujo Circle</p>
                    <p className="text-xs text-muted-foreground">2.3K members</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-2 h-auto hover:bg-accent/10">
                  <div className="text-left">
                    <p className="font-medium text-sm">K-Drama Queens</p>
                    <p className="text-xs text-muted-foreground">1.8K members</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-2 h-auto hover:bg-accent/10">
                  <div className="text-left">
                    <p className="font-medium text-sm">Shonen Heroes</p>
                    <p className="text-xs text-muted-foreground">3.1K members</p>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Upcoming Episodes */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-secondary" />
                <h3 className="font-semibold text-foreground">This Week</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                  <div className="text-sm">
                    <p className="font-medium">Jujutsu Kaisen S2</p>
                    <p className="text-xs text-muted-foreground">Episode 15 - Tomorrow</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <div className="text-sm">
                    <p className="font-medium">Business Proposal</p>
                    <p className="text-xs text-muted-foreground">Episode 8 - Friday</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
