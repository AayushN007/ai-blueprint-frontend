import Sidebar from "../components/Sidebar";
import { Brain, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function ModelRecommendation() {
  const models = [
    {
      name: "Random Forest",
      type: "Classification",
      accuracy: "High",
      reason:
        "Handles complex relationships and works well with structured datasets.",
    },
    {
      name: "XGBoost",
      type: "Gradient Boosting",
      accuracy: "Very High",
      reason:
        "Strong performance for tabular data with excellent optimization.",
    },
    {
      name: "Neural Network",
      type: "Deep Learning",
      accuracy: "High",
      reason:
        "Suitable for large datasets and complex pattern recognition.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Model Recommendation
          </h1>

          <p className="mt-2 text-gray-400">
            AI recommended models based on your dataset and objective.
          </p>
        </div>


        <div className="grid gap-6 lg:grid-cols-3">

          {models.map((model) => (
            <motion.div
              key={model.name}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <Brain className="text-cyan-400" size={32} />

              <h2 className="mt-5 text-2xl font-bold">
                {model.name}
              </h2>

              <p className="mt-2 text-cyan-400">
                {model.type}
              </p>

              <p className="mt-4 text-gray-400">
                {model.reason}
              </p>


              <div className="mt-6 flex items-center gap-2 text-green-400">
                <CheckCircle size={18} />
                Performance: {model.accuracy}
              </div>


              <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400">
                Select Model
              </button>

            </motion.div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default ModelRecommendation;