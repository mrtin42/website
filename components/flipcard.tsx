import { useState } from 'react';
import styles from '@/styles/FlipCard.module.css';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>{frontContent}</div>
        <div className={styles.flipCardBack}>{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
