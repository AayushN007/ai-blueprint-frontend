function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-extrabold leading-tight">
          Build Your
          <span className="text-cyan-400"> AI/ML Blueprint </span>
          in Minutes
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Generate datasets, model recommendations, project structure,
          implementation roadmap, and starter code—all powered by AI.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
            Create Project
          </button>

          <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;