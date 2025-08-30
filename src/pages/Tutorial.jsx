import { useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import SectionHeader from '../components/SectionHeader';
import TutorialGrid from '../components/TutorialGrid';
import TutorialVideoModal from '../components/TutorialVideoModal';

const Tutorial = () => {
  const [activeFilter, setActiveFilter] = useState("Mock Test");
  const [showVideo, setShowVideo] = useState(false);

  // Example video data
  const videoTitle = "Mock Test I: A Detailed Step-by-Step Walkthrough";
  const videoUrl = "https://www.youtube.com/embed/oqJwR6qOipY";
  const thumbnail = "https://randomuser.me/api/portraits/men/32.jpg";

  return (
    <div className="p-8 bg-[#F5F7FA] min-h-screen">
      <TutorialVideoModal
        open={showVideo}
        onClose={() => setShowVideo(false)}
        title={videoTitle}
        videoUrl={videoUrl}
        thumbnail={thumbnail}
      />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <FilterButtons active={activeFilter} setActive={setActiveFilter} />
      </div>
      <div className="bg-white rounded-2xl shadow p-8 mb-8">
        <SectionHeader
          icon={
            <div className="bg-[#F5F7FA] text-[#3B4EFF] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
            </div>
          }
          title="Test Tutorials Vault"
          description="Comprehensive video lessons to boost your understanding."
        />
        <div className="mt-8">
          <SectionHeader title="Mock Test Tutorial" />
          <TutorialGrid onCardClick={() => setShowVideo(true)} />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;