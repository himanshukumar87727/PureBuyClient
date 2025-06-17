import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ManualSlidingBar(data) {
    return (
        <div className='md:py-10 md:px-20'>

            <Swiper slidesPerView={1}>
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className='object-center object-cover w-full md:h-[50vh] h-[30vh]' src={item.image} alt="" />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
        
    )
}




