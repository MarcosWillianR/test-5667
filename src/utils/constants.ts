import img1 from '../assets/img1.png';
import truck from '../assets/truck.svg';

import img2 from '../assets/img2.png';

import img3 from '../assets/img3.png';
import maps from '../assets/maps.svg';

export const STATIC_CAROUSEL_DATA = [
  {
    id: Math.floor(Math.random() * 1000),
    icon: truck,
    title: 'Carousel 1',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo`,
    image: img1,
  },
  {
    id: Math.floor(Math.random() * 1000),
    icon: truck,
    title: 'Carousel 2',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo`,
    image: img2,
  },
  {
    id: Math.floor(Math.random() * 1000),
    icon: maps,
    title: 'Carousel 3',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo`,
    image: img3,
  },
];
