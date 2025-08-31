import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Plus, MoreHorizontal, Smile, Image, Mic } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      user: { name: "AnimeNerd", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face", handle: "animenerd" },
      lastMessage: "Did you watch the latest AOT episode?! 😱",
      timestamp: "2m ago",
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      user: { name: "KDrama_Fan", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face", handle: "kdramafan" },
      lastMessage: "The OST in this drama is amazing!",
      timestamp: "1h ago",
      unread: 0,
      isOnline: false
    },
    {
      id: 3,
      user: { name: "Shoujo_Queen", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face", handle: "shoujo" },
      lastMessage: "Have you read the latest chapter?",
      timestamp: "3h ago",
      unread: 1,
      isOnline: true
    }
  ];

  const currentChat = conversations[0];
  const chatMessages = [
    {
      id: 1,
      sender: "other",
      message: "Hey! Did you watch the latest Attack on Titan episode?",
      timestamp: "2:30 PM",
      avatar: currentChat.user.avatar
    },
    {
      id: 2,
      sender: "me",
      message: "YES! I can't believe what happened! 😭",
      timestamp: "2:32 PM"
    },
    {
      id: 3,
      sender: "other",
      message: "I KNOW RIGHT?! The animation was incredible too",
      timestamp: "2:33 PM",
      avatar: currentChat.user.avatar
    },
    {
      id: 4,
      sender: "me",
      message: "MAPPA really outdid themselves with this season",
      timestamp: "2:35 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-20 md:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          
          {/* Conversations List */}
          <Card className="lg:col-span-1 p-4 bg-card/50 backdrop-blur-sm border-border shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Messages</h2>
              <Button size="sm" variant="ghost" className="hover:bg-accent/20">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-10 bg-background/50 border-border"
              />
            </div>

            <div className="space-y-2 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent/10 ${
                    conv.id === currentChat.id ? 'bg-accent/20 border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conv.user.avatar} alt={conv.user.name} />
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                          {conv.user.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {conv.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {conv.user.name}
                        </p>
                        <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    </div>
                    
                    {conv.unread > 0 && (
                      <Badge variant="destructive" className="text-xs min-w-[20px] h-5 rounded-full">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 p-0 bg-card/50 backdrop-blur-sm border-border shadow-soft flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={currentChat.user.avatar} alt={currentChat.user.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {currentChat.user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{currentChat.user.name}</p>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[70%] ${
                    msg.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    {msg.sender === 'other' && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src={msg.avatar} alt="Avatar" />
                        <AvatarFallback className="bg-gradient-accent text-accent-foreground text-xs">
                          AN
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`px-4 py-2 rounded-2xl ${
                      msg.sender === 'me' 
                        ? 'bg-primary text-primary-foreground rounded-br-md' 
                        : 'bg-accent/20 text-foreground rounded-bl-md'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                  <Image className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                  <Smile className="w-4 h-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input 
                    placeholder="Type a message..." 
                    className="bg-background/50 border-border pr-12"
                  />
                  <Button 
                    size="sm" 
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-primary hover:bg-primary/80"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Messages;