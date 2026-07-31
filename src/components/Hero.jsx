import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-6 flex items-center gap-2 text-cyan-400">
            <Sparkles size={20} />
            AI Powered Project Builder
          </div>


          <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
            Build AI Projects
            <span className="text-cyan-400"> Smarter.</span>
          </h1>


          <p className="mt-6 max-w-2xl text-xl text-gray-400">
            AI Blueprint helps you generate complete machine learning project
            blueprints including datasets, models, architecture, and code
            recommendations.
          </p>


          <div className="mt-10 flex gap-4">

            <button
              onClick={() => navigate("/create-project")}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black hover:bg-cyan-400"
            >
              Get Started
              <ArrowRight size={18} />
            </button>


            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-xl border border-cyan-400 px-7 py-3 text-cyan-400 hover:bg-cyan-400/10"
            >
              View Demo
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;