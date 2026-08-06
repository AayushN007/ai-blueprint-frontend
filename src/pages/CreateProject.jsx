import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Sparkles, Check, ArrowRight, ArrowLeft, Loader as Loader2 } from "lucide-react";
import { createProject } from "../services/api";
import { useToast } from "../components/Toast";

function CreateProject() {
  const navigate = useNavigate();
  const toast = useToast();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [project, setProject] = useState({
    name: "",
    domain: "Education",
    description: "",
  });

  const steps = ["Project Details", "AI Understanding", "Generate Blueprint"];

  function validateStep1() {
    const errs = {};
    if (!project.name.trim()) errs.name = "Project name is required";
    if (!project.description.trim())
      errs.description = "Please describe your AI problem";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function nextStep() {
    if (step === 1 && !validateStep1()) return;
    setStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleCreateProject() {
    if (!validateStep1()) {
      setStep(1);
      return;
    }
    setSubmitting(true);
    try {
      await createProject(project);
      toast.success("Project created! Starting AI chat...");
      navigate("/chat");
    } catch (error) {
      toast.error("Couldn't create project. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold lg:text-4xl">Create AI Project</h1>
          <p className="mt-2 text-gray-400">
            Provide details and let AI design your ML workflow.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-10 flex flex-wrap gap-3">
          {steps.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${
                step === index + 1
                  ? "bg-cyan-500 text-black"
                  : step > index + 1
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              {step > index + 1 ? <Check size={16} /> : index + 1}
              {item}
            </div>
          ))}
        </div>

        <div className="max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8">
          {step === 1 && (
            <>
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <Sparkles className="text-cyan-400" />
                Project Information
              </h2>

              <label className="mb-1.5 block text-sm text-gray-400">
                Project Name
              </label>
              <input
                placeholder="e.g. Student Performance Prediction"
                value={project.name}
                onChange={(e) =>
                  setProject({ ...project, name: e.target.value })
                }
                className={`mb-1 w-full rounded-xl bg-slate-900 p-4 outline-none transition ${
                  errors.name ? "border border-red-500/50" : "border border-white/10"
                } focus:border-cyan-400/50`}
              />
              {errors.name && (
                <p className="mb-4 text-sm text-red-400">{errors.name}</p>
              )}

              <label className="mb-1.5 mt-4 block text-sm text-gray-400">
                Domain
              </label>
              <select
                value={project.domain}
                onChange={(e) =>
                  setProject({ ...project, domain: e.target.value })
                }
                className="mb-5 w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none transition focus:border-cyan-400/50"
              >
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Education</option>
                <option>Agriculture</option>
                <option>Retail</option>
              </select>

              <label className="mb-1.5 block text-sm text-gray-400">
                Problem Description
              </label>
              <textarea
                rows="5"
                placeholder="Describe your AI problem..."
                value={project.description}
                onChange={(e) =>
                  setProject({ ...project, description: e.target.value })
                }
                className={`w-full rounded-xl bg-slate-900 p-4 outline-none transition ${
                  errors.description
                    ? "border border-red-500/50"
                    : "border border-white/10"
                } focus:border-cyan-400/50`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-400">{errors.description}</p>
              )}
            </>
          )}

          {step === 2 && (
            <div>
              <h2 className="mb-5 text-2xl font-bold">AI Requirements</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  AI agents will analyze your project:{" "}
                  <span className="font-semibold text-white">
                    {project.name || "Untitled"}
                  </span>
                </p>
                <div className="rounded-xl bg-slate-900/50 p-4">
                  <p className="text-sm text-gray-400">Domain</p>
                  <p className="mt-1 font-medium">{project.domain}</p>
                </div>
                <div className="rounded-xl bg-slate-900/50 p-4">
                  <p className="text-sm text-gray-400">Description</p>
                  <p className="mt-1 font-medium">
                    {project.description || "—"}
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  The following agents will process your request: Dataset
                  Discovery, Model Recommendation, Experiment Planner, and
                  Responsible AI Checker.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Sparkles size={40} />
              </div>
              <h2 className="mb-3 text-2xl font-bold">Ready To Generate</h2>
              <p className="mx-auto max-w-md text-gray-400">
                Your project will be sent to the AI Blueprint engine. You'll be
                taken to a chat where you can refine the blueprint with AI.
              </p>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            {step > 1 && (
              <button
                onClick={prevStep}
                disabled={submitting}
                className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/5 disabled:opacity-50"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleCreateProject}
                disabled={submitting}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    Start AI Chat
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateProject;
