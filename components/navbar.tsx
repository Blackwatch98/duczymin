import React, { useState, useRef, useEffect, UIEvent } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import img from '../public/duczymin-logo-biale.png'
import Image from 'next/image'

export default function NavBar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);
    const [isNavbarSticky, setisNavbarSticky] = useState(false);
    const [isProductsClicked, setIsProductsClicked] = useState(false);

    const scrollNavbar = () => {
        if(window.scrollY > 0) {
            setisNavbarSticky(true);
        } else {
            setisNavbarSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar); 
        return () => window.removeEventListener("scroll", scrollNavbar);
    });

    let isActiveClass = isNavbarExpanded ? `${styles["navbar-links"]} ${styles.magic}` : styles["navbar-links"]

    return (
        <nav className={styles.navbar} onScroll={scrollNavbar}>
            <Link className={styles.logo} href="/">
                <Image src={img} alt='logo'/>
            </Link>
            <a href='#' className={styles["toggle-button"]} onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={`${isActiveClass}`}>
                <ul className={styles.ul} onClick={() => setIsNavbarExpanded(false)}>
                    <div className={styles.dropdown} onClick={() => {console.log('click'); setIsProductsClicked(!isProductsClicked)}}>
                        <li>
                            <Link className={styles.link} href="/">
                                Produkty
                            </Link>
                        </li>
                        <div className={`${styles["dropdown-menu"]} ${isProductsClicked ? styles.active : styles.inactive}`}>
                            Dropdown Content
                        </div>
                    </div>
                    <li>
                        <Link className={styles.link} href="/">
                            O firmie
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Nasze realizacje
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/">
                            Wirtualny salon
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