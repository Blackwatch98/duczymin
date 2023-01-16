import styles from '../styles/Gallery.module.css'
import Link from 'next/link'

type Image = {
    src: string;
    alt: string;
    ref: string;
    title: string;
    description: string;
}

const images: Image[] = [
    {src: 'okna-pcv.jpg', alt:'okna-pcv', ref: "/okna", title:'Okna PCV', description:'Na razie brak. To jest teki przykładowy tekst dla jaj żeby sprawdzić czy coś tu w ogóle działa :)'},
    {src: 'brama.jpg', alt:'brama', ref: "/bramy", title:'Bramy', description:'Na razie brak.'},
    {src: 'rolety-zew.jpg', alt:'rolety-zew', ref: "/rolety", title:'Rolety zewnętrzne', description:'Na razie brak.'},
    {src: 'parapet-wewnętrzny.jpg', alt:'parapety', ref: "/parapety", title:'Parapety', description:'Na razie brak.'},
    {src: 'drzwi.jpg', alt:'drzwi', ref: "/drzwi", title:'Drzwi', description:'Na razie brak.'},
    {src: 'zaluzja-pozioma.jpg', alt:'żaluzje fasadowe', ref: "/zaluzje", title:'Żaluzje fasadowe', description:'Na razie brak.'}
]

function Gallery() {
    return (
        <div className={styles.galleryContainer}>
                <GalleryImage/>
        </div>
    );
}

function GalleryImage() {
    return <>{(
        images.map(image => {
            return (
                <div className={styles.myCard} style={{
                    backgroundImage: `url(${image.src})`
                  }}>
                    <div className={styles.myCardContent}>
                        <h3 className={styles.myCardTitle}>{image.title}</h3>
                        <p className={styles.description}>{image.description}</p>
                        <Link href={image.ref} passHref>
                            <button className={styles.button}type="submit">Czytaj dalej...</button>
                        </Link>
                        
                    </div>   
                </div>
            );
        })
    )}
    </>
}

export default Gallery;