import codingQuestions from "../data/codingQuestion";
import dsaQuestions from "../data/dsaQuestion";
import interviewQuestions from "../data/interviewQuestion";
import { useDashBoard } from "../hooks/useDashBoardHook";

const DashBoardPage = () => {
 
  const {dsaCompleted,codingCompleted,interviewCompleted,recentlyCodingQuestion}=useDashBoard()  


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Track your preparation and see your progress.
          </p>
        </div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

           <div
              
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">
               Dsa
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                {dsaCompleted.length}/{dsaQuestions.length}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Completed
              </p>
            </div>
              <div
             
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">
                Coding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                {codingCompleted.length}/{codingQuestions.length}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Completed
              </p>
            </div>
              <div
              
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">
                Interview
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                {interviewCompleted.length}/{interviewQuestions.length}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
               Completed
              </p>
            </div>

        </div>


        {/* Progress Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* DSA Progress */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  DSA Progress
                </h2>

                <p className="mt-1 text-sm text-gray-500">
              {dsaCompleted.length} of {dsaQuestions.length}
                </p>
              </div>

              <span className="font-semibold text-blue-600">
               {(dsaCompleted?.length/dsaQuestions?.length)*100}%
              </span>
            </div>

            <div className="mt-5 h-3 w-full rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{ width:  `${(dsaCompleted?.length / dsaQuestions?.length) * 100}%` }}
              />
            </div>

            <a
              href="/dsa"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              View DSA Problems →
            </a>

          </div>


          {/* Interview Progress */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Interview Progress
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {interviewCompleted.length} of {interviewQuestions.length}
                </p>
              </div>

              <span className="font-semibold text-green-600">
               {(interviewCompleted?.length/interviewQuestions?.length)*100}%
              </span>
            </div>

            <div className="mt-5 h-3 w-full rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-green-600"
                style={{ width:`${(interviewCompleted?.length/interviewQuestions?.length)*100}%` }}
              />
            </div>

            <a
              href="/interview"
              className="mt-5 inline-block text-sm font-semibold text-green-600 hover:underline"
            >
              View Interview Questions →
            </a>

          </div>

        </div>


        {/* Machine Coding */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Machine Coding
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Track your machine-coding tasks.
              </p>
            </div>

            <a
              href="/coding"
              className="w-fit rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              View Tasks
            </a>

          </div>


          {/* Status */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-green-700">
                Completed
              </p>

              <p className="mt-1 text-2xl font-bold text-green-800">
                {codingCompleted.length}
              </p>
            </div>


            {/* <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-700">
                In Progress
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-800">
                2
              </p>
            </div> */}


            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">
                Not Started
              </p>

              <p className="mt-1 text-2xl font-bold text-gray-800">
               {codingQuestions.length-codingCompleted.length}
              </p>
            </div>

          </div>

        </div>


        {/* Recent Activity */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="border-b border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>

          <div className="divide-y divide-gray-100">

            {
              recentlyCodingQuestion?.map((item)=>{
                return <div key={item.id} className="flex items-center justify-between p-5">
              <div>
                <p className="font-medium text-gray-900">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                 {item.topic}
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Completed
              </span>
            </div>
              })
            }

          </div>

        </div>

      </div>
    </div>
  );
};

export default DashBoardPage;

