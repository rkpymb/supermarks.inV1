import * as React from 'react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import img1 from '../../public/img/explore-pass__illust.svg'
import Logo from '../../public/img/logo_pass.svg'
import Icon1 from '../../public/img/icon/explore-pass-trophy.svg'
import Icon2 from '../../public/img/icon/explore-pass-test.svg'
import Icon3 from '../../public/img/icon/explore-pass-poll.svg'
import Icon4 from '../../public/img/icon/explore-pass-lang.svg'
import { BASE_URL, AppName } from '../../Data/config'
export default function PassHeroBox() {

    return (
        <div className={styles.PassHeroBox}>

            <div className={styles.PassHeroBoxA}>
                <div className={styles.PassHeroBoxAImg}>
                    <Image src={img1} height={400} width={400} />
                </div>


            </div>
            <div className={styles.PassHeroBoxB}>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Enroll in {AppName} for 370+ exams with</span>
                {/* <div>
                    <Image src={Logo} height={50} width={150} />
                </div> */}
                <div>
                    Get unlimited access to the most relevant Mock Tests, on India #1 Online {AppName} Platform.
                </div>
                <div style={{ height: '20px' }}> </div>
                <div>
                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}> What you get with {AppName} Pass</span>
                </div>
                <div style={{ height: '20px' }}> </div>
                <div className={styles.PassHeroItemBox}>
                    <div className={styles.PassHeroItem}>
                        <div className={styles.IconPassheroimg} style={{ backgroundColor: '#fbf7e5' }}>
                            <Image src={Icon1} height={30} width={30} />
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <span style={{ fontWeight: '500' }}>All India Rank</span>
                        </div>
                    </div>
                    <div className={styles.PassHeroItem}>
                        <div className={styles.IconPassheroimg} style={{ backgroundColor: '#fff2eb' }}>
                            <Image src={Icon3} height={30} width={30} />
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <span style={{ fontWeight: '500' }}>In-depth
                                Performance Analysis</span>
                        </div>
                    </div>

                </div>
                <div className={styles.PassHeroItemBox}>
                    <div className={styles.PassHeroItem}>
                        <div className={styles.IconPassheroimg} style={{ backgroundColor: '#f3f0ff' }}>
                            <Image src={Icon2} height={30} width={30} />
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <span style={{ fontWeight: '500' }}>Latest Exam
                                Patterns</span>
                        </div>
                    </div>
                    <div className={styles.PassHeroItem}>
                        <div className={styles.IconPassheroimg} style={{ backgroundColor: '#e4feef' }}>
                            <Image src={Icon4} height={30} width={30} />
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <span style={{ fontWeight: '500' }}>Multi-lingual
                                Mock Tests</span>
                        </div>
                    </div>

                </div>
                <div style={{ height: '20px' }}> </div>
                <Link href='/TestSeries'>
                    <div className={styles.GetStartedBTN}>
                        <span>Get Started Today</span>
                    </div>
                </Link>
                <div style={{ height: '20px' }}> </div>
            </div>

        </div>
    );
}
