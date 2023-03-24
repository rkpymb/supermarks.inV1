import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../../styles/Home.module.css'

import Link from 'next/link'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={styles.HeroSlider}
            >
                <SwiperSlide>
                    <Link href={`/AllCourses`} style={{ textDecoration: 'none' }}>
                        <div className={styles.HeroSliderIMg}>
                            <img src={'https://api.driteducation.com/Storage/img/Posters/homep1.jpg'} />
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`Course/React-Native-complete-course-Learn-App-Development`}  style={{ textDecoration: 'none' }}>
                    <div className={styles.HeroSliderIMg}>
                        <img src={'https://api.driteducation.com/Storage/img/Posters/appdevelopment.jpg'} />
                        </div>
                    </Link>
                </SwiperSlide>
               
               
               
                
            </Swiper>
        </>
    );
}
