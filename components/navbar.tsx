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
        <nav className={styles.navbar}>
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
                    <div className={styles.dropdown} onMouseLeave={() => setIsProductsClicked(false)}>
                        <li>
                            <Link className={styles.link} href="/" onMouseOver={() => {setIsProductsClicked(true)}}>
                                Produkty
                            </Link>
                        </li>
                        <div className={`${styles["dropdown-menu"]} ${isProductsClicked ? styles.active : styles.inactive}`}>
                            <div className={styles.column}>
                                <li><h3>Dla domów</h3></li>
                                <li><a href="/produkty/okna-pcv">Okna PCV</a></li>
                                <li><a href="/produkty/bramy-grazowe">Bramy garażowe</a></li>
                                <li><a href="/produkty/rolety-zewnetrzne">Rolety zewnętrzne</a></li>
                                <li><a href="/produkty/drzwi-zewnetrzne">Drzwi zewnętrzne</a></li>
                                <li><a href="/produkty/zaluzje-fasadowe">Żaluzje fasadowe</a></li>
                                <li><a href="/produkty/rolety-wewnetrzne">Rolety wewnętrzne</a></li>
                                <li><a href="/produkty/automatyka">Automatyka</a></li>
                                <li><a href="/produkty/parapety">Parapety</a></li>
                            </div>
                            <div className={styles.column}>
                                <li><h3>Dla firm</h3></li>
                                <li><a href="#">Bramy przemysłowe</a></li>
                                <li><a href="#">Bramy rolowane</a></li>
                                <li><a href="#">Kraty rolowane</a></li>
                                <li><a href="#">Stolarka aluminiowa</a></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </div>
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