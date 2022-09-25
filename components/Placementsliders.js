// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import stylesBanner from '../styles/Slider.module.css'
// import required modules
import { Navigation, Autoplay } from "swiper";


export default function Placementsliders() {
    return (
        <>
            <div className={stylesBanner.BannerSliderBox}>

            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 3,

                    },
                    // when window width is >= 768px

                    768: {
                        width: 768,
                        slidesPerView: 3,

                    },
                }}
                navigation={true}
                slidesPerGroup={1}
                spaceBetween={2}
                slidesPerView={3}
            >
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide className='swiper-container'>

                    <div className={stylesBanner.PlacementSliderItem}>
                        <div className={stylesBanner.PlacementSliderItem_img}>
                            <img src="/img/can1.jpg" alt='img' />
                        </div>
                        <div className={stylesBanner.PlacementSliderItem_data}>
                            <span>Rachita Ravindram</span>
                            <small>BDA, 10 LPA, Amazon</small>
                           
                        </div>
                    </div>


                </SwiperSlide>
                
               
               
                
               

            </Swiper>
        </>
    );
}
