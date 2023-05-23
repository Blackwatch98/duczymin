import Head from 'next/head'
import Body from 'next/head'
import styles from '../../../styles/Products.module.css'

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
          <h1>Okna PCV</h1>
          <div className={styles.descriptionContainer}>
            Okna powinny spełniać przede wszystkim wszelkie wymagania techniczne. W parze z wysokimi właściwościami
            izolacyjnymi powinna iść również funkcjonalność oraz design wykonania. Okna stanowią nie tylko podstawowy
            element każdego budynku, ale również są jego dekoracją. Przeszklenia powinny współgrać z elewacją i stylistyką obiektu.
            Wszystkie te aspekty spełniają systemy okienne OKNOPLAST.
          </div>
          <div className={styles.catalogsContainer}>
            <h2>Oknoplast</h2>
            <div className={styles.row}>
              <div className={styles.rowElement}>
                <div className={styles.elementInfoContainer}>
                  <div className={styles.titleContainer}>
                    <p>Pixel</p>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button>POBIERZ KATALOG</button>
                  </div>
                </div>
                <img src="/okna-pcv.jpg"></img>
                <div className={styles.imageHover}></div>
              </div>
            </div>
            <div className={styles.row}>
              <div>Katalog 1</div>
              <div>Katalog 2</div>
              <div>Katalog 3</div>
              <div>Katalog 4</div>
            </div>
            <div className={styles.row}>
              <div>Katalog 1</div>
              <div>Katalog 2</div>
              <div>Katalog 3</div>
              <div>Katalog 4</div>
            </div>
          </div>
      </div>
    </>
  )
}