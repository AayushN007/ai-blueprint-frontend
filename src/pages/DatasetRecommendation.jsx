import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Database, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function DatasetRecommendation() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/datasets/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => setDatasets(data.datasets || []))
      .catch(console.error);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dataset Recommendation
        </h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {datasets.map((dataset) => (
            <motion.div
              key={dataset.name}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Database className="text-cyan-400 mb-4" size={32} />

              <h2 className="text-xl font-bold">
                {dataset.name}
              </h2>

              <a
                href={dataset.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400"
              >
                View Dataset
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DatasetRecommendation;
