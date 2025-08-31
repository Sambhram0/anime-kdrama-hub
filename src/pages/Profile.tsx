import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Grid, Bookmark, Tag, Calendar, MapPin, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  const userProfile = {
    name: "AnimeQueen",
    handle: "animequeen",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    bio: "Anime enthusiast | K-Drama addict | Currently watching: Jujutsu Kaisen S2 💜",
    location: "Tokyo, Japan",
    website: "myanimelist.net/profile/animequeen",
    joinDate: "March 2023",
    stats: {
      posts: 147,
      followers: 2834,
      following: 892
    },
    badges: ["Shonen Warrior", "K-Drama Royalty", "Early Adopter"],
    currentlyWatching: [
      { title: "Jujutsu Kaisen S2", type: "anime", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=150&fit=crop" },
      { title: "Business Proposal", type: "kdrama", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=100&h=150&fit=crop" },
      { title: "Chainsaw Man", type: "anime", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=150&fit=crop" }
    ]
  };

  const userPosts = [
    {
      user: userProfile,
      content: {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
        caption: "This fight scene gave me chills! The animation quality is insane 🔥",
        tags: ["JujutsuKaisen", "Animation", "MAPPA"]
      },
      stats: { likes: 324, comments: 45, isLiked: true, isSaved: false }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        {/* Profile Header */}
        <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-24 h-24 border-4 border-gradient-primary shadow-kawaii">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                {userProfile.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{userProfile.name}</h1>
                  <p className="text-muted-foreground">@{userProfile.handle}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    Edit Profile
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-foreground">{userProfile.bio}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <span className="text-primary cursor-pointer hover:underline">{userProfile.website}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userProfile.joinDate}</span>
                </div>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <span><strong>{userProfile.stats.posts}</strong> posts</span>
                <span className="cursor-pointer hover:text-primary"><strong>{userProfile.stats.followers.toLocaleString()}</strong> followers</span>
                <span className="cursor-pointer hover:text-primary"><strong>{userProfile.stats.following.toLocaleString()}</strong> following</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {userProfile.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="bg-gradient-accent text-accent-foreground">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Currently Watching */}
        <Card className="p-4 mb-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
          <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
            <span>Currently Watching</span>
            <Badge variant="outline" className="text-xs">{userProfile.currentlyWatching.length}</Badge>
          </h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {userProfile.currentlyWatching.map((show, index) => (
              <div key={index} className="flex-shrink-0 cursor-pointer group">
                <div className="w-16 h-24 rounded-lg overflow-hidden shadow-soft group-hover:shadow-kawaii transition-all duration-300 group-hover:scale-105">
                  <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-center mt-2 max-w-[64px] truncate">{show.title}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="posts" className="flex items-center space-x-2">
              <Grid className="w-4 h-4" />
              <span>Posts</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
            </TabsTrigger>
            <TabsTrigger value="tagged" className="flex items-center space-x-2">
              <Tag className="w-4 h-4" />
              <span>Tagged</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userPosts.map((post, index) => (
                <PostCard
                  key={index}
                  user={post.user}
                  content={post.content}
                  stats={post.stats}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-6">
            <Card className="p-8 text-center bg-card/30 backdrop-blur-sm border-border">
              <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No saved posts yet</p>
              <p className="text-sm text-muted-foreground mt-2">Posts you save will appear here</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="tagged" className="mt-6">
            <Card className="p-8 text-center bg-card/30 backdrop-blur-sm border-border">
              <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No tagged posts yet</p>
              <p className="text-sm text-muted-foreground mt-2">Posts you're tagged in will appear here</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;