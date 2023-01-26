import img from '../public/home.png'
import Image from 'next/image'
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css'
import Map from './map';

function MyHome() {
    return (
      <>
        <div className={styles.div}>
        <h1>Dom twoich marzeń</h1>
        <div>
            <Image src={img} alt='home'></Image>
        </div>
        <h1>Promocje</h1>
        <h1>Oferta dla domów</h1>
        <Gallery/>
        <h1>Oferta dla firm</h1>
        <Gallery/>
        <h1>Znajdź nas</h1>
        <Map/>
        <Footer/>
      </div>     
      </>
    );
  }
  
  export default MyHome;