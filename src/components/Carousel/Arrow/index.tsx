import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, ArrowButton } from './styles';

interface ArrowProps {
  side: 'left' | 'right';
  onArrowClick(): void;
}

const Arrow: React.FC<ArrowProps> = ({ side, onArrowClick }) => {
  return (
    <Container>
      <ArrowButton onClick={onArrowClick}>
        {side === 'left' && <FiChevronLeft color="#fff" size={34} />}

        {side === 'right' && <FiChevronRight color="#fff" size={34} />}
      </ArrowButton>
    </Container>
  );
};

export default Arrow;
