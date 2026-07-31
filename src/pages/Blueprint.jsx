import Sidebar from "../components/Sidebar";
import {
  FileText,
  CheckCircle,
  GitBranch,
  Layers,
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
          <h1 className="flex items-center gap-3 text-4xl font-bold">
            <FileText className="text-cyan-400" />
            Project Blueprint
          </h1>

          <p className="mt-2 text-gray-400">
            Complete AI-generated project architecture.
          </p>
        </div>


        <div className="grid gap-6 lg:grid-cols-2">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              whileHover={{ y: -5 }}
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


        <button className="mt-10 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400">
          Export Blueprint
        </button>

      </main>

    </div>
  );
}

export default Blueprint;