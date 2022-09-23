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


export default function TestSlider() {
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
                        slidesPerView: 2,

                    },
                    // when window width is >= 768px

                    768: {
                        width: 768,
                        slidesPerView: 2,

                    },
                }}
                navigation={true}
                slidesPerGroup={1}
                spaceBetween={5}
                slidesPerView={2}
            >
                <SwiperSlide className='swiper-container'>
                    <Link href='item/cat01/Vegetables'>


                        <div className={stylesBanner.BannerSliderCard}>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-09/wow-science_RN.jpg" alt='banner' className={stylesBanner.full_img} />
                        </div>
                    </Link>

                </SwiperSlide>
                <SwiperSlide className='swiper-container'>
                    <div className={stylesBanner.BannerSliderCard}>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-09/Durga-puja.jpg" alt='banner' className={stylesBanner.full_img} />
                    </div>

                </SwiperSlide>
                <SwiperSlide className='swiper-container'>
                    <div className={stylesBanner.BannerSliderCard}>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-09/real_RN.jpg" alt='banner' className={stylesBanner.full_img} />
                    </div>

                </SwiperSlide>
                <SwiperSlide className='swiper-container'>
                    <div className={stylesBanner.BannerSliderCard}>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-08/PG_RN_0.jpg" alt='banner' className={stylesBanner.full_img} />
                    </div>

                </SwiperSlide>
                <SwiperSlide className='swiper-container'>
                    <div className={stylesBanner.BannerSliderCard}>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-09/open-secret_RN.jpg" alt='banner' className={stylesBanner.full_img} />
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
}
