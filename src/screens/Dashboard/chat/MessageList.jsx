
// import DropdownMenu from "./ui/DropdownMenu"
// import { ScrollArea } from "./ui/scroll-area"
// import { ArrowDownNarrowWide, Check, CheckCheck, ChevronDown } from "lucide-react"

// export function MessageList({ messages }) {

//     return (
//         <ScrollArea
//             className="flex-1 p-2 "
//             style={{
//                 // opacity: 0.1,
//             }}
//         // style={{
//         //     backgroundImage: `url(${chatBg})`,
//         //     // backgroundRepeat: "repeat",

//         //     backgroundSize: "200px 200px",
//         //     objectFit: "cover",

//         //     // backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.02'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//         // }}
//         >
//             <div className="space-y-6  max-w-[65rem] min-h-[77vh] mx-auto">
//                 {/* <MessageItem message={{text:selectedChat?.lastMessage, sent: true,  time: "2:25 PM"}} /> */}
//                 {messages?.map((message) => (
//                     <MessageItem key={message?.id} message={message} />
//                 ))}
//             </div>
//         </ScrollArea>
//     )
// }



// const handleMenuClick = (action, text) => {
//     console.log("Menu action:", action);

//     if(action === "copy"){
//         // Copy to clipboard logic
//         navigator.clipboard.writeText(text).then(() => {
//             alert("Text copied to clipboard");
//         }).catch(err => {
//             console.error("Could not copy text: ", err);
//         });
//     }
//     // Implement action handling logic here
// }

// function MessageItem({ message }) {
//     return (
// <div className={`flex ${message.sent ? "justify-end" : "justify-start"} mb-2`}>
//   <div
//     className={`relative max-w-md px-4 py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md 
//       ${message.sent
//         ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-md"
//         : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-md"
//       }`}
//   >
//     {/* Dropdown Menu - top right corner */}
//     <div className="absolute top-1 right-1  dropdown-menu">
//       <DropdownMenu  handleMenuClick={(e) => handleMenuClick(e, message?.text)}/>
//     </div>

//     {/* Message Content */}
//     <div className="pr-6"> {/* padding-right to avoid overlap with dropdown */}
//       <p className="text-sm leading-relaxed font-medium break-words">{message.text}</p>

//       {/* Time + Status */}
//       <div
//         className={`flex items-center justify-end gap-1 mt-1 ${message.sent ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"
//           }`}
//       >
//         <span className="text-xs font-semibold">{message.time}</span>

//         {message.sent && message.status && (
//           <div className="ml-1">
//             {message.status === "sent" && <Check className="w-4 h-4" />}
//             {message.status === "delivered" && <CheckCheck className="w-4 h-4" />}
//             {message.status === "read" && <CheckCheck className="w-4 h-4 text-blue-400" />}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
//     )
// }





import React, { useState } from "react";
import DropdownMenu from "./ui/DropdownMenu";
import { ScrollArea } from "./ui/scroll-area";
import { Check, CheckCheck } from "lucide-react";

// 🔹 Emoji list for reactions
const EMOJIS = ["👍", "❤️", "😂", "😮", "😢", "🙏"];

export function MessageList({ messages }) {
  const [messageList, setMessageList] = useState(messages || []);

  // 🔹 Menu Action Handler
  const handleMenuClick = (action, messageId, text) => {
    console.log("Menu action:", action);

    if (action === "copy") {
      navigator.clipboard
        .writeText(text)
        .then(() => alert("Text copied to clipboard"))
        .catch((err) => console.error("Copy failed: ", err));
    }

    // 🔹 Open Emoji Picker on "react"
    if (action === "react") {
      // Simple emoji picker (can be replaced with emoji-picker-react)
      const emoji = prompt(`Choose emoji: ${EMOJIS.join(" ")}`);
      if (emoji && EMOJIS.includes(emoji)) {
        setMessageList((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  reactions: [...(msg.reactions || []), emoji],
                }
              : msg
          )
        );
      }
    }

    // 🔹 Delete message
    if (action === "delete") {
      setMessageList((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  };

  return (
    <ScrollArea className="flex-1 p-2">
      <div className="space-y-6 max-w-[65rem] min-h-[77vh] mx-auto">
        {messageList.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </div>
    </ScrollArea>
  );
}

// ===============================================================

function MessageItem({ message, handleMenuClick }) {
  return (
    <div
      className={`flex ${message.sent ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`relative max-w-md px-4 py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md 
        ${
          message.sent
            ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-md"
            : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-md"
        }`}
      >
        {/* Dropdown Menu */}
        <div className="absolute top-1 right-1 dropdown-menu">
          <DropdownMenu
            handleMenuClick={(action) =>
              handleMenuClick(action, message.id, message.text)
            }
          />
        </div>

        {/* Message Content */}
        <div className="pr-6">
          <p className="text-sm leading-relaxed font-medium break-words">
            {message.text}
          </p>

        
            {/* Emoji + Time + Status Row */}
<div className="flex items-center justify-between mt-1">
  {/* Emoji Reactions (Left side) */}
  <div className="flex flex-wrap gap-1">
    {/* Example emoji (you can map multiple later) */}
    <span className="text-sm px-1.5 py-0.5 bg-white/20 text-white rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform">
      {EMOJIS[1]}
    </span>
  </div>

  {/* Time + Status (Right side) */}
  <div
    className={`flex items-center gap-1 ${
      message.sent
        ? "text-emerald-100"
        : "text-gray-500 dark:text-gray-400"
    }`}
  >
    <span className="text-xs font-semibold">{message.time}</span>

    {message.sent && message.status && (
      <div className="ml-1">
        {message.status === "sent" && <Check className="w-4 h-4" />}
        {message.status === "delivered" && <CheckCheck className="w-4 h-4" />}
        {message.status === "read" && <CheckCheck className="w-4 h-4 text-blue-400" />}
      </div>
    )}
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
