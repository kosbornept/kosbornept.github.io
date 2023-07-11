import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Footer() {
  const [hover, setHover] = useState(false);
  let navigate = useNavigate();

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  }

  const routeChange = () => {
    let path = '/contact';
    navigate(path);
  }

  const { t } = useTranslation();
  return (
    <div className='footerDiv'>
        <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={routeChange} className='contactBtn'>{t('footer.title')}</button>
        <p className='footerQuote'>
          <Trans i18nKey="footer.body">
            The process is about what you want, so let's think {(hover) ? <span className='outsideTheBox'>outside the box</span> : <span>outside the box</span>} to realise your design.
          </Trans>
        </p>
    </div>
  )
}