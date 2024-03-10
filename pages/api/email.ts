import { Resend } from 'resend';
import ContactEmail from '../../components/contact_email'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
const resend = new Resend('re_d2mwihef_EGguYHxhmRiWne5VnLuRgTkv');

export default async function POST(request: any) {

  try{
    const {
      nameInfo,
      emailAddress,
      phoneNumber,
      text
    } = request;

    emailjs.sendForm('service_gycc04y', 'template_c7cdlgz', 'msIzurYpXZbmSLSkq');
    /*
    await resend.sendEmail({
        from: 'danielduczyminski@gmail.com',//emailAddress,
        to: 'biuro@duczymin.pl',
        subject: 'Formularz ze strony duczymin.pl',
        react: ContactEmail({
          nameInfo,
          emailAddress,
          phoneNumber,
          text
        }),
      });
    }
    catch(error)
    {
      console.log(error)
    }
    */
}