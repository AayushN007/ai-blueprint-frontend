function Features() {
  const features = [
    {
      title: "Dataset Recommendation",
      description:
        "Receive AI-powered dataset suggestions tailored to your project idea.",
    },
    {
      title: "Model Recommendation",
      description:
        "Get the most suitable ML algorithms with explanations and evaluation metrics.",
    },
    {
      title: "Project Blueprint",
      description:
        "Generate a complete AI/ML workflow, architecture, and implementation roadmap.",
    },
    {
      title: "Code Generation",
      description:
        "Download starter files including train.py, predict.py, Dockerfile, and more.",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          What Our Platform Offers
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Everything you need to kickstart your AI/ML project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;