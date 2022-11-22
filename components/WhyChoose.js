import * as React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import img1 from '../public/img/icon/why-testbook-people.svg'
import img2 from '../public/img/icon/why-testbook-poll.svg'
import img3 from '../public/img/icon/why-testbook-live.svg'
import img4 from '../public/img/icon/why-testbook-lang.svg'
export default function WhyChoose() {
 
    return (
        <div className={styles.WhyChooseBox}>
            <div className={styles.WhyChooseBoxA}>
                <div><h1>Why Board Test App?</h1></div>
                <div><span>With 1.8+ Crore Students and India Highest Selection Rate amongst online learning platforms, you can surely rely on us to excel.</span></div>
            </div>
            <div style={{ height: '30px' }}> </div>
            <div className={styles.WhyChooseBoxB}>
                <div className={styles.WhyChooseBoxItem}>
                    <div className={styles.WhyChooseBoxItemIcon}>
                        <Image src={img1} height={50} width={50} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Learn from the Best</span>
                        </div>
                        <div>
                            <span style={{fontSize:'12px'}}>Learn from the masters of the subject, in the most engaging yet simplified ways</span>
                        </div>
                    </div>
                </div>
                <div className={styles.WhyChooseBoxItem}>
                    <div className={styles.WhyChooseBoxItemIcon}>
                        <Image src={img2} height={50} width={50} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Detailed Score Analysis</span>
                        </div>
                        <div>
                            <span style={{fontSize:'12px'}}>Get a detailed breakdown of your strengths & weaknesses and discover insights to improve your score</span>
                        </div>
                    </div>
                </div>
                <div className={styles.WhyChooseBoxItem}>
                    <div className={styles.WhyChooseBoxItemIcon}>
                        <Image src={img1} height={50} width={50} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Learn from the Best</span>
                        </div>
                        <div>
                            <span style={{fontSize:'12px'}}>Learn from the masters of the subject, in the most engaging yet simplified ways</span>
                        </div>
                    </div>
                </div>
                <div className={styles.WhyChooseBoxItem}>
                    <div className={styles.WhyChooseBoxItemIcon}>
                        <Image src={img4} height={50} width={50} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Multilingual</span>
                        </div>
                        <div>
                            <span style={{fontSize:'12px'}}>Learn in the language you are most comfortable with. Choose from any of our 8 languages</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
