import TutorialCard from './TutorialCard';

const TutorialGrid = ({onCardClick}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <TutorialCard key={i} onClick={() => onCardClick(i)} />
    ))}
  </div>
);

export default TutorialGrid;