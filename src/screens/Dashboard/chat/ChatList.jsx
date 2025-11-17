import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ChatItem } from "./ChatItem";

export function ChatList({ chats, selectedChat, setSelectedChat, isMobile, setIsSidebarOpen }) {
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary-600 to-secondarydark-600 text-white shadow-lg flex-shrink-0">
        <h1 className="text-xl font-bold">💬 My Chats</h1>
      </div>

      {/* Search Input */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700/30 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search or start new chat"
            className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-xl h-11 focus-visible:ring-2 focus-visible:ring-secondary-600 focus-visible:border-secondary-400 shadow-sm"
          />
        </div>
      </div>

      {/* Scrollable Chat Items */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isSelected={selectedChat.id === chat.id}
            onClick={() => {
              setSelectedChat(chat);
              if (isMobile) setIsSidebarOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
