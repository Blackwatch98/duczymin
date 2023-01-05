import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import img from '../public/duczymin-logo.png'
import Image from 'next/image'


function NavBar() {
  return (
    <ul className={styles.ul}>
        <li className={styles.li}>
            <Link className={styles.logo} href="/">
                <Image src={img} alt='logo'/>
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Okna PCV
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Bramy garażowe
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Rolety
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Żaluzje fasadowe
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Drzwi
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Rolety wewnętrzne
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Automatyka
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Parapety
            </Link>
        </li>
        <li className={styles.li}>
            <Link className={styles.link} href="/">
                Kontakt
            </Link>
        </li>   
    </ul>
  );
}

export default NavBar;