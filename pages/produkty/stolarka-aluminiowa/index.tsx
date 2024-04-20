import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const oknoplastImages : MyImage[] = [
  {src: '/aluhaus-stolarka-aluminiowa-mini.jpg', alt:'aluhaus', title:'Aluhaus', download: '/catalogs/Katalog-ALUHAUS.pdf'}
]

const krispolImages : MyImage[] = [
  {src: '/krispol-stolarka-aluminiowa.jpg', alt:'stolarka aluminiowa', title:'Stolarka aluminiowa'}
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
          <h1>Stolarka aluminiowa</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/aluhaus-stolarka-aluminiowa.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Stolarka aluminiowa, będąca synonimem nowoczesności i trwałości,
            nie tylko nadaje wnętrzom elegancki wygląd, ale także zapewnia izolację termiczną i
            akustyczną na najwyższym poziomie. Jej lekka konstrukcja i łatwość konserwacji sprawiają,
            że jest doskonałym wyborem zarówno do nowoczesnych, jak i tradycyjnych projektów architektonicznych,
            gwarantując nie tylko estetykę, ale także komfort użytkowania przez długie lata.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Oknoplast</h2>
        </div>
        <ProductsGallery images={oknoplastImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
      </div>
    </>
  )
}