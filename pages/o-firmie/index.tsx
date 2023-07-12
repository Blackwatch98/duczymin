import Head from 'next/head'
import styles from '../../styles/AboutUs.module.css'
import fonts from '../../styles/fonts.css'

export default function AboutUsPage() {
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
          <h1>O nas</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
      </div>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsPanel}>
          <div className={styles.aboutUsDescriptionContainer}>
            <p>
                Firma DUCZYMIN od lat specjalizuje się w montażu i serwisie systemów bramowych, 
                ogrodzeniowych oraz automatyki. Ponadto w naszej ofercie znajdziecie Państwo okna 
                oraz szeroką gamę osłon okiennych. Firma nasza postawiła przede wszystkim na jakość,
                trwałość i estetykę oferowanych produktów. Dlatego ściśle współpracyjemy z najbardziej
                cenionymi producentami na rynku. Oferowane produkty są najwyższej jakości odpowiadające
                standardom bezpieczeństwa, o najwyższym komforcie oraz estetyce.
            </p>
            <p>
                Swoim klientom oferujemy krótki termin realizacji, fachowy montaż oraz atrakcyjne ceny.
                Nasza współpraca obejmuje bezpłatne porady i pomiar. Dysponujemy wyspecjalizowanymi ekipami
                monterskimi oraz zapleczem magazynowym i logistycznym.
            </p>
            <p>
                Naszymi działaniami wspieramy klientów na każdym etapie doboru i użytkowania urządzeń.
                Jeśli poszukują Państwo wysokiej jakości towarów, doświadczenia i fachowego doradztwa – zapraszamy do współpracy!
            </p>
            <p className={'whatever'}>Halina Duczymińska</p>
          </div>
          <div className={styles.portraitImage}>
            <img src='/portret.png'></img>
          </div>
        </div>
      </div>
      <div className={styles.honourContainer}>

      </div>
      <div className={styles.opinionsContainer}>

      </div>
      <div className={styles.certificatesContainer}>

      </div>
    </>
  )
}