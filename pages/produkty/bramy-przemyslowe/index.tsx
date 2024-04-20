import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const krispolImages : MyImage[] = [
  {src: '/krispol-brama-przemyslowa-mini.jpg', alt:'bramy przemysłowe', title:'Bramy przemysłowe', download: '/catalogs/krispol-katalog-przemyslowe-bramy-segmentowe.pdf'}
]

const wisniowskiImages : MyImage[] = [
  {src: '/wisniowski-bramy-przemyslowe-segmentowe.jpg', alt:'segmentowe', title:'Segmentowe', download: '/catalogs/bramy-przemyslowe-wisniowski.pdf'}
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
          <h1>Bramy przemysłowe</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/krispol-brama-przemyslowa.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Bramy przemysłowe, będące nieodłącznym elementem każdego obiektu komercyjnego czy przemysłowego,
            nie tylko zapewniają skuteczną ochronę mienia, ale także ułatwiają płynny przepływ ruchu pojazdów i towarów.
            Dzięki solidnej konstrukcji i nowoczesnym technologiom, bramy te charakteryzują się niezawodnością działania oraz
            łatwością obsługi, co sprawia, że są niezastąpionym narzędziem w zapewnianiu bezpieczeństwa i efektywności pracy w
            różnego rodzaju przedsiębiorstwach.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Wiśniowski</h2>
        </div>
        <ProductsGallery images={wisniowskiImages}/>
      </div>
    </>
  )
}