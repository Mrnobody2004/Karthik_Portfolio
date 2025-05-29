import { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className = '' }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flip-card ${className} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;