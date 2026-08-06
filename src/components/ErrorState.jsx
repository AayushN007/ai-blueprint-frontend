import { CircleAlert as AlertCircle, RefreshCw } from "lucide-react";

function ErrorState({ title = "Something went wrong", description, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-20 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
        <AlertCircle size={32} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-gray-400">{description}</p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
        >
          <RefreshCw size={16} />
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
