import React from 'react';
import Footer from '../Footer/Footer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

export default function About() {
  return (
    <>
      <div className='aboutDiv'>
        <div className='aboutTitle fade-in-tl'>
          <h1>Kevin Osborne</h1>
          <h3>{`Retail Manager > Project Manager > `}<span style={{color:"red"}}>Web Designer</span></h3>
          <button style={{marginBottom: '5em'}} className='contactBtnAbout'>Contact</button>
          <div style={{display: 'flex', gap: '5em'}}>
            <div>
              <h2>Skills</h2>
              <h3>React</h3>
              <h3>SQL/PostgreSQL</h3>
              <h3>HTML/CSS/Bootstrap</h3>
              <h3>JS/jQuery</h3>
              <h3>Git/Github</h3>
              <h3>Basic C#</h3>
            </div>
            <div>
              <h2>Other</h2>
              <h3>English/Portuguese</h3>
              <h3>Excel/Sheets/Power BI</h3>
              <h3>Basic Salesforce</h3>
              <h3>FL Studio</h3>
            </div>
          </div>
        </div>
        <div className='aboutDescription fade-in'>
          <p>
          I live in Portugal with my partner Ana, we have recently just bought our first house, which we share with the real owner, our cat Loki. I like to unwind by creating music, painting or playing video games.
          <br/><br/>  
          I started considering web design as a potential career in 2020. During the pandemic, I didn't want to waste time indoors when I was given the perfect opportunity to use the isolation to study.
          <br/><br/>
          Before that, I had completed a degree in Music, Business and Management, spent 14 years in retail management, 1 year in project management and several other jobs in between it all. I found my own way to both lead and be led as part of a cohesive team.
          <br/><br/>
          I found several courses, and applied myself to everything I could. Some styles stuck, some didn't. I realised those that did had a design that really struck with me. So I focused on UX/UI design, using React.
          </p>
        </div>
      </div>
      <PhotoGallery />
      <Footer />
    </>
  )
}
