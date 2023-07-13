import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import WeatherImage from './weather.png';

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
                <p className="projectDescription"><span className='projectHeader'>{t('projects.weather.title')}</span><br/><br/><Trans i18nKey="projects.weather.body">An <span className='leadWord'>elegant</span> application to display current weather in your area.</Trans></p>
                <img className='projectImage' src={WeatherImage} alt='To Do App' />
            </div>
        </div>
    </div>
  );
};

export default Weather;