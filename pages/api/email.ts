import { Resend } from 'resend';
import ContactEmail from '../../components/contact_email'
import { useState } from 'react';

const resend = new Resend('re_HXusyp48_L5ABHqRKKKPCmtznnv84LHbB');

export default async function POST(request: any) {

  try{
    const {
      nameInfo,
      emailAddress,
      phoneNumber,
      text
    } = request;

    await resend.sendEmail({
        from: 'email@mail.duczymin.dev',
        to: 'danielduczyminski@gmail.com', /*'biuro@duczymin.pl',*/
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
}