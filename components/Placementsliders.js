import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FiChevronRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import stylesBanner from '../styles/Slider.module.css'
// import required modules
import { Navigation, Autoplay } from "swiper";


const Placementsliders = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/Placementslist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    console.log(parsed)
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])
    return (
        <>
            {isLoading &&
                <div >
                    <Skeleton variant="rectangular" height={150} />
                </div>
            }
            {!isLoading &&
                <div>
                    <div className={styles.centeritem} >
                        <div><h1 style={{ margin: '0' }}>Meet our Scholars</h1></div>
                        <div> <span><span className={styles.Skillfiltname}>SKILLFILT</span> has helped candidates secure over 60 crore worth of jobs in top companies</span></div>
                        <div> </div>

                    </div>
                    <div className={styles.dataspacer}> </div>
                    <div className={styles.section}>

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
                            spaceBetween={10}
                            slidesPerView={3}
                        >
                            {Retdata.map((item) => {
                                return <div key={item.id}>
                                    <SwiperSlide className='swiper-container'>

                                        <div className={stylesBanner.PlacementSliderItem}>
                                            <div className={stylesBanner.PlacementSliderItem_img}>
                                                <Image src={`https://aitechnolog.com/skillfilt/Storage/img/panel/Placements/${item.img}`} height={100} width={100} />
                                            </div>
                                            <div className={stylesBanner.PlacementSliderItem_data}>
                                                <span>{item.Name}</span>
                                                <small>{item.designation}, {item.Lpa}, {item.company}</small>
                                               
                                            </div>
                                        </div>


                                    </SwiperSlide>
                                </div>

                            }
                            )}

                        </Swiper>
                    </div>
                </div>

            }


        </>



    )
}

export default Placementsliders
