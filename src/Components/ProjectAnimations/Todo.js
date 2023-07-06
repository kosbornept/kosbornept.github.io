import React from 'react';
import { useInView } from 'react-intersection-observer';
import TodoImage from './todo.png';

const Todo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div ref={ref} class="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div className='projectBody'>
                <img className='projectImage' src={TodoImage} alt='To Do App' />
                <p className="projectDescription"><span className='projectHeader'>To Do App</span><br/><br/><span className='leadWord'>Minimalistic</span> design that lets you focus on what's important.</p>
            </div>
        </div>
    </div>
  );
};

export default Todo;