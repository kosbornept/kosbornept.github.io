import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Dashboard from './dashboard.png';

const Weather = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const { t } = useTranslation();

  return (
    <div ref={ref} className="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div style={{paddingLeft: '14vw'}} className='projectBodyReverse'>
                <p className="projectDescription"><span className='projectHeader'>{t('projects.dashboard.title')}</span><br/><br/><Trans i18nKey="projects.dashboard.body">A <span className='leadWord'>clean</span> high level dashboard to visualize your company.</Trans></p>
                <img className='projectImage' src={Dashboard} alt='To Do App' />
            </div>
        </div>
    </div>
  );
};

export default Weather;