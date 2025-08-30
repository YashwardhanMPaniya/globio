// import { NavLink } from 'react-router-dom';
// import UserProfile from './UserProfile';

// const Sidebar = () => (
//   <aside className="fixed left-0 top-0 w-64 h-screen bg-white flex flex-col justify-between border-r z-30">
//     <div>
//       <div className="px-6 pt-8 pb-2 font-bold text-xl text-[#3B4EFF]">Globio</div>
//       <div className="px-6 mt-6 text-xs text-gray-400 font-semibold">LEVEL</div>
//       <select className="mx-6 mt-2 mb-6 w-[85%] px-3 py-2 rounded-lg border border-gray-200 text-sm bg-[#F5F7FA] font-medium text-[#3B4EFF] focus:outline-none">
//         <option>Beginner Level – A1</option>
//         <option>Elementary – A2</option>
//         <option>Intermediate – B1</option>
//         <option>Upper Intermediate – B2</option>
//         <option>Advanced – C1</option>
//         <option>Proficient – C2</option>
//       </select>
//       <div className="px-6 text-xs text-gray-400 font-semibold mb-2">MAIN MENU</div>
//       <nav className="flex flex-col gap-1">
//         <NavLink to="/" className={({isActive}) => `px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${isActive ? 'bg-[#F5F7FA] text-[#3B4EFF]' : 'text-gray-700'}`}>Dashboard</NavLink>
//         <NavLink to="/tutorial" className={({isActive}) => `px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${isActive ? 'bg-[#F5F7FA] text-[#3B4EFF]' : 'text-gray-700'}`}>Tutorial</NavLink>
//         <NavLink to="/mock-tests" className={({isActive}) => `px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${isActive ? 'bg-[#F5F7FA] text-[#3B4EFF]' : 'text-gray-700'}`}>Mock Tests</NavLink>
//       </nav>
//     </div>
//     <UserProfile />
//   </aside>
// );

// export default Sidebar;

import { NavLink } from 'react-router-dom';
import UserProfile from './UserProfile';

const Sidebar = () => (
  <aside className="fixed left-0 top-0 w-64 h-screen bg-white flex flex-col justify-between border-r border-gray-200 z-30">
    <div>
      <div
        className="px-6 pt-2 pb-2 font-extrabold text-2xl text-[#232ED1] tracking-tight"
        style={{ fontFamily: 'system-ui, Arial, sans-serif' }}
      >
        Globio
      </div>
      <hr className="border-gray-300 my-2 " />
      <div className="px-6 mt-6 text-xs text-gray-400 font-semibold">LEVEL</div>
      <select
        className="mx-6 mt-2 mb-6 w-[85%] px-3 py-2 rounded-lg bg-[#232ED1] text-white font-semibold text-sm focus:outline-none shadow font-[Poppins]"
        style={{ appearance: 'none', fontFamily: 'Poppins, Arial, sans-serif' }}
        defaultValue="Beginner Level – A1"
      >
        <option>Beginner Level – A1</option>
        <option>Elementary – A2</option>
        <option>Intermediate – B1</option>
        <option>Upper Intermediate – B2</option>
        <option>Advanced – C1</option>
        <option>Proficient – C2</option>
      </select>
      <div className="px-6 text-xs text-gray-400 font-semibold mb-2">MAIN MENU</div>
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${
              isActive ? 'bg-[#F5F7FA] text-[#222] font-semibold' : 'text-gray-700'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1.5" className="stroke-current" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" className="stroke-current" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" className="stroke-current" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" className="stroke-current" />
          </svg>
          Dashboard
        </NavLink>
        <NavLink
          to="/tutorial"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${
              isActive ? 'bg-[#F5F7FA] text-[#222] font-semibold' : 'text-gray-700'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15h8M8 11h8M8 7h8" />
          </svg>
          Tutorial
        </NavLink>
        <NavLink
          to="/mock-tests"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#F5F7FA] transition ${
              isActive ? 'bg-[#F5F7FA] text-[#222] font-semibold' : 'text-gray-700'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 2v4M16 2v4" />
          </svg>
          Mock Tests
        </NavLink>
      </nav>
    </div>
    <UserProfile />
  </aside>
);

export default Sidebar;