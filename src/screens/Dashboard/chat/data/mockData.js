// Mock data for the WhatsApp interface


export const chats = [
    {
        id: "9",
        name: "Mere Humsafar Admin",
        lastMessage: "Welcome to the Mere Humsafar app! 💞 Enjoy chatting 🕊️",
        time: "3:00 PM",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKF6MbLkDcbzNmXrwkwYsXeNbeEs94bk1YvQ&s",
        online: true,
      },
      
    {
        id: "1",
        name: "Sarah Johnson",
        lastMessage: "Hey! How are you doing?",
        time: "2:30 PM",
        avatar: "/diverse-woman-portrait.png",
        unread: 2,
        online: true,
    },
    {
        id: "2",
        name: "Work Team",
        lastMessage: "Meeting at 3 PM today",
        time: "1:45 PM",
        avatar: "/diverse-professional-team.png",
        unread: 5,
    },
    {
        id: "3",
        name: "Mom",
        lastMessage: "Don't forget dinner tonight!",
        time: "12:20 PM",
        avatar: "/loving-mother.png",
    },
    {
        id: "6",
        name: "Mom",
        lastMessage: "Don't forget dinner tonight!",
        time: "12:20 PM",
        avatar: "/loving-mother.png",
    },
    {
        id: "7",
        name: "Mom",
        lastMessage: "Don't forget dinner tonight!",
        time: "12:20 PM",
        avatar: "/loving-mother.png",
    },
    {
        id: "4",
        name: "Alex Chen",
        lastMessage: "Thanks for the help yesterday",
        time: "11:30 AM",
        avatar: "/thoughtful-man.png",
        online: true,
    },
    {
        id: "5",
        name: "Book Club",
        lastMessage: 'Next book: "The Silent Patient"',
        time: "Yesterday",
        avatar: "/stack-of-diverse-books.png",
    },
]

export const chatMessages = {
    "9":[
         { id: "1", text: "Welcome to the Mere Humsafar app! 💞 Enjoy chatting 🕊️", time: "3:00 PM", sent: false,   replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
    ],
    "1": [
        { id: "1", text: "Hey! How are you doing?", time: "2:25 PM", sent: false,
            replies: [
                {
                  id: "r1",
                  text: "Thanks! Excited to use it 🥰",
                  time: "3:05 PM",
                  sent: true,
                },
              ],
         },
        {
            id: "2",
            text: "I'm doing great! Just finished a big project at work",
            time: "2:27 PM",
            sent: true,
            status: "read",
            replies: [
                {
                  id: "r1",
                  text: "Thanks! Excited to use it 🥰",
                  time: "3:05 PM",
                  sent: true,
                },
              ],
        },
        { id: "3", text: "That's awesome! What was the project about?", time: "2:28 PM", sent: false },
        {
            id: "4",
            text: "It was a new mobile app for our company. Took months but finally launched!",
            time: "2:30 PM",
            sent: true,
            status: "delivered",
            replies: [
                {
                  id: "r1",
                  text: "Thanks! Excited to use it 🥰",
                  time: "3:05 PM",
                  sent: true,
                },
              ],
        },
        { id: "5", text: "Congratulations! 🎉 You must be so proud", time: "2:31 PM", sent: false,    replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
    ],
    "2": [
        { id: "1", text: "Good morning team!", time: "9:00 AM", sent: false,   replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
        { id: "2", text: "Morning! Ready for the big presentation?", time: "9:05 AM", sent: true, status: "read" },
        { id: "3", text: "Yes, all slides are ready. Meeting room booked for 3 PM", time: "9:10 AM", sent: false },
        { id: "4", text: "Perfect! I'll bring the printed materials", time: "9:15 AM", sent: true, status: "read",   replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
        { id: "5", text: "Meeting at 3 PM today", time: "1:45 PM", sent: false,   replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
    ],
    "3": [
        { id: "1", text: "Hi honey! How was your day?", time: "11:00 AM", sent: false },
        { id: "2", text: "It was good mom! Busy but productive", time: "11:30 AM", sent: true, status: "read" },
        { id: "3", text: "That's wonderful. Are you eating well?", time: "11:35 AM", sent: false },
        { id: "4", text: "Yes mom, don't worry about me 😊", time: "11:40 AM", sent: true, status: "read" },
        { id: "5", text: "Don't forget dinner tonight!", time: "12:20 PM", sent: false },
        { id: "6", text: "I'll be there at 7 PM sharp!", time: "12:25 PM", sent: true, status: "delivered",   replies: [
            {
              id: "r1",
              text: "Thanks! Excited to use it 🥰",
              time: "3:05 PM",
              sent: true,
            },
          ], },
    ],
    "4": [
        { id: "1", text: "Hey, could you help me with the React component?", time: "10:00 AM", sent: false },
        { id: "2", text: "What's the issue?", time: "10:05 AM", sent: true, status: "read" },
        { id: "3", text: "The state isn't updating properly", time: "10:10 AM", sent: false },
        { id: "4", text: "Try using useEffect with dependency array", time: "10:15 AM", sent: true, status: "read" },
        { id: "5", text: "That worked perfectly! You're a lifesaver", time: "10:30 AM", sent: false },
        { id: "6", text: "Thanks for the help yesterday", time: "11:30 AM", sent: false,
            replies: [
                {
                  id: "r1",
                  text: "Thanks! Excited to use it 🥰",
                  time: "3:05 PM",
                  sent: true,
                },
              ],
         },
    ],
    "5": [
        { id: "1", text: "Hi everyone! Hope you're all enjoying the current book", time: "Yesterday", sent: false },
        { id: "2", text: "Loving it so far! The plot twist was unexpected", time: "Yesterday", sent: true, status: "read" },
        { id: "3", text: "I know right! Didn't see that coming", time: "Yesterday", sent: false },
        {
            id: "4",
            text: "For our next meeting, I suggest we discuss chapters 10-15",
            time: "Yesterday",
            sent: true,
            status: "read",
        },
        { id: "5", text: 'Next book: "The Silent Patient"', time: "Yesterday", sent: false },
    ],
}