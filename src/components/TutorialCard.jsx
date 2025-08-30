const TutorialCard = ({onClick}) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden border border-gray-100 relative group" onClick={onClick}>
    <div className="relative">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmM3IhQ-eYVec0paD-6ooltlj3l87HexBC9Q&s" alt="Thumbnail" className="w-full h-40 object-cover" />
      <button className="absolute inset-0 flex items-center justify-center">
        <span className="bg-[#232ED1] rounded-full p-3 shadow transition group-hover:bg-white group-hover:bg-opacity-80">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
          >
            <polygon
              points="9.5,7.5 16.5,12 9.5,16.5"
              fill="#fff"
              className="group-hover:fill-[#232ED1] transition"
            />
          </svg>
        </span>
      </button>
      <button className="absolute top-3 right-3">
        <svg className="w-5 h-5 text-[#3B4EFF] fill-[#3B4EFF] bg-white rounded-full p-1 shadow" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
        <span>
          <svg className="inline w-4 h-4 mr-1 text-[#3B4EFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          4.8K Liked
        </span>
        <span>·</span>
        <span>
          <svg className="inline w-4 h-4 mr-1 text-[#3B4EFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          1h 26m
        </span>
      </div>
      <div className="font-semibold text-gray-800 mb-1 text-base leading-tight">Mock Test I: A Detailed Step-by-Step Walkthrough</div>
      <div className="text-xs text-gray-500">Loksh Sinha</div>
    </div>
  </div>
);

export default TutorialCard;