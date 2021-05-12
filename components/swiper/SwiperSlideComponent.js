import { SwiperSlide } from 'swiper/react';

import styles from '../../styles/SwiperSlide.module.scss';
export function SwiperSlideComponent({ children }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}
