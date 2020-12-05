import React, { useState, useEffect, useCallback } from 'react';

import { STATIC_CAROUSEL_DATA } from '../../utils/constants';

import Slide from './Slide';

import { Container } from './styles';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataLength, setDatalength] = useState(0);

  useEffect(() => {
    setDatalength(STATIC_CAROUSEL_DATA.length);
  }, []);

  const HandleGoToNextSlide = useCallback(() => {
    if (activeIndex === dataLength - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }, [dataLength, activeIndex]);

  const HandleGoToPrevSlide = useCallback(() => {
    if (activeIndex < 1) {
      setActiveIndex(dataLength - 1);
    } else {
      setActiveIndex(state => state - 1);
    }
  }, [dataLength, activeIndex]);

  return (
    <Container>
      <Slide
        activeSlide={activeIndex}
        GoToNextSlide={HandleGoToNextSlide}
        GoToPrevSlide={HandleGoToPrevSlide}
      />
    </Container>
  );
};

export default Carousel;
