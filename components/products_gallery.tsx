import styles from '../styles/Products.module.css'
import Link from 'next/link'
import { MyImage } from './home';

export interface ImageProps {
    images: MyImage[]
}

const ProductsGallery: React.FC<ImageProps> = ({images}: ImageProps) => {
    return <>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {
                images.map(image => {
                    return (
                        <div className={styles.rowElement} style={{backgroundImage: `url(${image.src})`}}>
                            <div className={styles.imageHover}>
                                <div className={styles.elementInfoContainer}>
                                <div className={styles.titleContainer}>
                                    <p>{image.title}</p>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button>POBIERZ KATALOG</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
          </div> 
        </div>
    </>
}

export default ProductsGallery;