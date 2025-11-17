import { useState, useEffect } from "react"
import { cn } from "./lib/utils"
import { chats, chatMessages } from "./data/mockData"
import { ChatList } from "./ChatList"
import { ChatHeader } from "./ChatHeader"
import  {MessageList}  from "./MessageList"
import { MessageInput } from "./MessageInput"
import chatBg from "../../../assets/chatBg.jpeg"

export function WhatsAppInterface() {
    const [selectedChat, setSelectedChat] = useState(chats[0])
    const [newMessage, setNewMessage] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false)
            }
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const currentMessages = chatMessages[selectedChat.id] || []

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setNewMessage("")
        }
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
<div className="min-h-full  box-border rounded-lg">
  {/* Full Chat Container */}
  <div className="flex w-full h-[82vh] bg-white dark:bg-gray-800 overflow-hidden border rounded-lg border-gray-200 dark:border-gray-700">

    {/* Chat List Sidebar */}
    <div
      className={cn(
        "w-full md:w-[30%] border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex flex-col transition-transform duration-300 ease-in-out",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        isMobile ? "absolute h-full z-40" : "relative"
      )}
    >
      <div className="flex-1 overflow-y-auto">
        <ChatList
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          isMobile={isMobile}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </div>

    {/* Chat Box Area */}
    <div
      className={cn(
        "flex-1 flex flex-col bg-white dark:bg-gray-800 h-full",
        isMobile && isSidebarOpen ? "hidden" : "flex"
      )}
    >
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ChatHeader
          selectedChat={selectedChat}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 bg-gray-50 dark:bg-gray-900"
      style={{
       
        backgroundImage:  `url(${chatBg})`,
        backgroundSize: "300px 300px",
        
       // backgroundRepeat: "repeat",
      }}
      >
        <MessageList messages={currentMessages} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800">
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  </div>
</div>


      
    )
}
