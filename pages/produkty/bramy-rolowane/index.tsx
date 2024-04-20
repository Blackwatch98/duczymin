import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const krispolImages : MyImage[] = [
  {src: '/krispol-bramy-przemyslowe-rolowane.jpg', alt:'segmentowe', title:'Bramy i kraty rolowane', download: '/catalogs/krispol-katalog-przemyslowe-bramy-i-kraty-rolowane.pdf'}
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
          <h1>Bramy rolowane</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/krispol-przemyslowe-bramy-rolowane.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Bramy rolowane to wszechstronne rozwiązanie zapewniające nie tylko bezpieczeństwo,
            ale także efektywne wykorzystanie przestrzeni. Ich elastyczna konstrukcja pozwala na płynne otwieranie i
            zamykanie, co jest szczególnie ważne w przypadku obiektów o ograniczonej przestrzeni manewrowej.
            Dodatkowo, dzięki solidnym materiałom i nowoczesnym mechanizmom, bramy rolowane charakteryzują się
            długotrwałą niezawodnością, zapewniając spokój i komfort użytkownikom na wiele lat.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
      </div>
    </>
  )
}