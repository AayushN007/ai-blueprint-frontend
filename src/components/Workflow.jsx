import { motion } from "framer-motion";
import {
  MessageSquare,
  Database,
  Brain,
  FileText,
  Download,
} from "lucide-react";

function Workflow() {
  const steps = [
    {
      title: "Describe Project",
      description: "Tell AI your idea and requirements.",
      icon: MessageSquare,
    },
    {
      title: "Dataset Discovery",
      description: "AI recommends suitable datasets.",
      icon: Database,
    },
    {
      title: "Model Selection",
      description: "AI chooses the best ML approach.",
      icon: Brain,
    },
    {
      title: "Generate Blueprint",
      description: "Create architecture and implementation plan.",
      icon: FileText,
    },
    {
      title: "Download",
      description: "Export your project resources.",
      icon: Download,
    },
  ];

  return (
    <section
      id="workflow"
      className="bg-slate-950 py-20 text-white"
    >

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          How AI Blueprint Works
        </h2>

        <p className="mt-4 text-center text-gray-400">
          From idea to complete AI project blueprint.
        </p>


        <div className="mt-14 grid gap-6 md:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500 text-black">
                  <Icon size={28} />
                </div>


                <h3 className="mt-5 font-bold">
                  {index + 1}. {step.title}
                </h3>


                <p className="mt-3 text-sm text-gray-400">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Workflow;