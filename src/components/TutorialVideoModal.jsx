const TutorialVideoModal = ({ open, onClose, title, videoUrl, thumbnail }) => {
  if (!open) return null;
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 p-6 relative">
        <button
          className="absolute top-4 right-4 text-[#232ED1] hover:bg-gray-100 rounded-full p-2 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="font-semibold text-base mb-4 flex items-center gap-2">
          <span className="border-l-4 border-[#232ED1] h-5 mr-2"></span>
          {title}
        </div>
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center">
          {videoUrl ? (
            <iframe
              className="w-full h-full rounded-xl"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialVideoModal;