import React from "react";
import { useInterview } from "../hooks/useInterviewHook";

const InterviewPage = () => {
const {search,setSearch,difficulties,categories,category,setCategory,filteredQuestions,difficulty,setDifficulty,
  handleChance,completed
}=useInterview()


  return (
<div className="min-h-screen bg-white px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mb-8">
      <p className="mb-2 text-lg font-medium text-blue-600">
        Interview Preparation
      </p>

      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        Full Stack Interview Questions
      </h1>

      <p className="mt-3 max-w-2xl text-slate-600">
        Practice important JavaScript, React, Node.js, Express, MongoDB and
        authentication interview questions.
      </p>
    </div>

    {/* Filters */}
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Search
          </label>

          <input
            type="text"
            placeholder="Search interview question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Topic */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Topic
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All Topics" : item}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>

    {/* Result Count */}
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-slate-900">
        Interview Questions
      </h2>

      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
        {filteredQuestions.length} Questions
      </span>
    </div>

    {/* Questions */}
    {filteredQuestions.length > 0 ? (
      <div className="grid gap-5 md:grid-cols-2">

        {filteredQuestions.map((question, index) => (
          <div
            key={question.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >

            {/* Top */}
            <div className="mb-4 flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {question.topic}
                </span>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  question.difficulty === "Easy"
                    ? "bg-green-50 text-green-600"
                    : question.difficulty === "Medium"
                    ? "bg-yellow-50 text-yellow-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {question.difficulty}
              </span>

            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {question.title}
            </h3>

            {/* Question */}
            <p className="mb-6 leading-7 text-slate-600">
              {question.question}
            </p>

            {/* Completed */}
            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={completed?.includes(question.id)}
                onChange={() => handleChance(question.id)}
                className="h-5 w-5 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />

              <span className="text-sm font-medium text-slate-700">
                Completed
              </span>

            </div>

          </div>
        ))}

      </div>
    ) : (

      /* Empty State */
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">

        <div className="mb-4 text-5xl">
          🔍
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          No questions found
        </h3>

        <p className="mt-2 text-slate-500">
          Try changing your search or filters.
        </p>

        <button
          onClick={() => {
            setSearch("");
            setDifficulty("all");
            setCategory("all");
          }}
          className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Clear Filters
        </button>

      </div>

    )}

  </div>
</div>


  );
};

export default InterviewPage;
