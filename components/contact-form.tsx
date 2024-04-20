import styles from '../styles/Contact.module.css';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from "react-bootstrap";

interface FromError {
    isError: boolean,
    errorMessage: string;
  }

export default function ContactFrom() {
    const [state, setState] = useState<string>();
    const [formError, setFormError] = useState<FromError>({isError: false, errorMessage: ''});
    const initialFormData = {
      nameInfo: '',
      emailAddress: '',
      phoneNumber: '',
      text: ''
    };
    const [formData, setFormData] = useState<Record<string, string>>(initialFormData);

    const handleOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        if (formData.nameInfo === '') {
          setFormError(() => ({
            isError: true,
            errorMessage: 'Imię i nazwisko są wymagane!',
          }));
          return;
        } else if (formData.emailAddress === '') {
          setFormError(() => ({
            isError: true,
            errorMessage: 'Adres email jest wymagany!',
          }));
          return;
        } else if (formData.phoneNumber === '') {
            setFormError(() => ({
              isError: true,
              errorMessage: 'Numer telefonu jest wymagany!',
            }));
            return;
          } else if (formData.text === '') {
          setFormError(() => ({
            isError: true,
            errorMessage: 'Treść wiadomości jest wymagana!',
          }));
          return;
        }
  
        setState('loading');
        emailjs.send('service_gycc04y', 'template_c7cdlgz', formData,'msIzurYpXZbmSLSkq');
        setFormData(initialFormData);
        setFormError(() => ({
          isError: false,
          errorMessage: 'Poprawnie wysłano wiadomość!',
        }));
        setState('ready');
      }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    useEffect(() => {
        if (formError.errorMessage != '') {
          setFormError((data) => ({
            ...data,
            errorMessage: data.errorMessage,
          }));
          const timer = setTimeout(() => {
            setFormError(() => ({
              isError: false,
              errorMessage: '',
            }));
          }, 3000);
      
          return () => clearTimeout(timer);
        }
      }, [formError.isError]);

    return (
        <>
            <div className={styles.contactContainer}>
            <div className={styles.contactSubcontainer}>
              <h2>Formularz kontaktowy</h2>
              <form onSubmit={handleOnSubmit}>
                <p>
                  Imię i nazwisko (wymagane)
                  <span>
                    <input type='text' id='nameInfo' name='nameInfo' value={formData.nameInfo} onChange={handleInputChange}></input>
                  </span>
                </p>
                <p>
                  Adres email (wymagane)
                  <span>
                    <input type='text' id='emailAddress' name='emailAddress' value={formData.emailAddress} onChange={handleInputChange}></input>
                  </span>
                </p>
                <p>
                  Telefon (wymagane)
                  <span>
                    <input type='tel' id='phoneNumber' name='phoneNumber' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={formData.phoneNumber} onChange={handleInputChange}></input>
                  </span>
                </p>
                <p>
                  Treść wiadomości (wymagane)
                  <span>
                    <textarea id='text' name='text' value={formData.text} onChange={handleInputChange}></textarea>
                  </span>
                </p>
                <Form.Group controlId="formBasicCheckbox">
                  {
                    formError.errorMessage && (
                      <div>
                        <div
                          className={`${styles["alert"]}
                            ${styles[(formError.isError && formError.errorMessage !== '') ? "alert-danger" : "alert-success"]}
                          `}
                          role="alert"
                        >
                          {formError.errorMessage}
                        </div>
                      </div>
                    )
                  }
                </Form.Group>
                <button>Wyślij</button>
              </form>
            </div>
            <div className={styles.contactSubcontainer}>
              <div className={styles.dataContainer}>
                <h2>Dane kontaktowe</h2>
                <div>
                  <div className={styles.row}>
                    <div>
                      <p>
                        Adres:<br></br>
                        ul. Słowiańska 92<br></br>
                        95-070 Rąbień<br></br>
                        łódzkie<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Godziny otwarcia:<br></br>
                        pn-pt: 9-17<br></br>
                        sob: 10-13<br></br>
                      </p>
                    </div> 
                  </div>
                  <div className={styles.row}>
                    <div>
                      <p>
                        Kontakt z biurem:<br></br>
                        +48 42 712 86 50<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Kontakt handlowy:<br></br>
                        +48 510 113 315<br></br>
                      </p>
                    </div> 
                  </div>     
                  <div className={styles.row}>
                    <div>
                      <p>
                        Kontakt techniczny:<br></br>
                        +48 503 073 188<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Email:<br></br>
                        biuro@duczymin.pl<br></br>
                      </p>
                    </div>
                  </div>           
                </div>
              </div>
              <div className={styles.dataContainer}>
                <h2>Dane do faktury</h2>
                <p>
                  Duczymin Halina Duczymińska<br></br>
                  NIP: 947 12 24 005<br></br>
                  ul. Słowiańska 92<br></br>
                  95-070 Rąbień<br></br>
                </p>
              </div>
            </div>
          </div>
        </>
    );
}