import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function AutomaticScrolling( data ) {
  return (
    <div className="md:py-10 md:px-20">
      <style>
        {`
          .swiper-slide {
            filter: brightness(50%);
            transform: scale(0.9);
            transition: all 0.9s ease;
          }

          .swiper-slide-active {
            filter: brightness(100%);
            transform: scale(1.05);
            z-index: 2;
          }

          .swiper-slide-prev,
          .swiper-slide-next {
            filter: brightness(70%);
            transform: scale(0.95);
          }
        `}
      </style>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '300px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#a78bfa',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <img
              className="object-center object-cover w-full h-full"
              src={item.image}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


