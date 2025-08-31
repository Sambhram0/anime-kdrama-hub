import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Plus, TrendingUp, Calendar, MessageCircle, Eye } from "lucide-react";

const Communities = () => {
  const featuredCommunities = [
    {
      id: 1,
      name: "Shoujo Circle",
      description: "For fans of romance anime and manga with beautiful art and heartwarming stories",
      members: 2340,
      posts: 1567,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      isJoined: true,
      category: "Anime"
    },
    {
      id: 2,
      name: "K-Drama Queens",
      description: "Discussing the latest Korean dramas, OSTs, and swooning over our favorite actors",
      members: 1890,
      posts: 2341,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=200&fit=crop",
      isJoined: false,
      category: "K-Drama"
    },
    {
      id: 3,
      name: "Shonen Heroes",
      description: "Epic battles, friendship, and never giving up! Join us for action-packed discussions",
      members: 3125,
      posts: 4782,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      isJoined: true,
      category: "Anime"
    }
  ];

  const popularDiscussions = [
    {
      id: 1,
      title: "Attack on Titan Season 4 Part 3 - Episode Discussion",
      community: "Shonen Heroes",
      author: "TitanSlayer99",
      replies: 234,
      views: 1567,
      lastActivity: "5m ago",
      isPinned: true
    },
    {
      id: 2,
      title: "Best K-Drama OSTs of 2024 - What's your favorite?",
      community: "K-Drama Queens",
      author: "MusicLover",
      replies: 89,
      views: 445,
      lastActivity: "23m ago",
      isPinned: false
    },
    {
      id: 3,
      title: "Shoujo recommendations for someone new to the genre?",
      community: "Shoujo Circle",
      author: "NewFan2024",
      replies: 67,
      views: 289,
      lastActivity: "1h ago",
      isPinned: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Jujutsu Kaisen S3 Watch Party",
      community: "Shonen Heroes",
      date: "Dec 25, 2024",
      time: "8:00 PM JST",
      attendees: 156
    },
    {
      id: 2,
      title: "K-Drama Bingo Night",
      community: "K-Drama Queens",
      date: "Dec 28, 2024",
      time: "7:00 PM KST",
      attendees: 89
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Communities</h1>
            <p className="text-muted-foreground">Connect with fellow fans and discuss your favorite shows</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-primary hover:opacity-90 border-0">
            <Plus className="w-4 h-4 mr-2" />
            Create Community
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4 mb-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search communities..." 
              className="pl-10 bg-background/50 border-border"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Communities */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Featured Communities</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredCommunities.map((community) => (
                  <Card key={community.id} className="overflow-hidden bg-card border-border hover:shadow-kawaii transition-all duration-300">
                    <div className="relative h-32">
                      <img 
                        src={community.image} 
                        alt={community.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-2 right-2 bg-primary/80 text-primary-foreground">
                        {community.category}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2">{community.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {community.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{community.members.toLocaleString()} members</span>
                        </span>
                        <span>{community.posts.toLocaleString()} posts</span>
                      </div>
                      <Button 
                        className={`w-full ${community.isJoined 
                          ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
                          : 'bg-primary text-primary-foreground hover:bg-primary/80'
                        }`}
                      >
                        {community.isJoined ? 'Joined' : 'Join Community'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Discussion Tabs */}
            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="mt-6 space-y-4">
                {popularDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft hover:shadow-kawaii transition-all duration-300 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.isPinned && (
                            <Badge variant="secondary" className="text-xs">Pinned</Badge>
                          )}
                          <Badge variant="outline" className="text-xs">{discussion.community}</Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>by {discussion.author}</span>
                          <span className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{discussion.views}</span>
                          </span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="recent" className="mt-6">
                <Card className="p-8 text-center bg-card/30 backdrop-blur-sm border-border">
                  <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No recent discussions</p>
                  <p className="text-sm text-muted-foreground mt-2">Check back later for new content</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="trending" className="mt-6">
                <Card className="p-8 text-center bg-card/30 backdrop-blur-sm border-border">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No trending discussions</p>
                  <p className="text-sm text-muted-foreground mt-2">Popular topics will appear here</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* My Communities */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>My Communities</span>
              </h3>
              <div className="space-y-3">
                {featuredCommunities.filter(c => c.isJoined).map((community) => (
                  <div key={community.id} className="flex items-center space-x-3 cursor-pointer hover:bg-accent/10 p-2 rounded-lg transition-colors">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={community.image} alt={community.name} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                        {community.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{community.name}</p>
                      <p className="text-xs text-muted-foreground">{community.members} members</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Upcoming Events</span>
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-medium text-sm text-foreground mb-1">{event.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{event.community}</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>{event.date} at {event.time}</p>
                      <p className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attending</span>
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2 text-xs">
                      Join Event
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
              <h3 className="font-semibold text-foreground mb-4">Community Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Communities</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-medium">12.3K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Posts</span>
                  <span className="font-medium">340</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Communities;