import React, { useState } from "react";
import { useCoding } from "../hooks/useCodingHook";

const CodingPage = () => {
  const { search, setCategory, setSearch, category, filteredQuestion,categories ,difficulties,difficulty,handleChange,setDifficulty,completed} =
    useCoding();
  








  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        {/* Header */}{" "}
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-gray-900">
            {" "}
            Coding Questions{" "}
          </h1>{" "}
          <p className="mt-2 text-gray-500">
            {" "}
            Practice real-world coding and machine coding problems.{" "}
          </p>{" "}
        </div>{" "}
        {/* Search & Filters */}{" "}
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-sm md:grid-cols-3">
          {" "}
          {/* Search */}{" "}
          <input
            type="text"
            placeholder="Search coding question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
          />{" "}
          {/* Difficulty */}{" "}
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 capitalize outline-none focus:border-black"
          >
            {" "}
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {" "}
                {item === "all" ? "All Difficulty" : item}{" "}
              </option>
            ))}{" "}
          </select>{" "}
          {/* Category */}{" "}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
          >
            {" "}
            {categories.map((item) => (
              <option key={item} value={item}>
                {" "}
                {item === "all" ? "All Categories" : item}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        {/* Result Count */}{" "}
        <div className="mb-5">
          {" "}
          <p className="text-sm text-gray-500">
            {" "}
            {filteredQuestion.length} coding questions found{" "}
          </p>{" "}
        </div>{" "}
        {/* Questions */}{" "}
        {filteredQuestion.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {" "}
            {filteredQuestion.map((question, index) => (
              <div
                key={question.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {" "}
                {/* Top */}{" "}
                <div className="mb-4 flex items-start justify-between gap-4">
                  {" "}
                  <div className="flex gap-3">
                    {" "}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-600">
                      {" "}
                      {index + 1}{" "}
                    </span>{" "}
                    <div>
                      {" "}
                      <h2 className="text-lg font-semibold text-gray-900">
                        {" "}
                        {question.title}{" "}
                      </h2>{" "}
                      <span className="mt-2 inline-block rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {" "}
                        {question.category}{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Difficulty */}{" "}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${question.difficulty === "Easy" ? "bg-green-100 text-green-700" : question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}
                  >
                    {" "}
                    {question.difficulty}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Description */}{" "}
                <p className="mb-6 text-sm leading-6 text-gray-600">
                  {" "}
                  {question.description}{" "}
                </p>{" "}
                {/* Footer */}{" "}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  {" "}
                  <span className="text-sm text-gray-400">
                    {" "}
                    Machine Coding{" "}
                  </span>{" "}
                  <div className="flex gap-2 iteme-center ">
                    <input checked={completed?.includes(question.id)} onChange={()=>handleChange(question.id)} type="checkbox" />
                  <span>completed</span></div>
                </div>{" "}
              </div>
            ))}{" "}
          </div>
        ) : (
          /* Empty State */ <div className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
            {" "}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
              {" "}
              🔍{" "}
            </div>{" "}
            <h2 className="text-xl font-semibold text-gray-900">
              {" "}
              No coding questions found{" "}
            </h2>{" "}
            <p className="mt-2 text-sm text-gray-500">
              {" "}
              Try changing your search or filters.{" "}
            </p>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default CodingPage;
