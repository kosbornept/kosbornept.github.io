import React from 'react';
import Footer from '../Footer/Footer';
import Obfuscate from 'react-obfuscate';

export default function Contact() {
  return (
    <>
      <div className='contactDiv'>
        <div className='fade-in-tl' style={{width: '50%'}}>
          <h2>Let's get in touch</h2>
          <p>Whether you have an aspiring idea and need help getting it over the line, or perhaps you need help from the start, please get in touch and let's discuss what we can get done for you.
          <br /><br />
          <span style={{color: 'red', fontSize: 'calc(8px + 2vmin)'}}>Kevin</span>
          </p>
        </div>
        <div className='fade-in' style={{width: '30%'}}>
          <div style={{marginBottom: '3em'}}>
            <h2>By <span style={{color: 'red'}}>email</span></h2>
            <h3><Obfuscate email="kwosborne.pt@gmail.com" /></h3>
          </div>
          <div>
            <h2>By <span style={{color: 'red'}}>whatsapp</span></h2>
            <h3><Obfuscate href="https://wa.me/351926563499">Direct Chat</Obfuscate></h3>
          </div>
        </div>
      </div>
    </>
  )
}
