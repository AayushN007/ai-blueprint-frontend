import Sidebar from "../components/Sidebar";
import {
  FileText,
  CheckCircle,
  GitBranch,
  Layers,
  Sparkles,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

function Blueprint() {
  const sections = [
    {
      title: "Problem Definition",
      content:
        "Predict student performance using historical academic and behavioral data.",
    },
    {
      title: "Data Pipeline",
      content:
        "Data collection → cleaning → feature engineering → model training.",
    },
    {
      title: "Model Architecture",
      content:
        "XGBoost classifier with hyperparameter optimization.",
    },
    {
      title: "Deployment Plan",
      content:
        "FastAPI backend with frontend integration and cloud deployment.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">

          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles size={22} />
            AI Blueprint Generator
          </div>

          <h1 className="mt-3 flex items-center gap-3 text-4xl font-bold">
            <FileText className="text-cyan-400" />
            Project Blueprint
          </h1>

          <p className="mt-2 text-gray-400">
            Complete AI-generated project architecture and implementation plan.
          </p>

        </div>


        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">

          <div className="flex justify-between mb-3">
            <span className="font-semibold">
              Blueprint Completion
            </span>

            <span className="text-cyan-400">
              100%
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-800">
            <div className="h-3 w-full rounded-full bg-cyan-500" />
          </div>

        </div>


        <div className="grid gap-6 lg:grid-cols-2">

          {sections.map((section, index) => (

            <motion.div
              key={section.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                {index % 2 === 0 ? (
                  <GitBranch className="text-cyan-400" />
                ) : (
                  <Layers className="text-cyan-400" />
                )}

                <h2 className="text-xl font-bold">
                  {section.title}
                </h2>

              </div>


              <p className="mt-4 text-gray-400">
                {section.content}
              </p>


              <div className="mt-5 flex items-center gap-2 text-green-400">
                <CheckCircle size={18} />
                Completed
              </div>

            </motion.div>

          ))}

        </div>


        <button className="mt-10 flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400">
          <Download size={18} />
          Export Blueprint
        </button>


      </main>

    </div>
  );
}

export default Blueprint;