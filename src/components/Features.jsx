import { Database, Brain, FileText, Code } from "lucide-react";

function Features() {
  const features = [
    {
      title: "Dataset Recommendation",
      description: "Find suitable datasets automatically using AI analysis.",
      icon: Database,
    },
    {
      title: "Model Recommendation",
      description: "Choose optimized ML models with reasoning.",
      icon: Brain,
    },
    {
      title: "Project Blueprint",
      description: "Generate complete AI project architecture.",
      icon: FileText,
    },
    {
      title: "Code Generation",
      description: "Download ready-to-use project starter files.",
      icon: Code,
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Everything You Need To Build AI
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2"
              >
                <Icon className="text-cyan-400" size={32} />

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;