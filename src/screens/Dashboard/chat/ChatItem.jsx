import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function ChatItem({ chat, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 border-b border-gray-100 dark:border-gray-700/30 ${
                isSelected
                    ? "bg-primary-400 dark:bg-secondary-700 border-r-4 border-r-secondary-600 shadow-sm"
                    : ""
            }`}
        >
            <div className="relative">
                <Avatar className="h-16 w-16 ring-2 ring-gray-100 dark:ring-gray-700 shadow-sm">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback className="bg-gradient-to-br from-secondarydark-200 to-secondary-200 dark:from-secondary-700 dark:to-secondarydark-700 text-secondary-600 dark:text-secondarydark-400 font-bold text-lg">
                        {chat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-seconday-600 rounded-full border-3 border-white dark:border-gray-800 shadow-lg animate-pulse"></div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 truncate text-lg">{chat.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate leading-relaxed font-medium">
                        {chat.lastMessage}
                    </p>
                    {chat.unread && (
                        <span className="bg-gradient-to-r from-secondary-600 to-secondarydark-600 text-white text-xs rounded-full px-3 py-1.5 min-w-[24px] text-center font-bold shadow-lg animate-bounce">
                            {chat.unread}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}