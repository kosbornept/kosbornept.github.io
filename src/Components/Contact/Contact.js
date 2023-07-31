import React from 'react';
import Obfuscate from 'react-obfuscate';
import { useTranslation, Trans } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className='contactDiv'>
        <div className='fade-in-tl contactDesc'>
          <h2>{t('contact.title')}</h2>
          <p><Trans i18nKey="contact.body">Whether you have an aspiring idea and need help getting it over the line, or perhaps you need help from the start, please get in touch and let's discuss what we can get done for you.
          </Trans>
          <br /><br />
          <span className="leadWord "style={{fontSize: 'calc(8px + 2vmin)'}}>{t('about.name')}</span>
          </p>
        </div>
        <div className='fade-in contactLinks'>
          <div style={{marginBottom: '3em'}}>
            <h2><Trans i18nKey="contact.email">By <span className='leadWord'>email</span></Trans></h2>
            <h3><Obfuscate email="kwosborne.pt@gmail.com" /></h3>
          </div>
          <div>
            <h2><Trans i18nKey="contact.whatsapp">By <span className='leadWord'>whatsapp</span></Trans></h2>
            <h3><Obfuscate target="_blank" href="https://wa.me/351926563499">{t('contact.whatsappChat')}</Obfuscate></h3>
          </div>
        </div>
      </div>
    </>
  )
}
