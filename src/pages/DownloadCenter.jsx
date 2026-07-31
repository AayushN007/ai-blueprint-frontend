import Sidebar from "../components/Sidebar";
import {
  Download,
  FileCode2,
  FileText,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

function DownloadCenter() {
  const files = [
    {
      name: "Project Blueprint PDF",
      type: "Documentation",
      icon: FileText,
    },
    {
      name: "ML Starter Code",
      type: "Python Package",
      icon: FileCode2,
    },
    {
      name: "Complete Project Bundle",
      type: "ZIP Archive",
      icon: Package,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-4xl font-bold">
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
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <Icon
                  size={35}
                  className="text-cyan-400"
                />

                <h2 className="mt-5 text-xl font-bold">
                  {file.name}
                </h2>

                <p className="mt-2 text-gray-400">
                  {file.type}
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