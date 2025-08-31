import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Upload, X, Hash, MapPin, Users, Globe, Lock, Image as ImageIcon, Video, Smile } from "lucide-react";
import { useState } from "react";

const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [caption, setCaption] = useState("");
  const [privacy, setPrivacy] = useState<"public" | "friends" | "private">("public");

  const currentUser = {
    name: "AnimeQueen",
    handle: "animequeen",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      addTag();
    }
  };

  const suggestedTags = [
    "AttackOnTitan", "JujutsuKaisen", "DemonSlayer", "OnePiece", "Naruto",
    "SquidGame", "BusinessProposal", "Vincenzo", "KDrama", "Anime"
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border shadow-soft">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <Avatar className="w-12 h-12 border-2 border-gradient-primary">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {currentUser.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold text-foreground">Create New Post</h1>
              <p className="text-sm text-muted-foreground">Share your anime/K-drama moments</p>
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-4 mb-6">
            <Label className="text-foreground font-medium">Media</Label>
            {!selectedImage ? (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="media-upload"
                />
                <label htmlFor="media-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG, GIF, MP4 up to 10MB</p>
                </label>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Upload preview"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="caption" className="text-foreground font-medium">Caption</Label>
            <Textarea
              id="caption"
              placeholder="What's happening in the anime/K-drama world? Share your thoughts..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="min-h-[100px] bg-background/50 border-border resize-none"
            />
            <p className="text-xs text-muted-foreground text-right">
              {caption.length}/2000 characters
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-4 mb-6">
            <Label className="text-foreground font-medium flex items-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>Tags</span>
            </Label>
            
            {/* Current Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/20 text-primary hover:bg-primary/30 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  >
                    #{tag}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Add Tags */}
            <div className="flex space-x-2">
              <Input
                placeholder="Add tags (press Enter or Space)"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-background/50 border-border"
              />
              <Button onClick={addTag} variant="outline" size="sm">
                Add
              </Button>
            </div>
            
            {/* Suggested Tags */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Suggested tags:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.filter(tag => !tags.includes(tag)).slice(0, 6).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setTags([...tags, tag])}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Privacy & Settings */}
          <div className="space-y-4 mb-6">
            <Label className="text-foreground font-medium">Privacy & Settings</Label>
            
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={privacy === "public" ? "default" : "outline"}
                size="sm"
                onClick={() => setPrivacy("public")}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Public</span>
              </Button>
              <Button
                variant={privacy === "friends" ? "default" : "outline"}
                size="sm"
                onClick={() => setPrivacy("friends")}
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Friends</span>
              </Button>
              <Button
                variant={privacy === "private" ? "default" : "outline"}
                size="sm"
                onClick={() => setPrivacy("private")}
                className="flex items-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Private</span>
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="outline">
                Save Draft
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 border-0">
                Share Post
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CreatePost;