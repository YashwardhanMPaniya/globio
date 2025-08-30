const filters = [
  "All Section", "Mock Test", "Reading", "Listening", "Writing", "Speaking", "Vocabulary"
];

const FilterButtons = ({active, setActive}) => (
  <div className="flex flex-wrap gap-2">
    {filters.map(f => (
      <button
        key={f}
        onClick={() => setActive(f)}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
          active === f
            ? 'bg-[#232ED1] text-white '
            : 'bg-white text-gray-700 border-gray-200 hover:bg-[#F5F7FA]'
        }`}
      >
        {f}
      </button>
    ))}
  </div>
);

export default FilterButtons;