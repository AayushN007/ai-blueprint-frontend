import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Database, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { getDatasets } from "../services/api";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";

function DatasetRecommendation() {
  const [datasets, setDatasets] = useState([]);
  const [status, setStatus] = useState("loading");

  async function load() {
    setStatus("loading");
    try {
      const data = await getDatasets();
      setDatasets(data.datasets || []);
      setStatus(data.datasets?.length ? "success" : "empty");
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
          <h1 className="text-3xl font-bold lg:text-4xl">Dataset Recommendation</h1>
          <p className="mt-2 text-gray-400">
            AI-curated datasets suited to your project domain.
          </p>
        </div>

        {status === "loading" && (
          <div className="flex items-center justify-center py-32 text-cyan-400">
            <Spinner size={32} />
          </div>
        )}

        {status === "error" && (
          <ErrorState
            title="Couldn't load datasets"
            description="The recommendation service is unavailable. Please try again."
            onRetry={load}
          />
        )}

        {status === "empty" && (
          <EmptyState
            icon={Database}
            title="No datasets yet"
            description="Datasets will appear here once your project is analyzed."
          />
        )}

        {status === "success" && (
          <div className="grid gap-6 lg:grid-cols-3">
            {datasets.map((dataset) => (
              <motion.div
                key={dataset.name}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30"
              >
                <Database className="text-cyan-400 mb-4" size={32} />
                <h2 className="text-xl font-bold">{dataset.name}</h2>
                {dataset.description && (
                  <p className="mt-3 text-sm text-gray-400">{dataset.description}</p>
                )}
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
        )}
      </main>
    </div>
  );
}

export default DatasetRecommendation;
