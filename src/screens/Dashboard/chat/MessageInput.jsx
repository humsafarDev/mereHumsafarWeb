import { useRef } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Smile, Paperclip, Send, Mic } from "lucide-react"

export function MessageInput({ newMessage, setNewMessage, handleSendMessage }) {
const fileInputRef = useRef(null);

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Handle the file upload logic here
        console.log("File uploaded:", file);
    }
}

    return (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-lg">
            <div className="flex items-center gap-3 max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 dark:text-gray-400 hover:text-secondary-600 dark:hover:text-secondary-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full h-8 w-11 transition-all duration-200"
                >
                    <Smile className="h-5 w-5" />
                </Button>
                <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
              />
              {/* <button
                onClick={() => fileInputRef.current?.click()}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Paperclip className="w-6 h-6 text-gray-500" />
              </button> */}
                <Button
                onClick={() => fileInputRef.current?.click()}
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 dark:text-gray-400 hover:text-secondary-600 dark:hover:text-secondary-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full h-8 w-11 transition-all duration-200"
                >
                    <Paperclip className="h-5 w-5" />
                </Button>
                <div className="flex-1 relative">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message"
                        className="pr-16 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-full h-10 focus-visible:ring-2 focus-visible:ring-secondary-600 focus-visible:border-secondarydark-600 text-base shadow-sm font-medium"
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />

                    <Button
                        onClick={handleSendMessage}
                        size="icon"
                        style={{ borderRadius: '50%' }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-gradient-to-r from-secondary-600 to-secondary-400 hover:from-secondary-600 hover:to-secondary-400  shadow-lg transition-all duration-200"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                    {/* {newMessage.trim() ? (
                        <Button
                            onClick={handleSendMessage}
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-gradient-to-r from-secondary-600 to-secondary-400 hover:from-secondary-600 hover:to-secondary-400 rounded-full shadow-lg transition-all duration-200"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500 dark:text-gray-400 hover:text-secondary-600 dark:hover:text-secondaey-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full transition-all duration-200"
                        >
                            <Mic className="h-4 w-4" />
                        </Button>
                    )} */}
                </div>
            </div>
        </div>
    )
}