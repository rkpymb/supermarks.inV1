import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../../context/auth/CheckloginContext'
import styles from '../../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import HeaderMenuLeft from './Subparts/HeaderMenuLeft' 
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../../Data/config'
const Navbar = (props) => {
    const Contextdata = useContext(CheckloginContext)
    return (
        <div className={styles.navbarBox}>
            <div className={styles.Navbar}>
                <div className={styles.NavA}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <div className={styles.logomain}>
                                <img src='/logomain.png' alt='logo' className={styles.NavLogo} />
                            </div>
                        </Link>
                    </div>
                    {/* <div style={{marginLeft:'10px'}}>
                        <HeaderMenuLeft/>
                    </div> */}
                    <div className={styles.MainMenu}>
                        <Link href='/AllCourses'>
                            <li>Courses</li>
                        </Link>
                    </div>
                    <div className={styles.MainMenu}>
                        <Link href='/AllTestSeries'>
                            <li>Tests Series</li>
                        </Link>
                    </div>
                    <div className={styles.MainMenu}>
                        <Link href='/StudyMaterials'>
                            <li>Materials</li>
                        </Link>
                    </div>
                    <div className={styles.MainMenu}>
                        <Link href='/Phonepe'>
                            <li>Doubts</li>
                        </Link>
                    </div>
                </div>
                <div className={styles.NavLeft}>

                    <div className={styles.ContactTop}>
                        <div className={styles.Contact_icon}>
                            <span><IoIosCall /></span>
                        </div>
                        <div className={styles.Contact_number}>
                            <div className={styles.Contact_number_Text}>
                                <span>Talk to an expert</span>
                            </div>
                            <span>{Contactinfo.MainMobile}</span>
                        </div>
                    </div>
                    <div className={styles.loginbtnTopBtns}>
                        {!Contextdata.IsLogin && (
                            <Link href='Login'>
                                <div className={styles.loginbtnTop}>
                                    <span><AiOutlineLogin /></span>
                                    <small>Login</small>
                                </div>
                            </Link>

                        )}
                        {Contextdata.IsLogin && (
                            <Link href='/Dashboard'>
                                <div className={styles.loginbtnTop}>
                                    <span><VscAccount /></span>
                                    <small>Dashboard</small>
                                </div>
                            </Link>

                        )}
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Navbar