import img from '../public/home.png'
import Image from 'next/image'
import Gallery from '../components/gallery';

function Home2() {
    return (
      <>
        <h1>Dom twoich marzeń</h1>
        <div>
            <Image src={img} alt='home'></Image>
        </div>   
        <h1>Nasza oferta</h1>
        <Gallery/>
        <h1>Znajdź nas</h1>
        <h1>Kontakt</h1>
      </>
    );
  }
  
  export default Home2;