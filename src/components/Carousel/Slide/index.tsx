import React from 'react';

import Arrow from '../Arrow';

import { STATIC_CAROUSEL_DATA } from '../../../utils/constants';

import truck from '../../../assets/truck.svg';
import img1 from '../../../assets/img1.png';

import {
  Container,
  InfoContent,
  CurrentIcon,
  CurrentSlideInfo,
  SlideDataContent,
  ArrowContent,
} from './styles';

interface SlideProps {
  activeSlide: number;
  GoToNextSlide(): void;
  GoToPrevSlide(): void;
}

const Slide: React.FC<SlideProps> = ({
  activeSlide,
  GoToNextSlide,
  GoToPrevSlide,
}) => {
  return (
    <Container>
      <SlideDataContent>
        {STATIC_CAROUSEL_DATA.map((item, index) => (
          <div className={activeSlide === index ? 'active' : 'inactive'}>
            <InfoContent>
              <CurrentIcon>
                <img src={item.icon} alt="icon" />
              </CurrentIcon>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <footer>
                <CurrentSlideInfo isActive={activeSlide === 0} />
                <CurrentSlideInfo isActive={activeSlide === 1} />
                <CurrentSlideInfo isActive={activeSlide === 2} />
              </footer>
            </InfoContent>

            <img src={item.image} alt="img" className="image-bg" />
          </div>
        ))}
      </SlideDataContent>

      <ArrowContent>
        <Arrow side="left" onArrowClick={GoToPrevSlide} />
        <Arrow side="right" onArrowClick={GoToNextSlide} />
      </ArrowContent>
    </Container>
  );
};

export default Slide;
