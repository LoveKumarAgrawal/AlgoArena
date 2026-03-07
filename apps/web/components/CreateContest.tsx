"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  hidden: boolean;
}

interface CreateContestProps {
  problems: Problem[];
}

const difficultyColors: Record<string, string> = {
  EASY: "text-green-500",
  MEDIUM: "text-yellow-500",
  HARD: "text-red-500",
};

export function CreateContest({ problems }: CreateContestProps) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hidden, setHidden] = useState(false);
  const [selectedProblemIds, setSelectedProblemIds] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const toggleProblem = (id: string) => {
    setSelectedProblemIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const selectAll = () => {
    setSelectedProblemIds(problems.map((p) => p.id));
  };

  const clearAll = () => {
    setSelectedProblemIds([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedProblemIds.length === 0) {
      toast.error("Please select at least one problem.");
      return;
    }

    if (new Date(endTime) <= new Date(startTime)) {
      toast.error("End time must be after start time.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          startTime: new Date(startTime).toISOString(),
          endTime: new Date(endTime).toISOString(),
          hidden,
          problemIds: selectedProblemIds,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to create contest.");
        return;
      }

      toast.success("Contest created successfully!");
      router.push(`/contest/${data.contest.id}`);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Create New Contest
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Contest Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              minLength={3}
              placeholder="e.g. AlgoArena Round #1"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              minLength={10}
              rows={4}
              placeholder="Describe the contest rules, format, etc."
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          </div>

          {/* Start / End Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                End Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Hidden toggle */}
          <div className="flex items-center gap-3">
            <input
              id="hidden"
              type="checkbox"
              checked={hidden}
              onChange={(e) => setHidden(e.target.checked)}
              className="w-4 h-4 accent-blue-600"
            />
            <label htmlFor="hidden" className="text-sm text-gray-300">
              Keep contest hidden (won&apos;t show on public contests page)
            </label>
          </div>

          {/* Problem selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Select Problems{" "}
                <span className="text-red-500">*</span>{" "}
                <span className="text-gray-500 font-normal">
                  ({selectedProblemIds.length} selected)
                </span>
              </label>
              <div className="flex gap-3 text-sm">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-blue-400 hover:underline"
                >
                  Select all
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-gray-400 hover:underline"
                >
                  Clear
                </button>
              </div>
            </div>

            {problems.length === 0 ? (
              <p className="text-gray-500 text-sm">
                No problems available. Add problems first.
              </p>
            ) : (
              <div className="border border-gray-700 rounded-lg divide-y divide-gray-700 max-h-72 overflow-y-auto">
                {problems.map((problem) => (
                  <label
                    key={problem.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-800 transition-colors ${
                      selectedProblemIds.includes(problem.id)
                        ? "bg-gray-800"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedProblemIds.includes(problem.id)}
                      onChange={() => toggleProblem(problem.id)}
                      className="w-4 h-4 accent-blue-600 flex-shrink-0"
                    />
                    <div className="flex items-center justify-between w-full min-w-0">
                      <div className="flex flex-col min-w-0">
                        <span className="text-white font-medium truncate">
                          {problem.title}
                        </span>
                        <span className="text-gray-500 text-xs truncate">
                          {problem.slug}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                        <span
                          className={`text-xs font-semibold ${difficultyColors[problem.difficulty]}`}
                        >
                          {problem.difficulty}
                        </span>
                        {problem.hidden && (
                          <span className="text-xs text-gray-500 bg-gray-700 px-1.5 py-0.5 rounded">
                            hidden
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              {submitting ? "Creating..." : "Create Contest"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
