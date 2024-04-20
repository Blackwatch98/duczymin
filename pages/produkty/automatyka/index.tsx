import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const niceImages : MyImage[] = [
  {src: '/nice-naped-mini.jpg', alt:'automatyka', title:'Cennik 2023', download: '/catalogs/nice_cennik.pdf'}
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
          <img className={styles.divider} src="/title_divider.png"></img>
          <h1>Automatyka</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/nice-automatyka.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Automatyka i napędy do bram, gwarantujące nie tylko wygodę,
            ale także bezpieczeństwo oraz skuteczne zarządzanie dostępem do posesji,
            stanowią niezawodne rozwiązanie dla każdego użytkownika. Dzięki zaawansowanej technologii i
            innowacyjnym rozwiązaniom, zapewniają płynne i ciche otwieranie oraz zamykanie bram,
            umożliwiając kontrolę za pomocą różnorodnych urządzeń i systemów zarządzania,
            co sprawia, że codzienne korzystanie z bram staje się łatwe i komfortowe.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Nice</h2>
        </div>
        <ProductsGallery images={niceImages}/>
      </div>
    </>
  )
}