import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import CardAnimation from '../CardAnimation/CardAnimation';
import Todo from '../ProjectAnimations/Todo';
import Weather from '../ProjectAnimations/Weather';
import Calculator from '../ProjectAnimations/Calculator';
import Footer from '../Footer/Footer';

export default function Home() {

  const { t } = useTranslation();

  return (
    <>
      <header className="homeHeader">
        <blockquote className='fade-in-tl'>
          <Trans i18nKey="description.quote1">
            Simplicity is the fundamental part of design where we so often miss our <span className='leadWord'>target</span>.
          </Trans>
        <br/><br />
        <u className='focus-in-contract'>
          <Trans i18nKey="description.quote2">
            Let me help you <span className='leadWord'>hit yours</span>.
          </Trans>
        </u>
        </blockquote>
        <p className='fade-in'>{t('about.name')}</p>
      </header>
      <CardAnimation />
      <Todo />
      <Weather />
      <Calculator />
      <Footer />
    </>
  )
}
