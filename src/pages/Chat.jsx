import Sidebar from "../components/Sidebar";

function Chat() {
  const messages = [
    {
      sender: "AI",
      text: "Hello! I'll help you generate the perfect AI/ML project blueprint.",
    },
    {
      sender: "AI",
      text: "First question: What is your target variable?",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          AI Clarification Chat
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

          <div className="space-y-4 mb-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4"
              >
                <p className="text-cyan-400 font-semibold">
                  {message.sender}
                </p>

                <p className="mt-2">
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Type your answer..."
              className="flex-1 bg-slate-800 rounded-lg p-4 outline-none"
            />

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-lg">
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Chat;