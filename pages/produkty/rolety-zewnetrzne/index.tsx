import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const oknoplastImages : MyImage[] = [
  {src: '/rolety-zew2.jpg', alt:'rolety', title:'Rolety', download: 'https://oknoplast.com.pl/broszury/OKNOPLAST-Rolety.pdf'}
]

const krispolImages : MyImage[] = [
  {src: '/krispol-rolety-zewnetrzne-mini.jpg', alt:'żaluzje i rolety', title:'Żaluzje i rolety', download: '/catalogs/krispol-katalog-zaluzje-i-rolety.pdf'},
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
          <h1>Rolety zewnętrzne</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/krispol-rolety-zewnetrzne.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Rolety firmowane marki KRISPOL nie tylko dbają o bezpieczeństwo i intymność domowników,
            lecz także zdobywają ich zaufanie poprzez wyjątkową funkcjonalność i energooszczędność,
            co pozwala na oszczędność w dłuższej perspektywie czasowej. Ich estetyczny design doskonale komponuje się z każdym wnętrzem,
            dodając mu elegancji i nowoczesności, a najwyższa jakość wykonania zapewnia nie tylko długoletnią, bezawaryjną pracę,
            lecz także gwarantuje satysfakcję użytkowników przez wiele lat.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Oknoplast</h2>
        </div>
        <ProductsGallery images={oknoplastImages}/>
      </div>
    </>
  )
}