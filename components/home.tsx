import Gallery from '../components/gallery';
import styles from '../styles/Home.module.css'
import Map from './map';
import { useState, useEffect, useRef } from 'react';
import { WrenchScrewdriverIcon, UserGroupIcon, Cog6ToothIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export interface CarouselImage {
  src: string,
  description?: string,
}

export interface MyImage {
  src: string,
  alt: string,
  ref?: string,
  title: string,
  description?: string
  download?: string
}

const homeProductsImages : MyImage[] = [
  {src: 'okna-winergetic-premium.jpg', alt:'okna-pcv', ref: "/produkty/okna-pcv", title:'Okna PCV', description:'Okna stanowią nie tylko podstawowy element każdego budynku, ale również są jego dekoracją...'},
  {src: 'brama-garaz-nowa.jpg', alt:'brama', ref: "/produkty/bramy-garazowe", title:'Bramy garażowe', description:'Brama powinna być dopasowana do elewacji budynku oraz swoją konstrukcją zapewniać maksimum bezpieczeństwa...'},
  {src: 'rolety-zewnetrzne.jpg', alt:'rolety-zew', ref: "/produkty/rolety-zewnetrzne", title:'Rolety zewnętrzne', description:'Zapewniają wygodę, ułatwiają oszczędzanie energii i poprawiają skuteczność ochrony antywłamaniowej...'},
  {src: 'drzwi-zew.jpg', alt:'drzwi', ref: "/produkty/drzwi-zewnetrzne", title:'Drzwi zewnętrzne', description:'Oprócz roli zabezpieczenia budynków i mieszkań stanowią też zaporę przed utratą ciepła...'},
  {src: 'zaluzje-fasadowe-mini.jpg', alt:'żaluzje fasadowe', ref: "/produkty/zaluzje-fasadowe", title:'Żaluzje fasadowe', description:'Żaluzje skutecznie chronią wnętrze domu przed promieniami słonecznymi, nie dopuszczając do wzrostu temperatury...'},
  {src: 'zaluzja-pozioma.jpg', alt:'rolety', ref: "/produkty/oslony-wewnetrzne", title:'Osłony wewnętrzne', description:'Osłony wewnętrzne zapewniają nie tylko prywatność, ale także elegancką estetykę i efektywne filtrowanie światła...'},
  {src: 'nice-automatyka.jpg', alt:'automatyka', ref: "/produkty/automatyka", title:'Automatyka', description:'Tylko profesjonalny dobór i montaż automatyki domowej zapewnia prawidłowe i długoletnie funkcjonowanie...'},
  {src: 'parapet-wewnętrzny.jpg', alt:'parapety', ref: "/produkty/parapety", title:'Parapety', description:'Parapety o doskonałej jakości, wykonane z trwałych materiałów, dodają pomieszczeniom stylu i funkcjonalności...'},
]

const companyProductsImages : MyImage[] = [
  {src: 'bramy-przemysl.jpg', alt:'bramy-przemyslowe', ref: "/produkty/bramy-przemyslowe", title:'Bramy przemysłowe', description:'Bramy przemysłowe o solidnej konstrukcji, zapewniające nie tylko bezpieczeństwo, ale także efektywną kontrolę dostępu...'},
  {src: 'brama-rolowana.jpg', alt:'bramy-rolowane', ref: "/produkty/bramy-rolowane", title:'Bramy rolowane', description:'Bramy rolowane, charakteryzujące się nie tylko wytrzymałością i funkcjonalnością, lecz także eleganckim designem...'},
  {src: 'stolarka-aluminiowa-mini.jpg', alt:'stolarka-aluminiowa', ref: "/produkty/stolarka-aluminiowa", title:'Stolarka aluminiowa', description:'Stolarka aluminiowa, cechująca się nie tylko lekkością i trwałością to doskonałe rozwiązanie dla nowoczesnych...'}
]

const carouselImages : CarouselImage[] = [
  {src: "/promotions/koncept_white.jpg"},
  {src: "/okno-pixel.jpg"},
  {src: "/promotions/krispol-bramy-garazowe.jpg"}
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageHoverRef = useRef(null);
  
  /*
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if( !entry.isIntersecting ) {
        return;
      }

      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(imageHoverRef.current!);
 
    return () => {
      if(imageHoverRef.current! != null)
      observer.unobserve(imageHoverRef.current!);
    }
  }, []);
  */
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
        <section>
          <div className={styles.carousel} data-carousel>
            <button onClick={() => movePrev()} className={`${styles["carousel-button"]} ${styles.prev}`}>&#8656;</button>
            <button onClick={() => moveNext()} className={`${styles["carousel-button"]} ${styles.next}`}>&#8658;</button>
            <ul className={styles.slides}>
              {
                carouselImages.map((image, imageIndex) => (
                <li className={currentIndex === imageIndex + 1 ? styles.slideActive : styles.slide}>
                  <img className={styles.slideImage} src={image.src} alt='home'/>
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
        <h1 className={styles.h1}>O nas</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutDescriptionContainer}>
            <p> 
              Firma DUCZYMIN to nie tylko ekspert w montażu i serwisie systemów bramowych,
              ogrodzeniowych oraz automatyki - to także Twoje zaufane źródło wysokiej jakości okien i
              różnorodnych osłon okiennych. Nasza firma od lat kładzie nacisk na trwałość, estetykę i
              przede wszystkim bezpieczeństwo oferowanych produktów, dlatego ścisła współpraca z renomowanymi
              producentami jest dla nas priorytetem.
            </p>
            <p>
              Nasza oferta obejmuje najwyższej jakości produkty, spełniające najwyższe standardy bezpieczeństwa,
              komfortu oraz estetyki. Zapewniamy szybki termin realizacji zamówienia, profesjonalny montaż oraz
              konkurencyjne ceny, co pozwala nam sprostać oczekiwaniom nawet najbardziej wymagających klientów.
            </p>
            <p>
            Nasi doświadczeni doradcy służą bezpłatną pomocą i fachowymi poradami na każdym etapie,
            od doboru odpowiednich rozwiązań po ich użytkowanie. Dysponujemy wyspecjalizowanymi ekipami monterskimi oraz
            zapleczem magazynowym i logistycznym, co pozwala nam zapewnić kompleksową obsługę naszych klientów.
            </p>
            <p>
            Jeśli poszukujesz wysokiej jakości produktów, doświadczenia oraz profesjonalnego podejścia - zapraszamy do współpracy z nami!
            </p>
          </div>
        </div>
        <div className={styles.badgesContainer}>
          <div className={styles.badgesRow}>
            <div className={styles.columnContainer}>
                <Cog6ToothIcon className={styles.badgeIcon}/>
                <h2>Serwis</h2>
                <p>5 lat gwarancji</p>
            </div>
            <div className={styles.columnContainer}>
                <WrenchScrewdriverIcon className={styles.badgeIcon}/>
                <h2>Montaż</h2>
                <p>Szybki i sprawny</p>
            </div>
            <div className={styles.columnContainer}>
                <BriefcaseIcon className={styles.badgeIcon}/>
                <h2>Wieloletnie doświadczenie</h2>
                <p>Ponad 10 lat w branży</p>
            </div>
            <div className={styles.columnContainer}>
                <UserGroupIcon className={styles.badgeIcon}/>
                <h2>Fachowe doradztwo</h2>
                <p>Nie możesz się zdecydować? Pozwól nam pomóc!</p>
            </div>
          </div>
        </div>
        <h1 className={styles.h1}>Produkty dla domów</h1>
        <Gallery images={homeProductsImages}/>
        <h1 className={styles.h1}>Produkty dla firm</h1>
        <Gallery images={companyProductsImages}/>
        {/*
        <h1 className={styles.h1}>Nasze realizacje</h1>
        <div className={styles.realizationContainer}>
          <div className={styles.realizationBox}>
            <img ref={imageHoverRef} src="home.png"></img>
            <div className={`${styles.imageHover} ${myElementIsVisible ? styles.hovered : ''}`}>
              <h2>Sprawdź dlaczego warto nam zaufać!</h2>     
              <a href='/realizacje'>Kliknij mnie</a>
            </div>
          </div>
        </div>
        */}
        <h1 className={styles.h1}>Znajdź nas</h1>
        <Map/>
      </div>
    </>
  );
}