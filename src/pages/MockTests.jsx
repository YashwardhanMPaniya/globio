import { useState } from "react";

const recentTests = [
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
    isNew: true,
  },
  {
    title: "A1 Mock Test 2 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
    isNew: false,
  },
  {
    title: "A1 Mock Test 4 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
    isNew: false,
  },
];

const testLibrary = [
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
  {
    title: "A1 Mock Test 1 – 2025",
    subtitle: "50 Questions | 60 mins | 100 marks",
  },
];

const tabs = ["Full Length", "Reading", "Listening", "Speaking", "Writing"];

// const TestCard = ({ title, subtitle, isNew, actionLabel }) => (
//   <div className="bg-gradient-to-br from-[#3B4EFF] to-[#1B2B8A] rounded-xl shadow hover:shadow-lg transition p-5 w-full max-w-xs min-w-[220px] mx-auto relative">
//     {isNew && (
//       <span className="absolute top-3 right-3 bg-white text-[#3B4EFF] text-xs font-bold px-2 py-0.5 rounded-full shadow">
//         NEW
//       </span>
//     )}
//     <div className="text-white font-bold text-lg mb-2">{title}</div>
//     <div className="text-white text-xs opacity-80 mb-6">{subtitle}</div>
//     <button className="w-full bg-white text-[#3B4EFF] font-semibold rounded-lg py-2 text-sm hover:bg-[#F5F7FA] transition">
//       {actionLabel}
//     </button>
//   </div>
// );

// const TestCard = ({ title, subtitle, isNew, actionLabel }) => (
//   <div className="relative bg-gradient-to-br from-[#3B4EFF] to-[#1B2B8A] rounded-2xl shadow-lg hover:shadow-xl transition w-full max-w-xs min-w-[220px] mx-auto flex flex-col justify-between h-56 p-0">
//     {isNew && (
//       <span className="absolute top-4 right-4 bg-white text-[#3B4EFF] text-xs font-bold px-2 py-0.5 rounded-full shadow z-10">
//         NEW
//       </span>
//     )}
//     <div className="flex flex-col h-full px-6 pt-8 pb-4">
//       <div className="text-white font-bold text-base mb-2">{title}</div>
//       <div className="flex items-center text-xs text-white opacity-90 mb-6 gap-3">
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="10" />
//             <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">Q</text>
//           </svg>
//           50 Questions
//         </span>
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="10" />
//             <path d="M12 6v6l4 2" />
//           </svg>
//           60 mins
//         </span>
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <rect x="4" y="4" width="16" height="16" rx="2" />
//           </svg>
//           100 marks
//         </span>
//       </div>
//       <button className="mt-auto w-full bg-white text-[#3B4EFF] font-bold rounded-lg py-2 text-sm hover:bg-[#F5F7FA] transition shadow">
//         {actionLabel}
//       </button>
//     </div>
//   </div>
// );

// const TestCard = ({ title, isNew, actionLabel }) => (
//   <div className="rounded-2xl shadow-lg hover:shadow-xl transition w-full max-w-xs min-w-[260px] mx-auto bg-white border border-gray-100 overflow-hidden relative flex flex-col">
//     {/* Top Blue Section */}
//     <div className="bg-gradient-to-br from-[#3B4EFF] to-[#1B2B8A] px-6 pt-6 pb-4">
//       <div className="text-white font-bold text-lg mb-4">{title}</div>
//       <div className="flex items-center gap-2">
//         <span className="bg-[#2F3CCF] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium shadow">
//           <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
//           </svg>
//           8K+ Learners
//         </span>
//       </div>
//       {isNew && (
//         <span className="absolute top-4 right-4 bg-white text-[#3B4EFF] text-xs font-bold px-2 py-0.5 rounded-full shadow z-10">
//           NEW
//         </span>
//       )}
//     </div>
//     {/* Bottom White Section */}
//     <div className="bg-white px-6 pt-4 pb-6 flex flex-col flex-1">
//       <div className="font-semibold text-[#222] mb-2 text-base flex items-center">
//         <span className="border-l-4 border-[#3B4EFF] mr-2 h-5"></span>
//         {title}
//       </div>
//       <div className="flex items-center text-xs text-gray-400 gap-4 mb-5">
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <rect x="3" y="4" width="18" height="16" rx="2" />
//             <path d="M16 2v4" />
//             <path d="M8 2v4" />
//           </svg>
//           50 Questions
//         </span>
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="10" />
//             <path d="M12 6v6l4 2" />
//           </svg>
//           60 mins
//         </span>
//         <span className="flex items-center gap-1">
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <rect x="4" y="4" width="16" height="16" rx="2" />
//           </svg>
//           100 marks
//         </span>
//       </div>
//       <button className="w-full bg-[#3B4EFF] text-white font-bold rounded-lg py-2 text-sm hover:bg-[#2F3CCF] transition shadow">
//         {actionLabel}
//       </button>
//     </div>
//   </div>
// );

