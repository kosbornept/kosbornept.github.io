import React from 'react';
import { useInView } from 'react-intersection-observer';
import TodoImage from './todo.png';
import { useTranslation, Trans } from 'react-i18next';

const Todo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const { t } = useTranslation();

  return (
    <div ref={ref} className="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div className='projectBody'>
                <img className='projectImage' src={TodoImage} alt='To Do App' />
                <p className="projectDescription">
                  <span className='projectHeader'>
                    {t('projects.todo.title')}
                  </span>

                  <br/><br/>
                  
                  <Trans i18nKey="projects.todo.body">
                    A <span className='leadWord'>minimalistic</span> design that lets you focus on what's important.
                  </Trans>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Todo;