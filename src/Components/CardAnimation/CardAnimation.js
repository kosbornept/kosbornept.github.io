import React from 'react';
import { useInView } from 'react-intersection-observer';

const CardAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div ref={ref} class="goalsParentDiv">
        <div className={`goalsDiv1 ${inView ? 'fade-in-bottom' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>Clear Design</h4>
          </div>
          <div className='goalsCardBody'>
            <p>Setting the groundwork for the initial design is a key part of the process. Designing can often be the most <span style={{color: 'red'}}>fun</span> part of the process, so let me help you achieve what <span style={{color: 'red'}}>you</span> want.</p>
          </div>
        </div>
        <div className={`goalsDiv2 ${inView ? 'fade-in-bottom1' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>Achievable Goals</h4>
          </div>
          <div className='goalsCardBody'>
            <p>A design process must come with achievable goals. This not only allows you to build <span style={{color: 'red'}}>trust</span> with your stakeholders, but allows our working relationship to be built with <span style={{color: 'red'}}>honesty</span>.</p>
          </div>
        </div>
        <div className={`goalsDiv3 ${inView ? 'fade-in-bottom2' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>Constructive Feedback</h4>
          </div>
          <div className='goalsCardBody'>
            By creating reachable designs with <span style={{color: 'red'}}>achievable</span> goals, we can achieve what works best for you. This process starts with an open and honest relationship that allows for <span style={{color: 'red'}}>creative</span> and constructive feedback.
          </div>
        </div>
      </div>
  );
};

export default CardAnimation;