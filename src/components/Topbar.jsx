const Topbar = ({ title, searchPlaceholder }) => {
  if (!title) return null; // Hide Topbar if no title is provided

  return (
<header className="flex items-center justify-between px-8 py-4 bg-[#F5F7FA] border-b border-gray-200">      <div className="font-semibold text-sm text-[#111827]">{title}</div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full px-5 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232ED1] text-sm bg-white shadow"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#232ED1] rounded-full p-2 flex items-center justify-center shadow hover:bg-[#1a1f91] transition">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <button className="bg-white p-2 rounded-lg border border-[#232ED1] relative">
          <svg className="w-5 h-5 text-[#232ED1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded-lg border border-[#232ED1] relative">
          <svg className="w-5 h-5 text-[#232ED1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded-lg border border-[#232ED1] relative">
          <svg className="w-5 h-5 text-[#232ED1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8l-4 4-4-4" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;