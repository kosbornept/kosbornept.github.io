import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation, Trans } from 'react-i18next';

const CardAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const { t } = useTranslation();

  return (
    <div ref={ref} className="goalsParentDiv">
        <div className={`goalsDiv1 ${inView ? 'fade-in-bottom' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>{t('description.cardQuote1.title')}</h4>
          </div>
          <div className='goalsCardBody'>
          <p>
            <Trans i18nKey="description.cardQuote1.body">
            Setting the groundwork for the initial design is a key part of the process. Designing can often be the most <span className='leadWord'>fun</span> part of the process, so let me help you achieve what <span className='leadWord'>you</span> want.
            </Trans>
            </p>
          </div>
        </div>
        <div className={`goalsDiv2 ${inView ? 'fade-in-bottom1' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>{t('description.cardQuote2.title')}</h4>
          </div>
          <div className='goalsCardBody'>
          <p>
            <Trans i18nKey="description.cardQuote2.body">
            A design process must come with achievable goals. This not only allows you to build <span className='leadWord'>trust</span> with your stakeholders, but allows our working relationship to be built with <span className='leadWord'>honesty</span>.
            </Trans>
            </p>
          </div>
        </div>
        <div className={`goalsDiv3 ${inView ? 'fade-in-bottom2' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>{t('description.cardQuote3.title')}</h4>
          </div>
          <div className='goalsCardBody'>
            <p>
            <Trans i18nKey="description.cardQuote3.body">
            By creating reachable designs with <span className='leadWord'>achievable</span> goals, we can achieve what works best for you. This process starts with an open and honest relationship that allows for <span className='leadWord'>creative</span> and constructive feedback.
            </Trans>
            </p>
          </div>
        </div>
      </div>
  );
};

export default CardAnimation;