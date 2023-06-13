import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const productsImages : MyImage[] = [
  {src: '/okna-pcv.jpg', alt:'okna-pcv', title:'Pava'},
  {src: '/okna-pcv2.jpg', alt:'drzwi', title:'Winergetic Premium'},
  {src: '/okna-winergetic-premium-passive.jpg', alt:'winergetic-pp', title:'Winergetic Premium Passive'},
  {src: '/okna-prismatic.jpg', alt:'okna-prismatic', title:'Prismatic'},
  {src: '/okna-marzen.jpg', alt:'okna-marzen', title:'Pixel'},
  {src: '/okna-pcv.jpg', alt:'okna-pcv', title:'Prolux'},
  {src: '/okna-koncept.jpg', alt:'okna-koncept', title:'Koncept'}
]

export default function WindowsPage() {
  return (
    <>
      <Head>
        <title>Duczymin</title>
        <meta name="description" content="Created by Daniel Duczymiński" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bodyContainer}>
        <div className={styles.headerContainer}>
          <h1>Okna PCV</h1>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
              Okna powinny spełniać przede wszystkim wszelkie wymagania techniczne. W parze z wysokimi właściwościami
              izolacyjnymi powinna iść również funkcjonalność oraz design wykonania. Okna stanowią nie tylko podstawowy
              element każdego budynku, ale również są jego dekoracją. Przeszklenia powinny współgrać z elewacją i stylistyką obiektu.
              Wszystkie te aspekty spełniają systemy okienne OKNOPLAST.
            </p>
          </div>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/okna-pcv2.jpg`}/>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>OKNOPLAST</h2>
        </div>
        <ProductsGallery images={productsImages}/>
      </div>
    </>
  )
}