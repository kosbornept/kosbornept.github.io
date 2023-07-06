import React from 'react';
import { useInView } from 'react-intersection-observer';
import CalculatorImage from './calculator.png';

const Calculator = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div ref={ref} class="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div className='projectBody'>
                <img className='projectImage' src={CalculatorImage} alt='To Do App' style={{width: '40vw'}}/>
                <p className="projectDescription"><span className='projectHeader'>Calculator</span><br/><br/><span className='leadWord'>Simple</span> calculator project to showcase that less can be more.</p>
            </div>
        </div>
    </div>
  );
};

export default Calculator;