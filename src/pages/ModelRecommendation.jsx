import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";
import { getModels } from "../services/api";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";

function ModelRecommendation() {
  const [models, setModels] = useState([]);
  const [status, setStatus] = useState("loading");

  async function load() {
    setStatus("loading");
    try {
      const data = await getModels();
      setModels(data.models || []);
      setStatus(data.models?.length ? "success" : "empty");
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold lg:text-4xl">AI Model Recommendation</h1>
          <p className="mt-2 text-gray-400">
            ML approaches selected and explained by AI.
          </p>
        </div>

        {status === "loading" && (
          <div className="flex items-center justify-center py-32 text-cyan-400">
            <Spinner size={32} />
          </div>
        )}

        {status === "error" && (
          <ErrorState
            title="Couldn't load models"
            description="The recommendation service is unavailable. Please try again."
            onRetry={load}
          />
        )}

        {status === "empty" && (
          <EmptyState
            icon={Brain}
            title="No models yet"
            description="Model recommendations will appear here once your project is analyzed."
          />
        )}

        {status === "success" && (
          <div className="grid gap-6 lg:grid-cols-3">
            {models.map((model) => (
              <motion.div
                key={model.name}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30"
              >
                <Brain className="text-cyan-400 mb-4" size={32} />
                <h2 className="text-xl font-bold">{model.name}</h2>
                <p className="mt-3 text-gray-300">{model.reason}</p>
                {model.accuracy && (
                  <p className="mt-5 text-cyan-400 font-semibold">
                    Expected Accuracy: {model.accuracy}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ModelRecommendation;
