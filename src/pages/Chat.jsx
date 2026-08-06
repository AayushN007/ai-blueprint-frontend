import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Send, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chat } from "../services/api";
import { useToast } from "../components/Toast";

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 bg-white/10 px-5 py-4 rounded-xl w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2.5 w-2.5 rounded-full bg-cyan-400"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

function Chat() {
  const navigate = useNavigate();
  const toast = useToast();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! Tell me what AI project you want to build." },
  ]);
  const [isSending, setIsSending] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  async function sendMessage() {
    if (!message.trim() || isSending) return;

    const userMessage = message;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setIsSending(true);

    try {
      const data = await chat(userMessage);

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "Blueprint generated successfully." },
      ]);

      if (data.blueprint_ready) {
        toast.success("Blueprint is ready! Redirecting...");
        setTimeout(() => navigate("/blueprint"), 1200);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I couldn't reach the server. Please try again.",
          isError: true,
        },
      ]);
      toast.error("Connection failed. Please retry.");
    } finally {
      setIsSending(false);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold lg:text-4xl">AI Project Builder</h1>
          <p className="mt-2 text-gray-400">
            Describe your idea and let AI design the blueprint.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 flex h-[70vh] flex-col">
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto p-6"
          >
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={
                  msg.role === "user"
                    ? "ml-auto max-w-xl bg-cyan-500 text-black p-4 rounded-2xl rounded-tr-sm"
                    : msg.isError
                    ? "max-w-xl bg-red-500/10 border border-red-500/30 p-4 rounded-2xl rounded-tl-sm"
                    : "max-w-xl bg-white/10 p-4 rounded-2xl rounded-tl-sm"
                }
              >
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                {msg.isError && (
                  <button
                    onClick={() => {
                      setMessages((prev) => prev.slice(0, -1));
                      setMessage(messages[messages.length - 2]?.text || "");
                    }}
                    className="mt-3 flex items-center gap-2 text-sm text-red-300 hover:text-red-200"
                  >
                    <RotateCw size={14} />
                    Retry
                  </button>
                )}
              </motion.div>
            ))}

            <AnimatePresence>
              {isSending && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <TypingDots />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your AI project..."
                disabled={isSending}
                aria-label="Message input"
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-5 py-3 outline-none transition focus:border-cyan-400/50 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isSending || !message.trim()}
                aria-label="Send message"
                className="rounded-xl bg-cyan-500 px-5 text-black transition hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
