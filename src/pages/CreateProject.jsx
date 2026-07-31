import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Sparkles, Check } from "lucide-react";

function CreateProject() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const steps = [
    "Project Details",
    "AI Understanding",
    "Generate Blueprint",
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Create AI Project
          </h1>

          <p className="mt-2 text-gray-400">
            Provide details and let AI design your ML workflow.
          </p>
        </div>


        {/* Steps */}

        <div className="mb-10 flex gap-4">

          {steps.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
                step === index + 1
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              {step > index + 1 ? (
                <Check size={18} />
              ) : (
                index + 1
              )}

              {item}
            </div>
          ))}

        </div>


        <div className="max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">


          {step === 1 && (
            <>

              <h2 className="text-2xl font-bold mb-6 flex gap-2 items-center">
                <Sparkles className="text-cyan-400" />
                Project Information
              </h2>


              <input
                placeholder="Project Name"
                className="mb-5 w-full rounded-xl bg-slate-900 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />


              <select
                className="mb-5 w-full rounded-xl bg-slate-900 p-4"
              >
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Education</option>
                <option>Agriculture</option>
                <option>Retail</option>
              </select>


              <textarea
                rows="5"
                placeholder="Describe your AI problem..."
                className="w-full rounded-xl bg-slate-900 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />


            </>
          )}



          {step === 2 && (
            <div>

              <h2 className="text-2xl font-bold mb-5">
                AI Requirements
              </h2>

              <p className="text-gray-400">
                AI agents will ask questions about your problem,
                data, constraints, and expected output.
              </p>

            </div>
          )}



          {step === 3 && (
            <div>

              <h2 className="text-2xl font-bold mb-5">
                Ready To Generate
              </h2>

              <p className="text-gray-400">
                Your AI blueprint will be created.
              </p>

            </div>
          )}



          <div className="mt-8 flex gap-4">

            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="rounded-xl border border-white/20 px-6 py-3"
              >
                Back
              </button>
            )}


            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
              >
                Continue
              </button>
            ) : (

              <button
                onClick={() => navigate("/chat")}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
              >
                Start AI Chat
              </button>

            )}

          </div>


        </div>

      </main>

    </div>
  );
}

export default CreateProject;