import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { MoreVertical, Phone, Video, ArrowLeft } from "lucide-react"

export function ChatHeader({ selectedChat, toggleSidebar, isMobile, dropdownOpen, setDropdownOpen }) {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-sm">
            <div className="flex items-center gap-4">
                {isMobile && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="top-4 left-4 z-50 md:hidden dark:hover:bg-gray-700"
                        onClick={toggleSidebar}
                    >
                        <ArrowLeft className="h-6 w-6 dark:text-white" />
                    </Button>
                )}
                <Avatar className="h-14 w-14 ring-2 ring-secondary-200 dark:ring-secondary-700 shadow-md">
                    <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} alt={selectedChat.name} />
                    <AvatarFallback className="bg-gradient-to-br from-secondary-200 to-secondarydark-200 dark:from-secodary-700 dark:to-secondarydark-700 text-secondary-600 dark:text-secondarydark-200 font-bold text-lg">
                        {selectedChat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{selectedChat.name}</h2>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 font-semibold">
                        {selectedChat.online ? "online" : "last seen recently"}
                    </p>
                </div>
            </div>
            <div className="flex gap-2">
                {/* <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full h-11 w-11 transition-all duration-200"
                >
                    <Video className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full h-11 w-11 transition-all duration-200"
                >
                    <Phone className="h-5 w-5" />
                </Button> */}
                <div className="">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-600 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-full h-11 w-11 transition-all duration-200"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                    {dropdownOpen && (
                        <HeaderDropdown setDropdownOpen={setDropdownOpen} />
                    )}
                </div>
            </div>
        </div>
    )
}

function HeaderDropdown({ setDropdownOpen }) {
    return (
        <div 
            className="w-full h-full z-20 absolute mt-20 mr-14 top-0 left-0 bg-black/50" 
            onMouseLeave={() => setDropdownOpen(false)} 
            onClick={() => setDropdownOpen(false)}
        >
            <div className="absolute top-[80vh] md:top-12 flex flex-col right-[50vw] translate-x-[50%] md:-translate-x-[5%] md:translate-y-[10%] md:right-0 w-[90vw] md:w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-50">
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-left text-gray-600 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md mb-1"
                >
                    View Contact
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                     className="w-full text-left text-gray-600 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md mb-1"
                >
                    View Profile
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-left text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                    Block user
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDropdownOpen(false)}
                    className="text-gray-600 w-full font-extrabold text-sm dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full h-11 w-11 transition-all duration-200"
                >
                    Close
                </Button>
            </div>
        </div>
    )
}