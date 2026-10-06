import React from "react";
import { useDsa } from "../hooks/useDsaHook";


const DsaPage = () => {
  const {
    categories,
    search,
    complete,setComplete,
    setSearch,
    handleChange,
    category,
    setCategory,
    filteredQuestions,
  } = useDsa();






  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            DSA Questions
          </h1>

          <p className="mt-2 text-gray-500">
            Practice important DSA questions and improve your problem-solving
            skills.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row">

          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search question..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 capitalize outline-none focus:border-black sm:w-48"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Question Count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredQuestions.length} questions found
          </p>
        </div>

        {/* Questions */}
        {filteredQuestions.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {filteredQuestions.map((question, index) => (
              <div
                key={question.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Top */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-600">
                      {index + 1}
                    </span>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {question.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {question.topic}
                      </p>
                    </div>
                  </div>

                  {/* Difficulty */}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      question.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : question.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-600">
                  {question.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm text-gray-400">
                    DSA
                  </span>

                  <label className="flex items-center gap-2">
  <input  name="check"  checked={complete?.includes(question.id)} onChange={()=>handleChange(question.id)} 
    type="checkbox" />
  <span>Completed</span>
</label>
                </div>
              </div>
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              🔍
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              No questions found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different keyword or difficulty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DsaPage;

