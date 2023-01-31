import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import img from '../public/duczymin-logo.png'
import Image from 'next/image'


export default function NavBar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);

    let isActiveClass = isNavbarExpanded ? `${styles["navbar-links"]} ${styles.magic}` : styles["navbar-links"]

    return (
        <nav className={styles.navbar}>
            <div className={styles["brand-title"]}>
                <Link className={styles.logo} href="/">
                    <Image src={img} alt='logo'/>
                </Link>
            </div>
            <a href='#' className={styles["toggle-button"]} onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={`${isActiveClass}`}>
                <ul className={styles.ul} onClick={() => setIsNavbarExpanded(false)}>
                    <li>
                        <Link className={styles.link} href="/">
                            Okna PCV
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Bramy garażowe
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Rolety
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Żaluzje fasadowe
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Drzwi
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Rolety wewnętrzne
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Automatyka
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Parapety
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Kontakt
                        </Link>
                    </li>   
                </ul>
            </div>
        </nav>
    );
}