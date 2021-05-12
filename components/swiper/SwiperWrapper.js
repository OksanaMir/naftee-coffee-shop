import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from '../../styles/SwiperWrapper.module.scss';
export function SwiperWrapper({ children }) {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className={styles.swiperWrapperContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {children}
      </Swiper>
    </div>
  );
}
