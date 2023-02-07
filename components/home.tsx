import Image from 'next/image'
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css'
import Map from './map';
import { useState, useEffect } from 'react';

export interface CarouselImage {
  src: string,
  description?: string,
}

const images : CarouselImage[] = [{src: "/home.png"},
                                  {src: "/brama.jpg"},
                                  {src: "/okna-marzen.jpg"}]

function MyHome() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const moveNext = () => {
    if(currentIndex !== images.length) {
      setCurrentIndex(currentIndex + 1);
    }
    else if(currentIndex === images.length) {
      console.log("tutaj2");
      setCurrentIndex(1);
    }
  }

  const movePrev = () => {
    if(currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    }
    else if(currentIndex === 1) {
      setCurrentIndex(images.length);
    }
  }

  const moveDot = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.div}>
        <h1>Dom twoich marzeń</h1>
        <section aria-label="News">
          <div className={styles.carousel} data-carousel>
            <button onClick={() => movePrev()} className={`${styles["carousel-button"]} ${styles.prev}`}>&#8656;</button>
            <button onClick={() => moveNext()} className={`${styles["carousel-button"]} ${styles.next}`}>&#8658;</button>
            <ul>
              {
                images.map((image, imageIndex) => (
                <li className={currentIndex === imageIndex + 1 ? styles.slideActive : styles.slide}>
                  <Image width={1000} height={100} className={styles.slideImage} src={image.src} alt='home'/>
                </li>))
              }
            </ul>
            <div className={`${styles["container-dots"]}`}>
                {Array.from({length: 3}).map((item, index) => (
                  <div
                    onClick={() => moveDot(index + 1)}
                    className={currentIndex === index + 1 ? `${styles["dotActive"]}` : `${styles["dot"]}`}>
                  </div>
                ))}
            </div>
          </div>
        </section>
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