import Head from 'next/head';
import styles from '../../styles/Contact.module.css';
import { useState, useEffect } from 'react';
import Map from '../../components/map';
import { Form } from "react-bootstrap";
import ContactForm from '../../components/contact-form'

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

export default function ContactPanel() {


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
            <h1>Kontakt</h1>
            <img className={styles.divider} src="/title_divider_reversed.png"></img>
          </div>
          <ContactForm/>
          <div className={styles.mapContainer}>
            <h1>Znajdź nas</h1>
            <Map/>
        </div>
        </div>
      </>
    )
}