const TestCard = ({
  title,
  isNew,
  actionLabel,
  tab,
  subtitle = "15 Questions | 20 mins | 25 marks",
  learners = "8K+ Learners",
}) => (
  <div className="rounded-2xl shadow-lg hover:shadow-xl transition w-full max-w-xs min-w-[260px] mx-auto bg-white border border-gray-100 overflow-hidden relative flex flex-col">
    {/* Top Dark Blue Section with Triangle */}
    <div className="relative bg-gradient-to-br from-[#232ED1] to-[#1B2B8A] px-6 pt-8 pb-6">
      {/* Triangle shape */}
      <svg
        className="absolute top-0 right-0 w-32 h-20"
        viewBox="0 0 128 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <polygon points="128,0 128,80 48,0" fill="#3B4EFF" opacity="0.25" />
      </svg>
      <div className="relative z-10 text-white font-bold text-xl mb-6">{title}</div>
      <span className="relative z-10 bg-[#232ED1] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium shadow">
        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
        </svg>
        {learners}
      </span>
      {isNew && (
        <span className="absolute top-4 right-4 bg-white text-[#232ED1] text-xs font-bold px-2 py-0.5 rounded-full shadow z-20">
          NEW
        </span>
      )}
    </div>
    {/* Bottom White Section */}
    <div className="bg-white px-6 pt-4 pb-6 flex flex-col flex-1">
      <div className="font-semibold text-[#222] mb-2 text-base flex items-center justify-between">
        <span className="flex items-center">
          <span className="border-l-4 border-[#232ED1] mr-2 h-5"></span>
          {title}
        </span>
        {tab && (
          <span className="ml-2 px-3 py-1 border border-[#232ED1] text-[#232ED1] rounded-lg text-xs font-semibold bg-white">
            {tab}
          </span>
        )}
      </div>
      <div className="flex items-center text-xs text-gray-400 gap-4 mb-5">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
          </svg>
          {subtitle.split("|")[0].trim()}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {subtitle.split("|")[1].trim()}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          {subtitle.split("|")[2].trim()}
        </span>
      </div>
      <button className="w-full bg-[#232ED1] text-white font-bold rounded-lg py-2 text-sm hover:bg-[#1B2B8A] transition shadow">
        {actionLabel}
      </button>
    </div>
  </div>
);

const MockTests = () => {
  const [activeTab, setActiveTab] = useState("Full Length");

  return (
    <div className="p-8 bg-[#F5F7FA] min-h-screen">
      {/* <div className="font-semibold text-xl text-gray-800 mb-6">Test Series Section</div> */}
      {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div></div>
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search for exams"
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B4EFF] text-sm w-full bg-[#F5F7FA]"
          />
          <span className="absolute right-3 top-2.5 text-[#3B4EFF]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </span>
        </div>
      </div> */}

      {/* Recent Tests */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#F5F7FA] text-[#3B4EFF] rounded-full p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-800">Your Recent Tests</div>
            <div className="text-xs text-gray-500">Check out the tests you’ve taken so far</div>
          </div>
          <div className="ml-auto">
            <button className="bg-[#F5F7FA] text-gray-700 text-xs px-3 py-1 rounded-lg border border-gray-200 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
              Today
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-4 overflow-x-auto pb-2">
          {recentTests.map((test, idx) => (
            <TestCard key={idx} {...test} actionLabel="Review Test" />
          ))}
        </div>
      </div>

      {/* Test Library */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#F5F7FA] text-[#3B4EFF] rounded-full p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-800">Test Library</div>
            <div className="text-xs text-gray-500">Access all available mock tests in one place</div>
          </div>
          <div className="ml-auto">
            <button className="bg-[#F5F7FA] text-gray-700 text-xs px-3 py-1 rounded-lg border border-gray-200 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
              January
            </button>
          </div>
        </div>
        <div className="flex gap-4 border-b border-gray-200 mt-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-semibold border-b-2 transition ${
                activeTab === tab
                  ? "border-[#3B4EFF] text-[#3B4EFF] bg-[#F5F7FA]"
                  : "border-transparent text-gray-600 hover:bg-[#F5F7FA]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testLibrary.map((test, idx) => (
            <TestCard key={idx} {...test} actionLabel="Take Test" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTests;