import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Hash } from "lucide-react";

const Explore = () => {
  const trendingTags = [
    { tag: "AttackOnTitan", posts: 1234 },
    { tag: "SquidGame", posts: 987 },
    { tag: "JujutsuKaisen", posts: 856 },
    { tag: "BusinessProposal", posts: 743 },
    { tag: "DemonSlayer", posts: 612 },
    { tag: "HomeTown", posts: 589 }
  ];

  const explorePosts = [
    {
      user: { name: "AnimeAesthetic", handle: "aesthetic", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
      content: {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        caption: "The art style in this scene is absolutely breathtaking! ✨",
        tags: ["StudioGhibli", "Animation", "Art"]
      },
      stats: { likes: 892, comments: 67, isLiked: false, isSaved: false }
    },
    {
      user: { name: "KDramaVibes", handle: "kdramavibes", avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face" },
      content: {
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=400&fit=crop",
        caption: "When the second lead syndrome hits different 😭💕",
        tags: ["SecondLeadSyndrome", "Romance", "KDrama"]
      },
      stats: { likes: 654, comments: 98, isLiked: true, isSaved: true }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Search and Filters */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search anime, K-dramas, users..." 
                  className="pl-10 bg-background/50 border-border"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  All
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Anime
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  K-Drama
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Manga
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  K-Pop
                </Badge>
              </div>
            </Card>

            {/* Explore Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {explorePosts.map((post, index) => (
                <PostCard
                  key={index}
                  user={post.user}
                  content={post.content}
                  stats={post.stats}
                />
              ))}
            </div>
          </div>

          {/* Trending Sidebar */}
          <div className="space-y-6">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Trending Tags</h3>
              </div>
              <div className="space-y-3">
                {trendingTags.map((item, index) => (
                  <div key={index} className="cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {item.tag}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.posts.toLocaleString()} posts</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <h3 className="font-semibold text-foreground mb-4">Popular Categories</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10">
                  🌸 Romance Anime
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10">
                  ⚔️ Action Shounen
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10">
                  💕 K-Drama Romance
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10">
                  👻 Horror Thriller
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;