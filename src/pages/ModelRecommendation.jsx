import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

function ModelRecommendation() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/models/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(data => setModels(data.models || []));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          AI Model Recommendation
        </h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <motion.div
              key={model.name}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Brain className="text-cyan-400 mb-4" size={32} />

              <h2 className="text-xl font-bold">
                {model.name}
              </h2>

              <p className="mt-3 text-gray-300">
                {model.reason}
              </p>

              <p className="mt-5 text-cyan-400 font-semibold">
                Expected Accuracy: {model.accuracy}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ModelRecommendation;
