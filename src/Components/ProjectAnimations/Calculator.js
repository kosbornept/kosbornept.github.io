import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import CalculatorImage from './calculator.png';

const Calculator = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const { t } = useTranslation();

  return (
    <div ref={ref} className="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div className='projectBody'>
                <img className='projectImage' src={CalculatorImage} alt='To Do App' style={{width: '40vw'}}/>
                <p className="projectDescription"><span className='projectHeader'>{t('projects.calculator.title')}</span><br/><br/><Trans i18nKey='projects.calculator.body'>A <span className='leadWord'>simple</span> calculator project to showcase that less can be more.</Trans></p>
            </div>
        </div>
    </div>
  );
};

export default Calculator;