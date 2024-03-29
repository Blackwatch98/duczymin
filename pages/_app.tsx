import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { UIEvent } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps}/>
      <Footer/>
    </div> 
  )
}

export default MyApp;
