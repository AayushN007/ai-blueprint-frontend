import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FileText, CircleCheck as CheckCircle, Download, RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import { generateBlueprint } from "../services/api";
import Spinner from "../components/Spinner";
import ErrorState from "../components/ErrorState";
import { useToast } from "../components/Toast";

function Blueprint() {
  const [blueprint, setBlueprint] = useState(null);
  const [status, setStatus] = useState("loading");
  const toast = useToast();

  async function load() {
    setStatus("loading");
    try {
      const data = await generateBlueprint({
        project: "AI Blueprint Generator",
        dataset: "User Dataset",
        target: "Prediction Target",
      });
      setBlueprint(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    load();
  }, []);

  function downloadJSON() {
    if (!blueprint) return;
    const blob = new Blob([JSON.stringify(blueprint, null, 2)], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai_blueprint.json";
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Blueprint downloaded.");
  }

  const sections = blueprint
    ? [
        { title: "Project", content: blueprint.project },
        { title: "Dataset", content: blueprint.dataset },
        { title: "Target", content: blueprint.target },
        { title: "Recommended Model", content: blueprint.model },
      ]
    : [];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-bold lg:text-4xl">
              <FileText className="text-cyan-400" />
              AI Generated Blueprint
            </h1>
            <p className="mt-2 text-gray-400">
              Generated from your AI conversation.
            </p>
          </div>
          {status === "success" && (
            <div className="flex gap-3">
              <button
                onClick={load}
                className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white/5"
              >
                <RotateCw size={16} />
                Regenerate
              </button>
              <button
                onClick={downloadJSON}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                <Download size={16} />
                Export
              </button>
            </div>
          )}
        </div>

        {status === "loading" && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
                />
              ))}
            </div>
            <div className="h-48 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          </div>
        )}

        {status === "error" && (
          <ErrorState
            title="Couldn't generate blueprint"
            description="The blueprint service is unavailable. Please try again."
            onRetry={load}
          />
        )}

        {status === "success" && (
          <>
            <div className="grid gap-6 lg:grid-cols-2">
              {sections.map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <p className="mt-4 text-gray-300">
                    {section.content || "Not available"}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-green-400">
                    <CheckCircle size={18} />
                    Generated
                  </div>
                </motion.div>
              ))}
            </div>

            {blueprint.pipeline?.length > 0 && (
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-4 text-xl font-bold">ML Pipeline</h2>
                <div className="space-y-3 text-gray-300">
                  {blueprint.pipeline.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-sm text-cyan-400">
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Blueprint;
