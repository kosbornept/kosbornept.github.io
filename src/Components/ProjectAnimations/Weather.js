import React from 'react';
import { useInView } from 'react-intersection-observer';
import WeatherImage from './weather.png';

const Weather = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div ref={ref} class="projectDiv">
        <div className={`projectDetail ${inView ? 'fade-in-bottom1' : ''}`}>
            <div style={{paddingLeft: '14vw'}} className='projectBody'>
                <p className="projectDescription"><span className='projectHeader'>Geolocation Weather App</span><br/><br/><span className='leadWord'>Elegant</span> application to display current weather in your area.</p>
                <img className='projectImage' src={WeatherImage} alt='To Do App' />
            </div>
        </div>
    </div>
  );
};

export default Weather;