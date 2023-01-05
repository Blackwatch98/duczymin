import styles from '../styles/Gallery.module.css'

type Image = {
    src: string;
    alt: string;
    ref?: string;
    title: string;
    description: string;
}

const images: Image[] = [
    {src: 'okna-pcv.jpg', alt:'okna-pcv', title:'Okna PCV', description:'Na razie brak. To jest teki przykładowy tekst dla jaj żeby sprawdzić czy coś tu w ogóle działa :)'},
    {src: 'brama.jpg', alt:'brama',  title:'Bramy', description:'Na razie brak.'},
    {src: 'rolety-zew.jpg', alt:'rolety-zew',  title:'Rolety zewnętrzne', description:'Na razie brak.'},
    {src: 'parapet-wewnętrzny.jpg', alt:'parapety',  title:'Parapety', description:'Na razie brak.'},
    {src: 'drzwi.jpg', alt:'drzwi',  title:'Drzwi', description:'Na razie brak.'},
    {src: 'zaluzja-pozioma.jpg', alt:'żaluzje fasadowe',  title:'Żaluzje fasadowe', description:'Na razie brak.'}
]

export default function Gallery() {
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
                        <button className={styles.button}type="submit">Czytaj dalej...</button>
                    </div>   
                </div>
            );
        })
    )}
    </>
}