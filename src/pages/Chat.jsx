import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Send } from "lucide-react";
import { motion } from "framer-motion";


function Chat() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! Tell me what AI project you want to build."
    }
  ]);


  async function sendMessage() {

    if (!message.trim()) return;


    const userMessage = message;


    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage
      }
    ]);


    setMessage("");


    try {

      const response = await fetch(
        "https://ai-blueprint-backend-v3x5.onrender.com/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      );


      const data = await response.json();


      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "Blueprint generated successfully."
        }
      ]);


      if (data.blueprint_ready) {

        setTimeout(() => {
          navigate("/blueprint");
        }, 1000);

      }


    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Backend connection failed."
        }
      ]);

    }

  }



  function handleKeyPress(e) {

    if (e.key === "Enter") {
      sendMessage();
    }

  }



  return (

    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />


      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold mb-8">
          AI Project Builder
        </h1>



        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-[70vh] flex flex-col">


          <div className="flex-1 overflow-y-auto space-y-4">


            {messages.map((msg,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className={
                  msg.role === "user"
                  ?
                  "ml-auto max-w-xl bg-cyan-500 text-black p-4 rounded-xl"
                  :
                  "max-w-xl bg-white/10 p-4 rounded-xl"
                }

              >

                {msg.text}

              </motion.div>


            ))}


          </div>



          <div className="flex gap-3 mt-5">


            <input

              value={message}

              onChange={(e)=>setMessage(e.target.value)}

              onKeyDown={handleKeyPress}

              placeholder="Describe your AI project..."

              className="flex-1 rounded-xl bg-white/10 border border-white/10 px-5 py-3 outline-none"

            />



            <button

              onClick={sendMessage}

              className="rounded-xl bg-cyan-500 px-5 text-black"

            >

              <Send />

            </button>


          </div>


        </div>


      </main>


    </div>

  );

}


export default Chat;