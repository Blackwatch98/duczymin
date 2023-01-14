import img from '../public/home.png'
import Image from 'next/image'
import Gallery from '../components/gallery';
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, WrenchScrewdriverIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from '../styles/Home.module.css'

function MyHome() {
    return (
      <>
      <div className={styles.div}>
      <h1>Dom twoich marzeń</h1>
        <div>
            <Image src={img} alt='home'></Image>
        </div>   
        <h1>Nasza oferta</h1>
        <Gallery/>
        <h1>Znajdź nas</h1>
        <h1>Kontakt</h1>
        <footer>
            <div className={styles.container}>
                <div className={styles.row}>
                <div className={styles.col}>
                    <h3>Kontakt</h3>
                    <ul className={styles.ul}>
                    <li className={styles.contactLi}>
                        <span>
                        <MapPinIcon style={{height: 18, width:18}}/>
                            ul. Słowiańska 92<br></br>
                            95-070 Rąbień<br></br>
                            łódzkie
                        </span> 
                    </li>
                    <li className={styles.contactLi}>
                        <PhoneIcon style={{height: 18, width:18}}/>
                        <a>Kontakt z biurem</a><br></br>
                        <a>+48 42 712 86 50</a>
                    </li>
                    <li className={styles.contactLi}>
                        <PhoneIcon style={{height: 18, width:18}}/>
                        <a>Kontakt handlowy</a><br></br>
                        <a>+48 510 113 315</a>
                    </li>
                    <li className={styles.contactLi}>
                        <WrenchScrewdriverIcon style={{height: 18, width:18}}/>
                        <a>Kontakt techniczny</a><br></br>
                        <a>+48 503 073 188</a>
                    </li>
                    <li className={styles.contactLi}>
                        <EnvelopeIcon style={{height: 18, width:18}}/>
                        <a>Email</a><br></br>
                        <a>biuro@duczymin.pl</a>
                    </li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3>Oferta</h3>
                    <ul className={styles.ul}>
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
                </div>
                <div className={styles.col}>
                    <h3>Nasi partnerzy</h3>
                </div>
                </div>
            </div>      
            <div className={styles.centeredContainer}>
                <p>Copyright ©2023 Duczymin.pl - bramy, okna, automatyka, inteligentne domy.</p>
                <p className={styles.signature}>Stronę wykonał: Daniel Duczymiński.</p>
            </div>      
        </footer>
      </div>     
      </>
    );
  }
  
  export default MyHome;