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

export interface MyImage {
  src: string,
  alt: string,
  ref: string,
  title: string,
  description: string
}

const homeProductsImages: MyImage[] = [
  {src: 'okna-pcv.jpg', alt:'okna-pcv', ref: "/okna", title:'Okna PCV', description:'Na razie brak. To jest teki przykładowy tekst dla jaj żeby sprawdzić czy coś tu w ogóle działa :)'},
  {src: 'brama.jpg', alt:'brama', ref: "/bramy", title:'Bramy garażowe', description:'Na razie brak.'},
  {src: 'rolety-zew.jpg', alt:'rolety-zew', ref: "/rolety", title:'Rolety zewnętrzne', description:'Na razie brak.'},
  {src: 'drzwi.jpg', alt:'drzwi', ref: "/drzwi", title:'Drzwi zewnętrzne', description:'Na razie brak.'},
  {src: 'zaluzja-pozioma.jpg', alt:'żaluzje fasadowe', ref: "/zaluzje", title:'Żaluzje fasadowe', description:'Na razie brak.'},
  {src: 'parapet-wewnętrzny.jpg', alt:'rolety', ref: "/rolety", title:'Rolety wewnętrzne', description:'Na razie brak.'},
  {src: 'parapet-wewnętrzny.jpg', alt:'automatyka', ref: "/automatyka", title:'Automatyka', description:'Na razie brak.'},
  {src: 'parapet-wewnętrzny.jpg', alt:'parapety', ref: "/parapety", title:'Parapety', description:'Na razie brak.'},
]

const companyProductsImages: MyImage[] = [
  {src: 'okna-pcv.jpg', alt:'bramy-przemyslowe', ref: "/bramy-przemyslowe", title:'Bramy przemysłowe', description:'Na razie brak. To jest teki przykładowy tekst dla jaj żeby sprawdzić czy coś tu w ogóle działa :)'},
  {src: 'brama.jpg', alt:'bramy-rolowane', ref: "/bramy-rolowane", title:'Bramy rolowane', description:'Na razie brak.'},
  {src: 'rolety-zew.jpg', alt:'kraty-rolowane', ref: "/kraty-rolowane", title:'Kraty zewnętrzne', description:'Na razie brak.'},
  {src: 'drzwi.jpg', alt:'stolarka-aluminiowa', ref: "/stolarka-aluminiowa", title:'Stolarka aluminiowa', description:'Na razie brak.'}
]

const carouselImages : CarouselImage[] = [
  {src: "/promotions/test.jpg"},
  {src: "/okna-marzen.jpg"},
  {src: "/promotions/promotion.jpg"}
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const moveNext = () => {
    if(currentIndex !== carouselImages.length) {
      setCurrentIndex(currentIndex + 1);
    }
    else if(currentIndex === carouselImages.length) {
      setCurrentIndex(1);
    }
  }

  const movePrev = () => {
    if(currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    }
    else if(currentIndex === 1) {
      setCurrentIndex(carouselImages.length);
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
      <div className={styles.carouselDiv}>
        <section aria-label="News">
          <div className={styles.carousel} data-carousel>
            <button onClick={() => movePrev()} className={`${styles["carousel-button"]} ${styles.prev}`}>&#8656;</button>
            <button onClick={() => moveNext()} className={`${styles["carousel-button"]} ${styles.next}`}>&#8658;</button>
            <ul>
              {
                carouselImages.map((image, imageIndex) => (
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
        <h1 className={styles.h1}>Produkty dla domów</h1>
        <Gallery images={homeProductsImages}/>
        <h1 className={styles.h1}>Produkty dla firm</h1>
        <Gallery images={companyProductsImages}/>
        <h1 className={styles.h1}>Obejrzyj nasze realizacje</h1>
        <div>
          <div>
            Zdjęcie1
          </div>
          <div>
            Zdjęcie2
          </div>
          <div>
            Zdjęcie3
          </div>
          <button>Więcej</button>
        </div>
        <h1 className={styles.h1}>Znajdź nas</h1>
        <Map/>
        <Footer/>
      </div>     
    </>
  );
}