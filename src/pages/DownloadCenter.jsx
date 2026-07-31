import Sidebar from "../components/Sidebar";
import {
  Download,
  FileCode2,
  FileText,
  Package,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

function DownloadCenter() {
  const files = [
    {
      name: "Project Blueprint PDF",
      type: "Documentation",
      size: "2.4 MB",
      icon: FileText,
    },
    {
      name: "ML Starter Code",
      type: "Python Package",
      size: "8.7 MB",
      icon: FileCode2,
    },
    {
      name: "Complete Project Bundle",
      type: "ZIP Archive",
      size: "18.2 MB",
      icon: Package,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">

          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles size={22} />
            AI Export Agent
          </div>

          <h1 className="mt-3 flex items-center gap-3 text-4xl font-bold">
            <Download className="text-cyan-400" />
            Download Center
          </h1>

          <p className="mt-2 text-gray-400">
            Export your AI project files and generated resources.
          </p>

        </div>


        <div className="grid gap-6 lg:grid-cols-3">

          {files.map((file) => {
            const Icon = file.icon;

            return (
              <motion.div
                key={file.name}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <div className="flex justify-between">

                  <Icon
                    size={35}
                    className="text-cyan-400"
                  />

                  <CheckCircle
                    className="text-green-400"
                    size={22}
                  />

                </div>


                <h2 className="mt-5 text-xl font-bold">
                  {file.name}
                </h2>


                <p className="mt-2 text-gray-400">
                  {file.type}
                </p>


                <p className="mt-2 text-sm text-cyan-400">
                  Size: {file.size}
                </p>


                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400">
                  <Download size={18} />
                  Download
                </button>


              </motion.div>
            );
          })}

        </div>

      </main>

    </div>
  );
}

export default DownloadCenter;