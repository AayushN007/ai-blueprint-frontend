import Sidebar from "../components/Sidebar";
import { Database, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function DatasetRecommendation() {
  const datasets = [
    {
      name: "Student Performance Dataset",
      source: "Kaggle",
      description:
        "Contains student demographics, study habits, and academic performance data.",
      size: "6,600 records",
      match: "98% Match",
    },
    {
      name: "UCI Student Dataset",
      source: "UCI Repository",
      description:
        "Educational dataset suitable for prediction and classification tasks.",
      size: "1,000 records",
      match: "92% Match",
    },
    {
      name: "Academic Success Dataset",
      source: "OpenML",
      description:
        "Useful for analyzing factors affecting student outcomes.",
      size: "4,000 records",
      match: "87% Match",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">

          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles size={22} />
            AI Recommendation Agent
          </div>

          <h1 className="mt-3 text-4xl font-bold">
            Dataset Recommendation
          </h1>

          <p className="mt-2 text-gray-400">
            AI suggested datasets based on your project requirements.
          </p>

        </div>


        <div className="grid gap-6 lg:grid-cols-3">

          {datasets.map((dataset) => (

            <motion.div
              key={dataset.name}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <div className="flex justify-between items-start">

                <Database
                  className="text-cyan-400"
                  size={32}
                />

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                  {dataset.match}
                </span>

              </div>


              <h2 className="mt-5 text-xl font-bold">
                {dataset.name}
              </h2>


              <p className="mt-3 text-gray-400">
                {dataset.description}
              </p>


              <div className="mt-5 text-sm text-cyan-400">
                Source: {dataset.source}
              </div>


              <div className="mt-2 text-sm text-gray-400">
                Size: {dataset.size}
              </div>


              <button className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400">
                View Dataset
                <ExternalLink size={16} />
              </button>

            </motion.div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default DatasetRecommendation;