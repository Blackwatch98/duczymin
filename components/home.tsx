import img from '../public/home.png'
import Image from 'next/image'

function Home2() {
    return (
      <>
        <h1>Dom twoich marzeń</h1>
        <div>
            <Image src={img} alt='home' width='600' height='400'></Image>
        </div>   
        <h1>Nasza oferta</h1>
        <h1>Znajdź nas</h1>
        <h1>Kontakt</h1>
      </>
    );
  }
  
  export default Home2;