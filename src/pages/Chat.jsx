import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Bot, Send } from "lucide-react";
import { motion } from "framer-motion";

function Chat() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      sender: "AI Agent",
      text: "Hello! I'll help you create your AI project blueprint.",
    },
    {
      sender: "AI Agent",
      text: "What is the main objective of your machine learning project?",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            AI Clarification Chat
          </h1>

          <p className="mt-2 text-gray-400">
            Discuss your project requirements with AI agents.
          </p>
        </div>


        <div className="flex h-[70vh] flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">


          <div className="flex-1 space-y-5 overflow-y-auto p-6">

            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl rounded-2xl bg-slate-900 p-5"
              >

                <div className="mb-2 flex items-center gap-2 text-cyan-400">
                  <Bot size={18} />
                  {msg.sender}
                </div>

                <p className="text-gray-200">
                  {msg.text}
                </p>

              </motion.div>
            ))}

          </div>


          <div className="border-t border-white/10 p-5">

            <div className="flex gap-4">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your answer..."
                className="flex-1 rounded-xl bg-slate-900 px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 font-semibold text-black hover:bg-cyan-400"
              >
                <Send size={18} />
                Send
              </button>

            </div>

          </div>


        </div>

      </main>

    </div>
  );
}

export default Chat;