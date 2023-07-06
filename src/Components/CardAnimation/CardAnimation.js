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
            <p>Setting the groundwork for the initial design is a key part of the process. Designing can often be the most <span className='leadWord'>fun</span> part of the process, so let me help you achieve what <span className='leadWord'>you</span> want.</p>
          </div>
        </div>
        <div className={`goalsDiv2 ${inView ? 'fade-in-bottom1' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>Achievable Goals</h4>
          </div>
          <div className='goalsCardBody'>
            <p>A design process must come with achievable goals. This not only allows you to build <span className='leadWord'>trust</span> with your stakeholders, but allows our working relationship to be built with <span className='leadWord'>honesty</span>.</p>
          </div>
        </div>
        <div className={`goalsDiv3 ${inView ? 'fade-in-bottom2' : ''}`}>
          <div className='goalsCardHeader'>
            <h4>Constructive Feedback</h4>
          </div>
          <div className='goalsCardBody'>
            By creating reachable designs with <span className='leadWord'>achievable</span> goals, we can achieve what works best for you. This process starts with an open and honest relationship that allows for <span className='leadWord'>creative</span> and constructive feedback.
          </div>
        </div>
      </div>
  );
};

export default CardAnimation;