import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function Blueprint() {

  const [blueprint, setBlueprint] = useState(null);

  useEffect(() => {
    fetch("https://ai-blueprint-backend-v3x5.onrender.com/blueprint/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project: "AI Blueprint Generator",
        dataset: "User Dataset",
        target: "Prediction Target"
      }),
    })
      .then((res) => res.json())
      .then((data) => setBlueprint(data))
      .catch((err) => console.log(err));

  }, []);


  if (!blueprint) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading Blueprint...
      </div>
    );
  }


  const sections = [
    {
      title: "Project",
      content: blueprint.project,
    },
    {
      title: "Dataset",
      content: blueprint.dataset,
    },
    {
      title: "Target",
      content: blueprint.target,
    },
    {
      title: "Recommended Model",
      content: blueprint.model,
    },
  ];


  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-4xl font-bold">
            <FileText className="text-cyan-400" />
            AI Generated Blueprint
          </h1>

          <p className="mt-2 text-gray-400">
            Generated from your AI conversation.
          </p>
        </div>


        <div className="grid gap-6 lg:grid-cols-2">

          {sections.map((section) => (
            <motion.div
              key={section.title}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <h2 className="text-xl font-bold">
                {section.title}
              </h2>

              <p className="mt-4 text-gray-300">
                {section.content || "Not available"}
              </p>

              <div className="mt-5 flex items-center gap-2 text-green-400">
                <CheckCircle size={18}/>
                Generated
              </div>

            </motion.div>
          ))}

        </div>


        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">

          <h2 className="text-xl font-bold mb-4">
            ML Pipeline
          </h2>

          <div className="space-y-3 text-gray-300">

            {blueprint.pipeline?.map((step) => (
              <div key={step}>
                ✓ {step}
              </div>
            ))}

          </div>

        </div>


      </main>

    </div>
  );
}

export default Blueprint;